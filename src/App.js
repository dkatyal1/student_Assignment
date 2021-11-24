import React,{ useState }  from 'react'; 
import { Component }  from 'react'; 
import './App.css';

import EmployeeComponent from './Home';
import AddEmp from './AddEmployee';
import GetEmployee from './GetEmployeeByID';
import {Route,BrowserRouter,Routes,Navigate,NavLink, Link } from 'react-router-dom'


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addEmp'>Add</NavLink></li>     
    </ul>
  </nav>
);



class App extends Component { 
  constructor(props) {
    super(props);
    this.state={
     
      act: 1
     
    }
  }
  render() {
  function handleclick(){
    return (<Link to='/addEmp' />);
  }
         return (
      <div>
        <h2>Welcome to Employee Application</h2> 
                <br />
        <BrowserRouter>
        <Navigation />
       
    
        <hr />   
        <br />
        <Routes>
            <Route  path="/" element={<EmployeeComponent></EmployeeComponent>} /> 
            <Route  path="/addEmp" element={<AddEmp></AddEmp>} />
            <Route  path="/emp/:id" element={<GetEmployee></GetEmployee>} /> 
        </Routes>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
