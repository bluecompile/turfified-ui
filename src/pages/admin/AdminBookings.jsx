import React from 'react';

const bookings = [
  { id: 'b1', turf: 'GreenField Arena', user: 'Siva', date: '2025-06-15', time: '18:00', status: 'Confirmed' },
  { id: 'b2', turf: 'BluePitch Stadium', user: 'Anita', date: '2025-06-16', time: '09:00', status: 'Refunded' },
];

export default function AdminBookings() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
        <div className="bg-white rounded shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr><th className="p-3 text-left">Turf</th><th className="p-3">User</th><th className="p-3">Date</th><th className="p-3">Time</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-t">
                  <td className="p-3">{b.turf}</td>
                  <td className="p-3 text-center">{b.user}</td>
                  <td className="p-3 text-center">{b.date}</td>
                  <td className="p-3 text-center">{b.time}</td>
                  <td className="p-3 text-center">{b.status}</td>
                  <td className="p-3 text-center">
                    <button className="px-2 py-1 border rounded mr-2">Refund</button>
                    <button className="px-2 py-1 border rounded">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
