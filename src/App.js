import React, { useState } from 'react';
import './App.css';
// import React,  from 'react';

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black" ;

  const inc = () => setCount(count + 1);
  const des = () => setCount(count - 1);
  const reset = () => setCount(0);

return (
  <div className="container">
 
  <h1>Couter</h1>
    <span style={{ color }} id="value"> {count} </span>
  <div className="btn-group">
    <button onClick={des} className="btn btn-des">Descrease</button>
    <button onClick={reset} className="btn btn-reset">Reset</button>
    <button onClick={inc} className="btn btn-inc">Increase</button>
  </div>
</div>
  );
}

export default App;
