import React, { useState, useRef, useEffect } from 'react';
import './Canvas.css';

const DraggableCanvas = () => {

  const canvasRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  
  const addShape = (shape) => {
    const newShape = { type: shape, x: 10, y: 10, size: 50, color: randomColor() };
    setShapes([...shapes, newShape]);
  };

  const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
      ctx.fillStyle = shape.color;
      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size, 0, 2 * Math.PI);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
          break;
        case "rectangle":
          ctx.fillRect(shape.x, shape.y, shape.size * 2, shape.size);
          break;
        default:
          break;
      }
    });

  };

  useEffect(() => {
    draw();
  }, [shapes]);

  const clearCanvas = () => {
    setShapes([]);
  };




  return (
    <div className="canvas-container">
      <div className="sidebar">
            <div className="elements">
              <button onClick={() => addShape('circle')}>Add Circle</button>
              <button onClick={() => addShape('square')}>Add Square</button>
              <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
            </div>
            <button className="clear" onClick={() => clearCanvas()}> Clear</button>
      </div>
      <canvas
        className='canvas'
        ref={canvasRef}
        id="canvas"
        />
    </div>
    
  );
};

export default DraggableCanvas;