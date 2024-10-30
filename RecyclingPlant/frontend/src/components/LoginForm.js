import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                Employee_ID: employeeId,
                Password: password,
            });

            if (response.data.success) {
                const role = response.data.role;
                localStorage.setItem('userRole', role);
                localStorage.setItem('employeeId', employeeId); // Store employee ID

                // Redirect based on role
                if (role === 'Admin') {
                    navigate('/admin-dashboard');
                } else if (role === 'Manager-Operations') {
                    navigate('/manager-operations-dashboard');
                } else if (role === 'Manager-Maintenance') {
                    navigate('/manager-maintenance-dashboard');
                } else if (role === 'Employee-Operations') {
                    navigate('/employee-operations-dashboard');
                } else if (role === 'Employee-Maintenance') {
                    navigate('/employee-maintenance-dashboard');
                }
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error(err);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <table style={{ margin: '0 auto' }}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="employeeId">Employee ID:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="employeeId"
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">Password:</label>
                            </td>
                            <td>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" style={{ padding: '10px 20px', marginBottom: '20px', marginTop: '20px' }}>Login</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <a href="/reset-password">Forgot your password?</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginForm;
