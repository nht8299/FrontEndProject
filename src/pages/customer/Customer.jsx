import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Service from '../../services/service';
import Table from 'react-bootstrap/Table';

const urlName="customers"
const CustomerList = () => {

  const [customers, setCustomers] = useState([]);

  const init = () => {
    Service.getAll(urlName)
      .then(response => {
        console.log('Printing customers data', response.data);
        setCustomers(response.data);
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
        console.log('customers deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Customers</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Customer</Link>
        <Table striped bordered hover variant="dark">
          <thead className="thead-dark">
            <tr>
              <th>fullName</th>
              <th>address</th>
              <th>phoneNumber</th>
              <th>feedBack</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            customers.map(customer => (
              <tr key={customer.phoneNumber}>
                <td>{customer.fullName}</td>
                <td>{customer.address}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.feedBack}</td>
                <td>
                  <Link className="btn btn-info " to={`/employees/edit/${customer.id}`}>Update</Link>
                  
                  <button className="btn btn-danger " onClick={() => {
                    handleDelete(customer.id);
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

export default CustomerList;
