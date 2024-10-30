import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeMaintenanceDashboard = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Employee Maintenance Dashboard</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/employeemaintenance/departments">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Departments</button>
                </Link>
                <Link to="/employeemaintenance/machines/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Machines</button>
                </Link>
                <Link to="/employeemaintenance/material_inventory/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Material Inventory</button>
                </Link>
                <Link to="/employeemaintenance/employee-attendance">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Attendance</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeMaintenanceDashboard;
