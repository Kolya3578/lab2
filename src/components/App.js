import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    setCount(count + 1);
  };

  const onClickDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <h1>React</h1>
        <h2>Score:</h2>
        <h1>{count}</h1>
        <button onClick={onClickIncrease} className="increase">+</button>
        <button onClick={onClickDecrease} className="decrease">-</button>
      </div>
    </div>
  );
}

export default App;
