import React from 'react';

const warnings = [
  { id: 1, user: "John Doe", warningCount: 2 },
  { id: 2, user: "Jane Smith", warningCount: 3 },
];

const Warnings = () => {
  return (
    <div className=" shadow-lg text-black p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Warnings</h3>
      <ul className="space-y-2">
        {warnings.map(warning => (
          <li key={warning.id} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{warning.user}</p>
              <p className="text-sm text-yellow-500">Warnings: {warning.warningCount}</p>
            </div>
            <button className="bg-warning px-2 py-1 text-xs rounded">Remove Warning</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Warnings;
