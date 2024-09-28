import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white'); // Default background color

  // Function to change background color based on button click
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '100vh' }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        <button
          style={{ backgroundColor: 'red' }}
          onClick={() => changeColor('red')}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: 'blue' }}
          onClick={() => changeColor('blue')}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: 'green' }}
          onClick={() => changeColor('green')}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: 'violet' }}
          onClick={() => changeColor('violet')}
        >
          Violet
        </button>
      </div>
    </div>
  );
}

export default App;
