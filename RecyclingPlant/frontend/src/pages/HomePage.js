import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Recycling Plant</h1>
            <p>Please login to access the system.</p>
            <Link to="/login">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Login
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
