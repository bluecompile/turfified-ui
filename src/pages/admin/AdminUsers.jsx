import React from 'react';

const users = [
  { id: 'u1', name: 'Siva', email: 'siva@example.com', status: 'Active' },
  { id: 'u2', name: 'Anita', email: 'anita@example.com', status: 'Deactivated' },
];

export default function AdminUsers() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="bg-white rounded shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr><th className="p-3 text-left">Name</th><th className="p-3 text-left">Email</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t">
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 text-center">{u.status}</td>
                  <td className="p-3 text-center"><button className="px-2 py-1 border rounded">Edit</button> <button className="px-2 py-1 border rounded">Deactivate</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
