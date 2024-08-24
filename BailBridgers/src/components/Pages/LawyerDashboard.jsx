import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { FaUserCircle, FaTimes, FaInfoCircle, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa'; // Import icons

function LawyerDashboard() {
  const [showProfile, setShowProfile] = useState(false); // State to manage profile visibility
  const [activeNotification, setActiveNotification] = useState(null); // State to manage active notification

  // Updated notifications with icons
  const notifications = [
    { id: 1, text: "New case assigned: Smith vs. Jones.", icon: <FaInfoCircle className="text-blue-500" /> },
    { id: 2, text: "Client meeting scheduled for 2 PM tomorrow.", icon: <FaCalendarAlt className="text-green-500" /> },
    { id: 3, text: "Document submission deadline approaching: Johnson case.", icon: <FaExclamationTriangle className="text-red-500" /> },
    { id: 4, text: "Court hearing scheduled: Brown vs. Green, 10 AM on Monday.", icon: <FaCalendarAlt className="text-yellow-500" /> },
    { id: 5, text: "Your profile has been updated successfully.", icon: <FaInfoCircle className="text-gray-500" /> },
  ];

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Toggle profile visibility
  };

  const handleCloseProfile = () => {
    setShowProfile(false); // Close profile details
  };

  const handleViewDetails = (notification) => {
    setActiveNotification(notification); // Set active notification to display details
  };

  const handleCloseDetails = () => {
    setActiveNotification(null); // Close notification details
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6 relative">
        {/* Profile Box */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-end space-x-4">
          <FaUserCircle 
            className="text-gray-600 text-3xl cursor-pointer" 
            onClick={handleProfileClick} 
          />
          <div className="flex flex-col text-right">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-500">Lawyer</p>
          </div>
        </div>

        {/* Welcome Box */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        </div>

        {/* Profile Popup (conditionally rendered) */}
        {showProfile && (
          <div className="bg-white shadow-md rounded-lg p-4 absolute top-0 right-0 mt-12 mr-6 w-64">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Profile Details</h2>
              <FaTimes 
                className="text-gray-500 cursor-pointer" 
                onClick={handleCloseProfile} 
              />
            </div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-500">Lawyer</p>
            {/* Add more profile details here */}
          </div>
        )}

        {/* Notifications Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <ul className="list-disc pl-5 space-y-2">
            {notifications.map((notification) => (
              <li key={notification.id} className="text-gray-700 flex items-center">
                <span className="mr-3">{notification.icon}</span>
                <span className="flex-1">{notification.text}</span>
                <button 
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleViewDetails(notification)}
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Notification Details Popup (conditionally rendered) */}
        {activeNotification && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white shadow-lg rounded-lg p-6 w-80 max-w-sm relative">
              <button 
                className="absolute top-2 right-2 text-gray-500"
                onClick={handleCloseDetails}
              >
                <FaTimes className="text-lg" />
              </button>
              <h2 className="text-xl font-semibold mb-4">Notification Details</h2>
              <p className="text-gray-700 mb-4">{activeNotification.text}</p>
              <div className="flex justify-end space-x-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleCloseDetails}
                >
                  Mark as Read
                </button>
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={handleCloseDetails}
                >
                  Archive
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerDashboard;
