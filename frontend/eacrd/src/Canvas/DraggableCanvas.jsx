import React, { useState, useRef, useEffect } from 'react';

const DraggableCanvas = () => {
  const [elements, setElements] = useState([
    { x: 50, y: 50, width: 50, height: 50, color: 'red', isDragging: false }
  ]);
  const [dragIndex, setDragIndex] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach(el => {
      ctx.fillStyle = el.color;
      ctx.fillRect(el.x, el.y, el.width, el.height);
    });
  }, [elements]);

  const handleMouseDown = e => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const hitIndex = elements.findIndex(el =>
      mouseX >= el.x &&
      mouseX <= el.x + el.width &&
      mouseY >= el.y &&
      mouseY <= el.y + el.height
    );

    if (hitIndex >= 0) {
      setDragIndex(hitIndex);
      setElements(prev => {
        const newElems = [...prev];
        newElems[hitIndex].isDragging = true;
        return newElems;
      });
    }
  };

  const handleMouseMove = e => {
    if (dragIndex === null) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setElements(prev => {
      const newElems = [...prev];
      const el = newElems[dragIndex];
      if (el.isDragging) {
        el.x = mouseX - el.width / 2;
        el.y = mouseY - el.height / 2;
      }
      return newElems;
    });
  };

  const handleMouseUp = () => {
    if (dragIndex !== null) {
      setElements(prev => {
        const newElems = [...prev];
        newElems[dragIndex].isDragging = false;
        return newElems;
      });
    }
    setDragIndex(null);
  };

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={400}
      height={600}
      style={{ border: '1px solid white' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default DraggableCanvas;