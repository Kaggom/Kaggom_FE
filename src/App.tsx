import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesSetup from '../src/pages/routes/RoutesSetup'

const App: React.FC = () => {
  return (
    <Router>
      <RoutesSetup />
    </Router>
  );
};

export default App;
