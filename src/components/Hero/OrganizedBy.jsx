import React from 'react';

const OrganizerItem = ({ title }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 leading-tight transition-colors duration-200">
      <a href="#">{title}</a>
    </h3>
  </div>
);

const OrganizedBy = () => {
  const departments = [
    'Orgnizer 1',
    'Orgnizer 2',
    'Orgnizer 3',
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 w-full max-w-md">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 uppercase pb-3 border-b border-gray-200 mb-6">
        Organized By
      </h2>
      <div>
        {departments.map((dept, index) => (
          <OrganizerItem key={index} title={dept} />
        ))}
      </div>
    </div>
  );
};

export default OrganizedBy;