import React from 'react';
import { Link } from 'react-router-dom';

const ManagerMaintenanceMatInvMan = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Manage Material Inventory</h2>
            <Link to="/managermaintenance/material_inventory/view">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Materials</button>
            </Link>
            <Link to="/managermaintenance/materials_inventory/add">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Material</button>
            </Link>
        </div>
    );
};

export default ManagerMaintenanceMatInvMan;
