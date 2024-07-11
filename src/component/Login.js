import React, { useState, useContext } from 'react';
import { MyContext } from './component.MyContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { users } = useContext(MyContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            alert('Login successful!');
            navigate('/profile');
        } else {
            alert('Login failed!');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="sign in">Login</button>
            </form>
        </div>
    );
};

export default Login;
