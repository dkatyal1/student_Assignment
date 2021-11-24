import React, { Component,useEffect,useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
//import queryString from 'query-string';
import './App.css';
import addEmployee from './AddEmployee';


 function GetEmployee(props) {
  //const [list, setList] = useState([]);
  let list = [];
  let employees = [];  
  let params = useParams();
  let empid = params.id;
  console.log(empid);
  useEffect(() => {
    let mounted = true;
    let list=[];
    fetch("http://localhost:8081/api/vi/employees/" + empid).then(res =>res.json())
      .then(items => {
        if(mounted) {
         console.log(items);
          list=items;
          console.log(list);
          //<list1 ref={list1}>items</list1>
          mounted=false;
        }
      })
    }) 
    console.log(list);
      return (
      <div>  
            {list ? list : 'Loading...'}      
        <h2>Edit Employee {empid} {list}</h2>        
        <div className="EmployeeTable">         
        {list.map((emp, i) => (
          <form  className="myForm">              
          <label> FIRST NAME : <input type="text" placeholder="first name" id="fname" name="fname" value={emp.firstname} /></label>
          <label> LAST NAME : <input type="text" placeholder="first name" id="fname" name="fname" value={emp.lastname} /></label>
          <label> EMAIL NAME : <input type="text" placeholder="first name" id="fname" name="fname" value={emp.emailid} /></label>
          <button  className="myButton">submit </button>
        </form>
          ))}
    </div>
    </div>
    );
  }

  export default GetEmployee;
