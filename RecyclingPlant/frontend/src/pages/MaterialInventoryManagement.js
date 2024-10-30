import React from 'react';
import { Link } from 'react-router-dom';

const MaterialInventoryManagement = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Manage Material Inventory</h2>
            <Link to="/admin/material_inventory/view">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Materials</button>
            </Link>
            <Link to="/admin/materials_inventory/add">
                <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Material</button>
            </Link>
        </div>
    );
};

export default MaterialInventoryManagement;
