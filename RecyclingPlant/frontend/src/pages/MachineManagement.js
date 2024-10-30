import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MachineManagement = () => {
    const [machines, setMachines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch machines from the server
        axios.get('http://localhost:5000/api/machines')
            .then(response => setMachines(response.data))
            .catch(err => {
                console.error('Error fetching machines:', err);
                setError('Error fetching machines. Please try again later.');
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Machine Management</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to="/admin/machines/view"><button style={{ padding: '10px 20px', marginBottom: '20px' }}>View Machines</button></Link>
            <Link to="/admin/machines/add"><button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add Machine</button></Link>
        </div>
    );
};

export default MachineManagement;
