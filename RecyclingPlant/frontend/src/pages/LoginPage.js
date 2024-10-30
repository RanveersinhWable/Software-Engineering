import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [role, setRole] = useState('');

    const handleLoginSuccess = (userRole) => {
        // Set the role in the state after a successful login
        setRole(userRole);
    };

    return (
        <div>
            {role ? (
                <div>
                    <h2>Welcome!</h2>
                    <p>Your role is: <strong>{role}</strong></p>
                </div>
            ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
};

export default LoginPage;
