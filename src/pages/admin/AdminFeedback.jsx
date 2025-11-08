import React from 'react';

const complaints = [
  { id: 'c1', user: 'Siva', text: 'Turf was muddy', status: 'Open' },
  { id: 'c2', user: 'Anita', text: 'Refund not processed', status: 'In Progress' },
];

export default function AdminFeedback() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Complaints & Disputes</h1>
        <div className="bg-white rounded shadow-sm">
          <ul className="p-4">
            {complaints.map(c => (
              <li key={c.id} className="border-b py-3">
                <div className="font-medium">{c.user}</div>
                <div className="text-sm text-gray-600">{c.text}</div>
                <div className="mt-2 text-sm">Status: {c.status} <button className="ml-2 px-2 py-1 border rounded">Resolve</button></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
