import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-64 h-full p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-blue-500">Link 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500">Link 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500">Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
