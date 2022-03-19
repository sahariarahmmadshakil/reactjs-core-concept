import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {name: 'laptop', price: '50000'},
  {name: 'phone', price: '9000'},
  {name: 'tablet', price: '18000'},
  {name: 'headphone', price: '1500'}
]


  return (
    <div className="App">




      
      <Product name="laptop" price="61000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="Watch" price="5000"></Product>
    </div>
  );
}




function Product(props){
  return(
<div className='peroducts'>
  <h3>Name: {props.name}</h3>
  <p>Price: {props.price}</p>
</div>
  );
}

export default App;
