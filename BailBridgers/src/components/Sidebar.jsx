import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#03346E' }} className="w-64 h-screen  text-white">
      <div className="p-4 text-2xl font-bold">
        Lawyer Dashboard
      </div>
      <ul className="mt-6">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Case Assignments</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Case Research</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Legal Advisory</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Client Meetings</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Document Preparation</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Court Appearances</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Notifications</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
