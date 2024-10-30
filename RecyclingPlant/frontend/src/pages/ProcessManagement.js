import React from 'react';
import { Link } from 'react-router-dom';

const ProcessManagement = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Manage Processes</h2>
            <Link to="/admin/processes/view">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Processes</button>
            </Link>
            <Link to="/admin/processes/add">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Process</button>
            </Link>
        </div>
    );
};

export default ProcessManagement;
