import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const AdminEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch employees from the server
        axios.get('http://localhost:5000/api/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    const handleRemoveEmployee = (employeeId) => {
        axios.delete(`http://localhost:5000/api/employees/${employeeId}`) // Make DELETE request
            .then(() => {
                setEmployees(employees.filter(emp => emp.Employee_ID !== employeeId)); // Update state to remove the deleted employee
            })
            .catch(error => console.error('Error removing employee:', error)); // Log errors if any
    };
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Manage Employees</h2>
            
            <div style={{ marginTop: '20px' }}>
                <Link to="/admin/employees/add">
                    <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Employee</button>
                </Link>
                <table style={{ margin: '0 auto', border: '1px solid black', padding: '10px' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>Department ID</th>
                            <th>Date of Joining</th>
                            <th>Contact Details</th>
                            <th>Address</th>
                            <th>Last Paid Date</th>
                            <th>Salary Updated On</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.Employee_ID}>
                                <td>{employee.Employee_ID}</td>
                                <td>{employee.Employee_Name}</td>
                                <td>{employee.Employee_Role}</td>
                                <td>{employee.Salary}</td>
                                <td>{employee.Department_ID}</td>
                                <td>{new Date(employee.Date_of_Joining).toLocaleDateString()}</td> {/* Format the date */}
                                <td>{employee.Contact_Details}</td>
                                <td>{employee.Address}</td>
                                <td>
                                    {employee.Last_Paid_Date ? new Date(employee.Last_Paid_Date).toLocaleDateString() : 'N/A'}
                                </td>
                                <td>
                                    {employee.Salary_Updated_On ? new Date(employee.Salary_Updated_On).toLocaleDateString() : 'N/A'}
                                </td>
                                <td>
                                    <button
                                    onClick={() => {
                                        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
                                            if (confirmDelete) {
                                                handleRemoveEmployee(employee.Employee_ID);
                                            }           
                                        }}
                                    >
                                    Remove
                                    </button>
                                    <Link to={`/admin/employees/edit/${employee.Employee_ID}`}>
                                        <button style={{ marginLeft: '10px' }}>
                                            Edit
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminEmployees;
