import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Manager Maintenance Dashboard</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/managermaintenance/employees/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Employees</button>
                </Link>
                <Link to="/managermaintenance/departments">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Departments</button>
                </Link>
                <Link to="/managermaintenance/machines/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Machines</button>
                </Link>
                <Link to="/managermaintenance/materials">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Materials</button>
                </Link>
                <Link to="/managermaintenance/processes">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Processes</button>
                </Link>
                <Link to="/managermaintenance/material-inventory">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Material Inventory</button>
                </Link>
                <Link to="/managermaintenance/employee_attendance/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Employee Attendance</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
