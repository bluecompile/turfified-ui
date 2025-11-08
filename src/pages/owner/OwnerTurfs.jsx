import React from 'react';
import { Link } from 'react-router-dom';

const turfs = [
  { id: 't1', name: 'GreenField Arena', status: 'Active' },
  { id: 't2', name: 'New Turf', status: 'Draft' },
];

export default function OwnerTurfs() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your turfs</h1>
          <Link to="/owner/turfs/new" className="px-3 py-2 bg-green-600 text-white rounded">Add new turf</Link>
        </div>
        <div className="grid gap-3">
          {turfs.map(t => (
            <div key={t.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-600">Status: {t.status}</div>
              </div>
              <div className="flex gap-2">
                <Link to="#" className="px-3 py-2 border rounded">Edit</Link>
                <Link to="#" className="px-3 py-2 border rounded">Slots</Link>
                <Link to="#" className="px-3 py-2 border rounded">Bookings</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
