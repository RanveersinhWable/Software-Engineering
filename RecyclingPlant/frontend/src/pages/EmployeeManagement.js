import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeManagement = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Employee Management</h2>
            <div style={{ marginTop: '20px' }}>
                <Link to="/admin/employees/view">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>View Employees</button>
                </Link>
            </div>
            <div>
                <Link to="/admin/employees/add">
                    <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Add Employee</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeManagement;
