import React from 'react';
import { Link } from 'react-router-dom';

const MaterialManagement = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Manage Materials</h2>
            <Link to="/admin/materials/view">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Materials</button>
            </Link>
            <Link to="/admin/materials/add">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Material</button>
            </Link>
        </div>
    );
};

export default MaterialManagement;
