import * as React from 'react';

import * as css from '../../css/chip8Page.module.css';
import '../../css/global.module.css';

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