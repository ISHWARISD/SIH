import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import ProfileBox from '../../components/ProfileBox'; // Import the ProfileBox component
import NotificationsPage from '../NotificationsPage';
import ClientsPage from '../LawyerComp/ClientsPage';
import ClientDocumentsPage from '../LawyerComp/ClientDocumentsPage';
import ClientMeetingsPage from '../LawyerComp/ClientMeetingsPage';
import DocumentUploadPage from '../LawyerComp/DocumentUploadPage';
import CourtAppearancesPage from '../LawyerComp/CourtAppearancesPage';

function LawyerDashboard() {
  const [showProfile, setShowProfile] = useState(false); // State to manage profile visibility

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Toggle profile visibility
  };

  const handleCloseProfile = () => {
    setShowProfile(false); // Close profile details
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 relative">
        {/* Profile Box */}
        <ProfileBox 
          showProfile={showProfile}
          onProfileClick={handleProfileClick}
          onCloseProfile={handleCloseProfile}
        />

        {/* Routing Section */}
        <Routes>
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/client-documents" element={<ClientDocumentsPage />} />
          <Route path="/client-meetings" element={<ClientMeetingsPage />} />
          <Route path="/document-upload" element={<DocumentUploadPage />} />
          <Route path="/court-appearances" element={<CourtAppearancesPage />} />
          <Route path="/settings" element={<div>Settings Page</div>} />
          {/* Default route */}
          <Route path="/" element={<NotificationsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default LawyerDashboard;
