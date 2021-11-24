import React, { Component } from 'react';
import './App.css';

class EmployeeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Employee Listing...",
      employees: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8081/api/vi/employees").then(res =>res.json()).then(result => {
      this.setState({ employees: result });
    })
  }
  render() {
    let employees = this.state.employees;
      return (
      <div className="EmployeeComponent">
        <h2>{this.state.title}</h2>
        <div className="EmployeeTable">
          <table>
            <thead className="TableHeader">
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>EmailId</th>
              </tr>
            </thead>
            <tbody>
            {employees.map((emp, i) => (
                <tr key={i} className="myList">                 
                  <td>{emp.Id}</td>
                  <td>{emp.firstname}</td>
                  <td>{emp.lastname}</td>
                  <td>{emp.emailid}</td>
                  <td className="buttonclass">
                    <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
                    <button onClick={() => this.fEdit(i)} className="myListButton">edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
