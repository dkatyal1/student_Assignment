import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import GetEmployee from './GetEmployeeByID';

const addEmployee=(props)=>{
  return(
    <div className="AddEmployeePage">
    <h2>Welcome to Add Employee page</h2>
    <input placeholder="firstName" type="text"></input><br />
    <input placeholder="lastname" type="text"></input><br />
    <button onClick={() => {
    <Link to="/"></Link>;
    }} >Add</button>
    </div>
  )
}

export default addEmployee;
