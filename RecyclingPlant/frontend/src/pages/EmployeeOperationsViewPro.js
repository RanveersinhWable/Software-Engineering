import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const EmployeeOperationsViewPro = () => {
    const [processes, setProcesses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch materials from the server
        axios.get('http://localhost:5000/api/processes')
            .then(response => setProcesses(response.data))
            .catch(error => console.error('Error fetching processes:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>View Processes</h2>
            <table style={{ margin: '0 auto', border: '1px solid black', padding: '10px' }}>
                <thead>
                    <tr>
                        <th>Process ID</th>
                        <th>Process Name</th>
                        <th>Description</th>
                        <th>Process Type</th>
                    </tr>
                </thead>
                <tbody>
                    {processes.map(process => (
                        <tr key={process.Process_ID}>
                            <td>{process.Process_ID}</td>
                            <td>{process.Process_Name}</td>
                            <td>{process.Description}</td>
                            <td>{process.Process_Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>// 
    );
};

export default EmployeeOperationsViewPro;
