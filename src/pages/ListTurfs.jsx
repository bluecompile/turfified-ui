import React from 'react';
import { Link } from 'react-router-dom';

const sampleList = [
  { id: 'turf-001', name: 'GreenField Arena', address: '12, Sports Road, Chennai', price: 1200, rating: 4.6 },
  { id: 'turf-002', name: 'BluePitch Stadium', address: '45, Lake Road, Chennai', price: 1500, rating: 4.4 },
  { id: 'turf-003', name: 'Star Sports Turf', address: '88, MG Road, Chennai', price: 1000, rating: 4.2 },
];

export default function ListTurfs() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Available Turfs</h1>
        <div className="grid gap-4">
          {sampleList.map(t => (
            <div key={t.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.address}</p>
                <div className="text-sm text-gray-700 mt-1">₹{t.price}/hr · {t.rating} ★</div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Link to={`/turf/${t.id}`} className="px-4 py-2 bg-indigo-600 text-white rounded">View</Link>
                <Link to={`/turf/${t.id}/book`} className="px-4 py-2 border rounded">Book</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
