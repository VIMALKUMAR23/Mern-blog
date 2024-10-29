import React from 'react';

const users = [
  { id: 1, name: "John Doe", status: "Active", warnings: 1 },
  { id: 2, name: "Jane Smith", status: "Banned", warnings: 3 },
  { id: 3, name: "Alice Brown", status: "Active", warnings: 0 },
];

const UserManagement = () => {
  return (
    <div className=" shadow-lg p-4 rounded-lg text-black">
      <h3 className="text-lg font-bold mb-4">User Management</h3>
      <table className="w-full text-sm text-left">
        <thead className="text-gray-400">
          <tr className=' text-black'>
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
            <th className="py-2">Warnings</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border  border-gray-700">
              <td className="py-2 px-2 font-bold">{user.name}</td>
              <td className="py-2">{user.status}</td>
              <td className="py-2">{user.warnings}</td>
              <td className="py-2 space-x-2">
                <button className="bg-blue-500 px-2 py-1 text-xs rounded">View</button>
                {user.status === "Active" ? (
                  <button className="bg-red-600 px-2 py-1 text-xs rounded">Block</button>
                ) : (
                  <button className="bg-green-500 px-2 py-1 text-xs rounded">Unblock</button>
                )}
                <button className="bg-warning px-2 py-1 text-xs rounded">Warn</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
