// src/pages/AdminDepartmentsView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const EmployeeViewDepartments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        // Fetch departments from the server
        axios.get('http://localhost:5000/api/departments')
            .then(response => setDepartments(response.data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>View Departments</h2>
            <table style={{ margin: '0 auto', border: '1px solid black', padding: '10px' }}>
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Name</th>
                        <th>Department Head ID</th>
                        <th>No. of Employees</th>
                        <th>Room ID</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.Department_ID}>
                            <td>{department.Department_ID}</td>
                            <td>{department.Department_Name}</td>
                            <td>{department.Department_HeadID}</td>
                            <td>{department.No_of_Employees}</td>
                            <td>{department.Room_ID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeViewDepartments;