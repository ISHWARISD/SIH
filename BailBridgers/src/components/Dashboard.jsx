// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ApplicationAssistance from './ApplicationAss';
import BailEligibility from './BailEligibility';
import BailOptions from './BailOptions';
import CaseDetails from './CaseDetails';
import ChooseLawyer from './ChooseALawyer';
import LegalResources from './LegalResources';
import NotificationCenter from './Notifications';

const Dashboard = () => {
  const navigate = useNavigate(); 
  const [activeComponent, setActiveComponent] = useState('BailEligibility');

  const handleNavigation = (component) => {
    setActiveComponent(component);
    navigate(`/${component.toLowerCase()}`); // Update URL path
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-[#03346E] text-white lg:flex lg:flex-col lg:justify-between lg:fixed lg:h-screen lg:top-0 lg:left-0 lg:p-6">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Undertrial Dashboard</h2>
          <ul className="space-y-4">
            {['BailEligibility', 'CaseDetails', 'BailOptions', 'ApplicationAssistance', 'NotificationCenter', 'LegalResources', 'ChooseLawyer'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-[#2B4C65] ${
                  activeComponent === item ? 'bg-white text-[#2B4C65] font-semibold' : ''
                }`}
                onClick={() => handleNavigation(item)}
              >
                {item.replace(/([A-Z])/g, ' $1').trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 lg:ml-[25%] lg:pl-8"> {/* Adjusted margin to prevent overlap */}
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#2B4C65]">Welcome to the Undertrial Dashboard</h1>
          <p className="text-lg text-gray-700">Hi, [User's Name]! Here is your dashboard to manage all your activities.</p>
        </div>

        <Routes>
          <Route path="baileligibility" element={<BailEligibility />} />
          <Route path="casedetails" element={<CaseDetails />} />
          <Route path="bailoptions" element={<BailOptions />} />
          <Route path="applicationassistance" element={<ApplicationAssistance />} />
          <Route path="notificationcenter" element={<NotificationCenter />} />
          <Route path="legalresources" element={<LegalResources />} />
          <Route path="chooselawyer" element={<ChooseLawyer />} />
          <Route path="/" element={<BailEligibility />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
