import React from 'react';
import { Link } from 'react-router-dom';

const mockBookings = [
  { id: 'b1', turf: 'GreenField Arena', date: '2025-06-15', time: '18:00', status: 'Confirmed' },
  { id: 'b2', turf: 'BluePitch Stadium', date: '2025-06-20', time: '09:00', status: 'Cancelled' },
];

export default function MyBookings() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My bookings</h1>
        <div className="grid gap-4">
          {mockBookings.map(b => (
            <div key={b.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
              <div>
                <div className="font-semibold">{b.turf}</div>
                <div className="text-sm text-gray-600">{b.date} · {b.time}</div>
                <div className="text-sm text-gray-500">{b.status}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-3 py-2 border rounded">Details</button>
                <button className="px-3 py-2 border rounded">Cancel/Reschedule</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
