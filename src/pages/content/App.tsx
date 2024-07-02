import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesSetup from '../routes/BaseHome';

const App: React.FC = () => {
    return (
        <Router>
        <RoutesSetup />
        </Router>
    );
};

export default App;

