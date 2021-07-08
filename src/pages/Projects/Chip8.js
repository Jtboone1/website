import * as React from 'react';
import { useEffect, useContext, useRef, useState } from 'react';

import StyleContext from '../../components/Context';
import Canvas from '../../components/Canvas';

import * as css from '../../css/chip8Page.module.css';
import '../../css/global.module.css';

const SET_COLOR = '#00FF00';
const UNSET_COLOR = '#000000';
const PIXEL_SIZE = 4;
const width = 64;
const height = 32;

const Chip8 = () => {
    const style = useRef(useContext(StyleContext))
    const [chip, setChip] = useState(null);
    const [memory, setMem] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadWASM = async () => {

        // Load WASM from our package.
        const module = await import("./pkg/boone8.js");
        const memModule = await import("./pkg/boone8_bg.wasm")
        const memory = memModule.memory;

        const chip = module.CHIP8.new();
        setChip(chip);
        setMem(memory);
    }

    const loadROM = async () => {

        // Get Chip8 Memory
        const memPtr = chip.get_memory();
        const cpu_memory = new Uint8Array(memory.buffer, memPtr, 4096);

        // Get ROM from file
        const rom = await fetch('/roms/Blinky.ch8');
        const arrBuffer = await rom.arrayBuffer();

        // Copy ROM memory into Chip8 memory
        const romData = new DataView(arrBuffer, 0, arrBuffer.byteLength);
        for (let i = 0; i < romData.byteLength; i++) {
            cpu_memory[0x200 + i] = romData.getUint8(i);
        }

        setLoading(false);
    }

    const getIndex = (row, column) => row * 64 + column;

    const draw = (ctx) => {
        const videoPtr = chip.get_video();
        const pixels = new Uint8Array(memory.buffer, videoPtr, width * height);
        ctx.beginPath();

        ctx.fillStyle = SET_COLOR;
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const idx = getIndex(row, col);
                if (pixels[idx] === 0) {
                    continue;
                }

                ctx.fillRect(
                    col * PIXEL_SIZE + 1,
                    row * PIXEL_SIZE + 1,
                    PIXEL_SIZE,
                    PIXEL_SIZE
                );
            }
        }

        ctx.fillStyle = UNSET_COLOR;
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const idx = getIndex(row, col);
                if (pixels[idx] !== 0) {
                    continue;
                }

                ctx.fillRect(
                    col * PIXEL_SIZE + 1,
                    row * PIXEL_SIZE + 1,
                    PIXEL_SIZE,
                    PIXEL_SIZE
                );
            }
        }
        ctx.stroke();
        for (let i = 0; i < 10; i++) {
            chip.tick();
        }
    }

    useEffect(() => {
        style.current.setStyle(true);
    }, [])

    return (
        <>
            <main className={css.cssMain}>
                <h1 className={css.title}>Chip8</h1>
                <p className={css.desc}>A Chip8 Emulator, written in Rust and compiled to WebAssembly.</p>
                {loading ? <p className={css.desc}>HELLO</p> : 
                    <div style={{marginLeft: '40%', width: 1000, height: 1000}}>
                        <Canvas draw={draw} />
                    </div>
                }
                <button onClick={() => loadWASM()} style={{backgroundColor: 'blue', width: 30, height: 30}}>WASM</button>
                <button onClick={() => loadROM()} style={{backgroundColor: 'green', width: 30, height: 30}}>ROM</button>
            </main>
        </>
    );
};

export default Chip8;