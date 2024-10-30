// src/pages/DepartmentManagement.js
import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentManagement = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Department Management</h2>
            <div style={{ marginTop: '20px' }}>
                <Link to="/admin/departments/view">
                    <button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Departments</button>
                </Link>
                <Link to="/admin/departments/add">
                    <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Department</button>
                </Link>
            </div>
        </div>
    );
};

export default DepartmentManagement;
