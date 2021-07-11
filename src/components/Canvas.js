import React from "react";
import { useEffect, useRef } from "react";

import * as css from "../css/chip8Page.module.css";

const Canvas = (props) => {
    const { draw, pixel_size } = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            draw(context);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            width={64 * pixel_size}
            height={32 * pixel_size}
            className={css.canvasBorder}
        />
    );
};

export default Canvas;
