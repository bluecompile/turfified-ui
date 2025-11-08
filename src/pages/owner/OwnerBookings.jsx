import React from 'react';

const bookings = [
  { id: 'b1', turf: 'GreenField Arena', date: '2025-06-15', time: '18:00', status: 'Confirmed' },
  { id: 'b2', turf: 'GreenField Arena', date: '2025-06-20', time: '09:00', status: 'Pending' },
];

export default function OwnerBookings() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Booking requests & confirmations</h1>
        <div className="bg-white rounded shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-100"><tr><th className="p-3">Turf</th><th className="p-3">Date</th><th className="p-3">Time</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr></thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-t">
                  <td className="p-3">{b.turf}</td>
                  <td className="p-3">{b.date}</td>
                  <td className="p-3">{b.time}</td>
                  <td className="p-3">{b.status}</td>
                  <td className="p-3"><button className="px-2 py-1 border rounded mr-2">Approve</button><button className="px-2 py-1 border rounded">Reject</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
