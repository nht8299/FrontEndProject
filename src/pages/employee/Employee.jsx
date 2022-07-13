import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Service from '../../services/service';
import Table from 'react-bootstrap/Table';

const urlName="employees"
const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  const init = () => {
    Service.getAll(urlName)
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    Service.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <Table striped bordered hover variant="dark">
          <thead className="thead-dark">
            <tr>
              <th>id</th>
              <th>fullName</th>
              <th>dateOfBirth</th>
              <th>gender</th>
              <th>phoneNumber</th>
              <th>role</th>
              <th>type</th>
              <th>coffeeShopName</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.fullName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.gender}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.role}</td>
                <td>{employee.type}</td>
                <td>{employee.coffeeShopName}</td>
                <td>
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(employee.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
        
      </div>
    </div>
  );
}

export default EmployeeList;
