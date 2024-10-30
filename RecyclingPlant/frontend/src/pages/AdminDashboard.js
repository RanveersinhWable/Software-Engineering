import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Admin Dashboard</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/admin/employees">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Employees</button>
                </Link>
                <Link to="/admin/departments">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Departments</button>
                </Link>
                <Link to="/admin/machines">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Machines</button>
                </Link>
                <Link to="/admin/materials">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Materials</button>
                </Link>
                <Link to="/admin/processes">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Processes</button>
                </Link>
                <Link to="/admin/material-inventory">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Material Inventory</button>
                </Link>
                <Link to="/admin/employee-attendance">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Employee Attendance</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
