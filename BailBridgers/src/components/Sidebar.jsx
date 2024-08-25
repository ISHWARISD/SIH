import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#03346E' }} className="w-64 h-screen text-white">
      <div className="p-4 text-2xl font-bold">
        Lawyer Dashboard
      </div>
      <ul className="mt-6">
        <li className="p-4">
          <NavLink 
            to="/notifications" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Notifications
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/clients" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Clients
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/client-documents" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Client Documents
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/client-meetings" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Client Meetings
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/document-upload" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Document Upload
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/court-appearances" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Court Appearances
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
            to="/settings" 
            className="hover:bg-gray-700 cursor-pointer"
            activeClassName="bg-gray-700"
          >
            Settings
          </NavLink>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
