import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const ManagerMaintenanceViewMat = () => {
    const [materials, setMaterials] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch materials from the server
        axios.get('http://localhost:5000/api/materials')
            .then(response => setMaterials(response.data))
            .catch(error => console.error('Error fetching materials:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>View Materials</h2>
            <table style={{ margin: '0 auto', border: '1px solid black', padding: '10px' }}>
                <thead>
                    <tr>
                        <th>Material ID</th>
                        <th>Material Name</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Process ID</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map(material => (
                        <tr key={material.Material_ID}>
                            <td>{material.Material_ID}</td>
                            <td>{material.Material_Name}</td>
                            <td>{material.Source}</td>
                            <td>{material.Status}</td>
                            <td>{material.Process_ID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>// src/pages/AdminDepartmentsView.js
    );
};

export default ManagerMaintenanceViewMat;