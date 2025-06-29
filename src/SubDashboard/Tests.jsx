import React from 'react';
import { FaClipboard } from 'react-icons/fa';

function Tests() {
  const data = [
    { title: "Example", date: "28 Nov 2024", status: "Completed" },
    { title: "Example", date: "15 Dec 2024", status: "Upcomming" },
    
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-600';
      case 'Upcomming':
        return 'bg-orange-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="p-4 max-w-xl space-y-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-md px-4 py-3 flex justify-between items-center shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 text-blue-800 p-2 rounded-full">
              <FaClipboard size={18} />
            </div>
            <div>
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>
          </div>
          <div
            className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tests;
