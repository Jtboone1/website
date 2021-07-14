
import React from "react";
import { useEffect, useRef } from "react";

import * as css from "../css/chip8Page.module.css";

const ChipDiv = (props) => {

    const pcRef = useRef(null);
    const indexRef = useRef(null);
    const opRef = useRef(null);
    const delayRef = useRef(null);
    const soundRef = useRef(null);
    const stackRef = useRef(null);

    const v0 = useRef(null);
    const v1 = useRef(null);
    const v2 = useRef(null);
    const v3 = useRef(null);
    const v4 = useRef(null);
    const v5 = useRef(null);
    const v6 = useRef(null);
    const v7 = useRef(null);
    const v8 = useRef(null);
    const v9 = useRef(null);
    const vA = useRef(null);
    const vB = useRef(null);
    const vC = useRef(null);
    const vD = useRef(null);
    const vE = useRef(null);
    const vF = useRef(null);

    const RegisterLine = (regNum, ref, blank = true) => {
        return(
            <>
                {blank &&
                    <>
                        <span/>
                        <span/>
                    </>
                }
                <text className={css.boxText}>{`V${regNum}: `}</text>
                <text className={css.boxText} ref={ref}/>
            </>
        )
    }

    const { get_value } = props;

    useEffect(() => {

        const pcText = pcRef.current;
        const indexText = indexRef.current;
        const opText = opRef.current;
        const soundText = soundRef.current;
        const delayText = delayRef.current;
        const siText = stackRef.current;

        const v0Text = v0.current;
        const v1Text = v1.current;
        const v2Text = v2.current;
        const v3Text = v3.current;
        const v4Text = v4.current;
        const v5Text = v5.current;
        const v6Text = v6.current;
        const v7Text = v7.current;
        const v8Text = v8.current;
        const v9Text = v9.current;
        const vAText = vA.current;
        const vBText = vB.current;
        const vCText = vC.current;
        const vDText = vD.current;
        const vEText = vE.current;
        const vFText = vF.current;

        let animationFrameId;

        const render = () => {
            if (get_value()) {
                const values = get_value();

                pcText.innerHTML = `0x${values.pc.toString(16)}`;
                indexText.innerHTML = `0x${values.index.toString(16)}`;
                opText.innerHTML = `${values.opcode}`;
                delayText.innerHTML = `0x${values.dt.toString(16)}`;
                soundText.innerHTML = `0x${values.st.toString(16)}`;
                siText.innerHTML = `0x${values.si.toString(16)}` ;

                v0Text.innerHTML = `0x${values.registers[0x0].toString(16)}`;
                v1Text.innerHTML = `0x${values.registers[0x1].toString(16)}`;
                v2Text.innerHTML = `0x${values.registers[0x2].toString(16)}`;
                v3Text.innerHTML = `0x${values.registers[0x3].toString(16)}`;
                v4Text.innerHTML = `0x${values.registers[0x4].toString(16)}`;
                v5Text.innerHTML = `0x${values.registers[0x5].toString(16)}`;
                v6Text.innerHTML = `0x${values.registers[0x6].toString(16)}`;
                v7Text.innerHTML = `0x${values.registers[0x7].toString(16)}`;
                v8Text.innerHTML = `0x${values.registers[0x8].toString(16)}`;
                v9Text.innerHTML = `0x${values.registers[0x9].toString(16)}`;
                vAText.innerHTML = `0x${values.registers[0xA].toString(16)}`;
                vBText.innerHTML = `0x${values.registers[0xB].toString(16)}`;
                vCText.innerHTML = `0x${values.registers[0xC].toString(16)}`;
                vDText.innerHTML = `0x${values.registers[0xD].toString(16)}`;
                vEText.innerHTML = `0x${values.registers[0xE].toString(16)}`;
                vFText.innerHTML = `0x${values.registers[0xF].toString(16)}`;
            }
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [get_value]);

    return (
        <div className={css.textBox}>

                <text className={css.boxText}>PC: </text>
                <text className={css.boxText} ref={pcRef}/>
                {RegisterLine("0", v0, false)}

                <text className={css.boxText}>Index: </text>
                <text className={css.boxText} ref={indexRef}/>
                {RegisterLine("1", v1, false)}

                <text className={css.boxText}>SI: </text>
                <text className={css.boxText} ref={stackRef}/>
                {RegisterLine("2", v2, false)}

                <text className={css.boxText}>DT: </text>
                <text className={css.boxText} ref={delayRef}/>
                {RegisterLine("3", v3, false)}

                <text className={css.boxText}>ST: </text>
                <text className={css.boxText} ref={soundRef}/>
                {RegisterLine("4", v4, false)}

                <text className={css.boxText}>OP: </text>
                <span/>
                {RegisterLine("5", v5, false)}

                <text className={css.boxText} ref={opRef}/>
                <span/>
                {RegisterLine("6", v6, false)}
                
                {RegisterLine("7", v7)}
                {RegisterLine("8", v8)}

                {RegisterLine("9", v9)}
                {RegisterLine("a", vA)}

                {RegisterLine("b", vB)}
                {RegisterLine("c", vC)}

                {RegisterLine("d", vD)}
                {RegisterLine("e", vE)}

                {RegisterLine("f", vF)}
        </div>
    );
};


export default ChipDiv;
