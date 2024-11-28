import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import './FloatingWindow.css';

const FloatingWindow = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - x);
    setInitialY(e.clientY - y);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setX(e.clientX - initialX);
      setY(e.clientY - initialY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, x, y]);

  return (
    <div
      ref={ref}
      className="floating-window"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <div className="floating-window-header" onMouseDown={handleMouseDown}>
        <h3>Drag me</h3>
      </div>
      <div className="floating-window-body">
        <TodoList />
      </div>
    </div>
  );
};

export default FloatingWindow;