import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import BaseHome from './BaseHome';

function RedirectToLocalhostChat() {
    const navigate = useNavigate();
    useEffect(() => {
        window.location.href = 'http://localhost:8080/chat';
    }, [navigate]);
    return null;
}

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<BaseHome />} />
            <Route path="/chat" element={<RedirectToLocalhostChat />} />
        </Routes>
    );
}
