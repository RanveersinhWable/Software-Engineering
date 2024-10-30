import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeOperationsDashboard = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Employee Operations Dashboard</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/employeeoperations/departments">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Departments</button>
                </Link>
                <Link to="/employeeoperations/machines/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Machines</button>
                </Link>
                <Link to="/employeeoperations/materials/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Materials</button>
                </Link>
                <Link to="/employeeoperations/processes/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Processes</button>
                </Link>
                <Link to="/employeeoperations/material_inventory/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Material Inventory</button>
                </Link>
                <Link to="/employeeoperations/employee-attendance">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Employee Attendance</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeOperationsDashboard;
