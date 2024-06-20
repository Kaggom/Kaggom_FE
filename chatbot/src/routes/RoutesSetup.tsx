import { Route, Routes } from 'react-router-dom';
import BaseHome from './BaseHome';
import Onboarding from '../pages/Onboarding'; // Onboarding 컴포넌트를 가져왔다고 가정

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<BaseHome />} />
            <Route path="/chat" element={<Onboarding />} />
        </Routes>
    );
}