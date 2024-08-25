import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LawyerDashboard from './components/Pages/LawyerDashboard';

function App() {
  return (
    <Router>
      <LawyerDashboard />
    </Router>
  );
}

export default App;
