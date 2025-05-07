import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await axios.post('/api/auth/login', { email, password });
setSuccess(response.data.message);
setError('');
setTimeout(() => navigate('/track'), 2000);
} catch (err) {
setError(err.response?.data?.error || 'Login failed');
setSuccess('');
}
};

return (
<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"> <h2 className="text-2xl font-bold mb-4 text-center">Login to CyclePulse</h2> <form onSubmit={handleSubmit}> <div className="mb-4"> <label className="block text-gray-700 mb-2" htmlFor="email">Email</label> <input type="email" id="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div> <div className="mb-4"> <label className="block text-gray-700 mb-2" htmlFor="password">Password</label> <input type="password" id="password" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required /> </div> {error && <p className="text-red-500 mb-4">{error}</p>} {success && <p className="text-green-500 mb-4">{success}</p>} <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" > Login </button> <a href="/forgot-password" className="text-blue-500 mt-2 block text-center">Forgot Password?</a> </form> </div> ); };

export default LoginForm;