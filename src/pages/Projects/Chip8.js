import * as React from "react";
import { useEffect, useContext, useRef, useState } from "react";

import StyleContext from "../../components/Context";
import Canvas from "../../components/Canvas";
import ChipDiv from "../../components/ChipDiv";
import { handleKeyDown, handleKeyUp } from "../../components/KeyHandler";
import { extract_opcode_name } from "../../components/OpcodeExtractor";
import { useMediaQuery } from "react-responsive";

import * as css from "../../css/chip8Page.module.css";

const SET_COLOR = "#70FF70";
const UNSET_COLOR = "#000000";
const WIDTH = 64;
const HEIGHT = 32;
const LARGE_PIXEL_SIZE = 8;
const MEDIUM_PIXEL_SIZE = 6;
const SMALL_PIXEL_SIZE = 4;

const Chip8 = () => {
    const style = useRef(useContext(StyleContext));
    const [chip, setChip] = useState(null);
    const [memory, setMem] = useState(null);
    const [speed, setSpeed] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isPaused, setPaused] = useState(true);
    const [clicked, setClicked] = useState(false);

    const large_screen = useMediaQuery({ query: "(min-width: 1200px)" });
    const medium_screen = useMediaQuery({ query: "(min-width: 500px)" });

    const loadWASM = async () => {
        // Load WASM from our package

        // The reason for this useless concatenation
        // is to get rid of a really specific issue
        // with Webpack and WASM modules being imported
        // all in one line.

        /*eslint no-useless-concat: "off"*/
        const module = await import("boone8/" + "boone8.js");
        const memModule = await import("boone8/" + "boone8_bg.wasm");
        const memory = memModule.memory;

        const chip = module.CHIP8.new();
        setChip(chip);
        setMem(memory);
    };

    const loadROM = async (selectedROM) => {
        if (chip) {
            // Get Chip8 Memory
            const memPtr = chip.get_memory();
            const cpu_memory = new Uint8Array(memory.buffer, memPtr, 4096);

            // Get ROM from file
            const rom = await fetch(`/roms/${selectedROM}`);
            const arrBuffer = await rom.arrayBuffer();

            // Copy ROM memory into Chip8 memory
            const romData = new DataView(arrBuffer, 0, arrBuffer.byteLength);
            for (let i = 0; i < romData.byteLength; i++) {
                cpu_memory[0x200 + i] = romData.getUint8(i);
            }

            window.addEventListener("keyup", (e) => handleKeyUp(e, chip));
            window.addEventListener("keydown", (e) => handleKeyDown(e, chip));
            setLoading(false);
        }
    };

    const getIndex = (row, column) => row * 64 + column;

    const draw = (ctx) => {

        const pixel_size = get_pixel_size();
        const videoPtr = chip.get_video();
        const pixels = new Uint8Array(
            memory.buffer,
            videoPtr,
            WIDTH * HEIGHT
        );

        ctx.beginPath();
        ctx.fillStyle = SET_COLOR;
        for (let row = 0; row < HEIGHT; row++) {
            for (let col = 0; col < WIDTH; col++) {
                const idx = getIndex(row, col);
                if (pixels[idx] === 0) {
                    continue;
                };

                ctx.fillRect(
                    col * pixel_size,
                    row * pixel_size,
                    pixel_size,
                    pixel_size
                );
            };
        };

        ctx.fillStyle = UNSET_COLOR;
        for (let row = 0; row < HEIGHT; row++) {
            for (let col = 0; col < WIDTH; col++) {
                const idx = getIndex(row, col);
                if (pixels[idx] !== 0) {
                    continue;
                }

                ctx.fillRect(
                    col * pixel_size,
                    row * pixel_size,
                    pixel_size,
                    pixel_size
                );
            };
        }
        ctx.stroke();

        // Cycles through opcodes by calling the tick method
        if (!isPaused || (isPaused && clicked)) {
            for (let i = 0; i < speed; i++) {
                chip.tick();
            };
        };
    };

    const draw_nothing = (ctx) => {
        const pixel_size = get_pixel_size();
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, WIDTH * pixel_size, HEIGHT * pixel_size);
    };

    const resetLoad = (e) => {
        setLoading(true);
        chip.reset();
        loadROM(e.target.value);
    };

    const get_pixel_size = () => {
        if (large_screen) return LARGE_PIXEL_SIZE;
        else if (medium_screen) return MEDIUM_PIXEL_SIZE;
        else return SMALL_PIXEL_SIZE;
    };

    const get_chip_values = () => {
        if (chip && memory) {
            return {
                pc: chip.get_pc(),
                index: chip.get_index(),
                st: chip.get_sound_timer(),
                dt: chip.get_delay_timer(),
                registers: new Uint8Array(memory.buffer, chip.get_registers(), 16)
            }
        }
    }

    useEffect(() => {
        loadWASM();
        style.current.setStyle(true);
    }, []);

    useEffect(() => {
        setClicked(false);
    }, [clicked])

    return (
        <>
            <main className={css.cssMain}>
                <h1 className={css.title}>Boone-8</h1>
                <p className={css.desc}>
                    A Chip8 Emulator written in Rust and compiled to
                    WebAssembly.
                </p>
                <div className={css.centerDiv}>
                    <select
                        className={css.chipButton}
                        onChange={(e) => resetLoad(e)}
                    >
                        <option value="">Load ROM</option>
                        <option value="Blinky.ch8">Blinky</option>
                        <option value="Bowling.ch8">Bowling</option>
                        <option value="Cave.ch8">Cave</option>
                        <option value="Connect4.ch8">Connect4</option>
                        <option value="Pong.ch8">Pong</option>
                        <option value="Space.ch8">Space</option>
                        <option value="Submarine.ch8">Submarine</option>
                        <option value="Tank.ch8">Tank</option>
                        <option value="Tetris.ch8">Tetris</option>
                        <option value="WipeOff.ch8">WipeOff</option>
                        <option value="Worm.ch8">Worm</option>
                    </select>
                    <select
                        className={css.chipButton}
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                    >
                        <option value={0}>Speed</option>
                        <option value={0}>x0</option>
                        <option value={1}>x1</option>
                        <option value={2}>x2</option>
                        <option value={4}>x4</option>
                        <option value={8}>x8</option>
                        <option value={10}>x10</option>
                    </select>
                    <button
                        onClick={() => setPaused(!isPaused)}
                        className={css.chipButton}
                    >
                        {isPaused ? "Start" : "Stop"}
                    </button>
                    <button
                        className={css.chipButton}
                        onClick={() => setClicked(true)}
                    >
                        Step
                    </button>
                </div>
                <div className={css.canvasDiv}>
                    <Canvas
                        draw={loading ? draw_nothing : draw}
                        pixel_size={get_pixel_size()}
                        width={get_pixel_size() * 64}
                        height={get_pixel_size() * 32} 
                        borderStyle={css.canvasBorder}
                    />{" "}
                </div>
                <div className={css.centerDiv}>
                    <ChipDiv get_value={get_chip_values}/>
                </div>
                <br />
                <p className={css.instructionTitle}>
                    Chip8 Keypad - Mapped Keypad
                </p>
                <hr className={css.line} />
                <p className={css.instructionLine}>1 2 3 C - 1 2 3 4</p>
                <p className={css.instructionLine}>4 5 6 D - Q W E R</p>
                <p className={css.instructionLine}>7 8 9 E - A S D F</p>
                <p className={css.instructionLine}>A 0 B F - Z X C V</p>
                <hr className={css.line} />
                <p className={css.pTitle}>What is this?</p>
                <p className={css.pText}>
                    This is an emulator for the Chip8 interpreted programming
                    languge. An emulator is basically just a piece of hardware /
                    software that is written to behave like another piece of
                    hardware / software. In this example, I emulated the Chip8
                    interpreted programming languge, which was made in the
                    1970s. It was designed to allow video games to easily be
                    programmed for the computers of that era, like the Telmac
                    1800.
                </p>
                <p className={css.pText}>
                    I was always fascinated with the idea of creating software
                    that behaved like hardware. I wanted to try my hand at
                    emulating older video game consoles, and from my research,
                    it seemed that the Chip8 was the goto "baby's first
                    emulator". It is ideal for it's simplistic instruction set,
                    only having about 35 opcodes to interpret.
                </p>
                <p className={css.pText}>
                    In the future, I'd like to try emulating the Nintendo
                    Entertainment System (NES).
                </p>
            </main>
        </>
    );
};

export default Chip8;
