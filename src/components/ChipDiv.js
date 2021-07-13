
import React from "react";
import { useEffect, useRef } from "react";

import * as css from "../css/chip8Page.module.css";

const ChipDiv = (props) => {
    const textRef = useRef(null);

    const { get_value } = props;

    useEffect(() => {

        const text = textRef.current;
        let animationFrameId;

        const render = () => {
            if (get_value()) {
                const values = get_value();
                text.innerHTML = `
                    PC: 0x${values.pc.toString(16)}
                    Index: 0x${values.index.toString(16)}
                `
            }
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [get_value]);

    return (
        <text className={css.instructionLine} ref={textRef}/>
    );
};

export default ChipDiv;
