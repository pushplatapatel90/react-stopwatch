import React, { useState } from 'react';
import './style.css';

var adjustInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };
  const resetWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h1>{watch}</h1>
      <button disabled={started} onClick={startWatch} className="green">
        Start
      </button>
      <button onClick={stopWatch} className="red">
        Stop
      </button>
      <button onClick={resetWatch} className="orange">
        Reset
      </button>
    </div>
  );
}

export default App;
