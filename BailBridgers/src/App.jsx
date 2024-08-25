import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LawyerDashboard from './components/Pages/LawyerDashboard';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      {/* <LawyerDashboard /> */}
    <Dashboard/>
    </Router>
  );
}

export default App;
