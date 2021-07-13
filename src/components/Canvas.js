import React from "react";
import { useEffect, useRef } from "react";

const Canvas = (props) => {
    const { draw, height, width, borderStyle } = props;
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
            className={borderStyle}
            width={width}
            height={height}
        />
    );
};

export default Canvas;
