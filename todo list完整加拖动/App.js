import React, { useState } from 'react';
import './App.css';
import FloatingWindow from './FloatingWindow';

function App() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <div className="App">
      <button 
        onClick={() => setShowWindow(!showWindow)}
        style={{ margin: '20px' }}
      >
        {showWindow ? '关闭悬浮窗' : '打开悬浮窗'}
      </button>
      {showWindow && <FloatingWindow />}
    </div>
  );
}

export default App; // 确保这里使用了默认导出