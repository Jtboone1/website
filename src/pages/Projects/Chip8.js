import * as React from 'react';
import { CHIP8 } from 'boone8';
import { memory } from 'boone8/boone8_bg.wasm';

import * as css from '../../css/chip8Page.module.css';
import '../../css/global.module.css';

const chip = CHIP8.new();
const memPtr = chip.get_memory();
const chipMem = new Uint8Array(memory.buffer, memPtr, 4096)
console.log(chipMem[0x050]);


const Chip8 = () => {

    return (
        <>
            <main className={css.cssMain}>
                <h1 className={css.title}>Chip8</h1>
                <p className={css.desc}>A Chip8 Emulator, written in Rust and compiled to WebAssembly.</p>
            </main>
        </>
    );
};

export default Chip8;