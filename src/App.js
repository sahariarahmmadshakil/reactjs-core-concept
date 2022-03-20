import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const components = [{ brand: 'Unknown', processor: 'Intel Core i5', motherbord: 'MSI h510m', casing: 'Montex X3', ram: 'pny rgb' }];

  return (

    // Code Main Body Start Here 
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>

  );
}


// Function Start Here 

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>External Users </h1>
      <h2>Name: {users.length}</h2>
      {users.map(user =><Users name={user.name} email={user.email}></Users>)}
    </div>
  )

}
function Users(props){
  return(
<div style={{border: '2px solid red', margin: '15px'}}>
  <h2>Name: {props.name}</h2>
  <h2>Email: {props.email}</h2>
</div>
  )
}


export default App;
