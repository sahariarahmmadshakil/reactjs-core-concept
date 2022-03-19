import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const components = [{ brand: 'Unknown', processor: 'Intel Core i5', motherbord: 'MSI h510m', casing: 'Montex X3', ram: 'pny rgb' }];

  return (

    <div className="App">
      <Counter></Counter>

    </div>

  );
}

function Counter(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const decreaseCount=()=>useState(0){
  //   setCount(count-1);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button><br /><br /> 
      <button onClick={decreaseCount}>Decrease</button>

    </div>
  )

}

export default App;
