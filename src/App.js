import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const components = [{ brand: 'Unknown', processor: 'Intel Core i5', motherbord: 'MSI h510m', casing: 'Montex X3', ram: 'pny rgb' }];

  return (

    // Code Main Body Start Here 
    <div className="App">
      <LoadCountries></LoadCountries>

    </div>
  );
}

// Function Start Here 
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])



  return (
    <div>
      <h3>All Country in the World</h3>
      {
        countries.map(country =>
          <Country name={country.name.common} population={country.population}>

          </Country>)
      }

    </div>
  );
}

function Country(props) {
  return (
    <div>
      <div className='country_overview'>
        <h2>Name: {props.name}</h2>
        <h4>Population: {props.population}</h4>
      </div>
    </div>
  )
}


export default App;
