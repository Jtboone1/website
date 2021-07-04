import * as React from 'react';
import { useState } from 'react';

import * as chipCSS from '../../css/chip8Page.module.css';
import '../../css/global.module.css';

const Chip8 = () => {
    return (
        <>
            <main>
                <h1>Chip8</h1>
                <p>A Chip8 Emulator, written in Rust and compiled to WebAssembly</p>
            </main>
        </>
    );
};

export default Chip8;