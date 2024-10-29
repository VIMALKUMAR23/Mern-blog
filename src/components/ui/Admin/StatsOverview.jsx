import React from 'react';

const StatsOverview = () => {
  const stats = [
    { label: "Total Users", value: "1,200" },
    { label: "Banned Users", value: "15" },
    { label: "Active Users", value: "980" },
    { label: "Warnings Issued", value: "25" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className=" shadow-lg p-4 rounded-lg text-center text-black">
          <p className="text-lg font-bold">{stat.value}</p>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
