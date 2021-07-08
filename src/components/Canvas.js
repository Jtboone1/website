import React from 'react';
import { useEffect, useRef } from 'react';

const Canvas = props => {

    const { draw } = props;
    const canvasRef = useRef(null);
  
    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId
        
        const render = () => {
            draw(context)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
             window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
  
  return <canvas ref={canvasRef} style={{width: 64 * 5, height: 32 * 5}}/>
}

export default Canvas;