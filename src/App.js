
import './App.css';
import Countries from './components/Countries/Countries';
function App() {

  return (

    // Code Main Body Start Here 
    <div className="App">
<Countries></Countries>
    </div>
  );
}

// Function Start Here 


































































// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])



//   return (
//     <div>
//       <h1>All Country in the World</h1>
//       {
//         countries.map(country =>
//           <Country name={country.name.common} population={country.population}>

//           </Country>)
//       }

//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <div className='country_overview'>
//         <h2>Name: {props.name}</h2>
//         <h4>Population: {props.population}</h4>
//       </div>
//     </div>
//   )
// }


export default App;
