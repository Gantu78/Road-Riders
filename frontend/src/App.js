import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import TrackingStart from './components/TrackingStart';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/components" element={<RegisterForm />} />
                <Route path="/components" element={<LoginForm />} />
                <Route path="/components" element={<ForgotPasswordForm />} />
                <Route path="/components" element={<TrackingStart />} />
                <Route path="/" element={<h1>Welcome to Road Riders</h1>} />
            </Routes>
        </Router>
    );
}

export default App;