import React from 'react';
import { Link } from 'react-router-dom';

export default function OwnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Owner dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-sm">Today's bookings<br/><span className="text-xl font-semibold">6</span></div>
          <div className="bg-white p-4 rounded shadow-sm">This week<br/><span className="text-xl font-semibold">28</span></div>
          <div className="bg-white p-4 rounded shadow-sm">This month revenue<br/><span className="text-xl font-semibold">₹24,000</span></div>
          <div className="bg-white p-4 rounded shadow-sm">Pending payouts<br/><span className="text-xl font-semibold">₹4,500</span></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium">Recent bookings</h3>
            <ul className="text-sm text-gray-700 mt-2">
              <li>2025-06-15 18:00 — Full turf — ₹3000</li>
              <li>2025-06-16 09:00 — Half turf — ₹1200</li>
            </ul>
            <div className="mt-3"><Link to="/owner/bookings" className="text-sm text-indigo-600">View all bookings</Link></div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium">Manage turf quick actions</h3>
            <div className="mt-2 flex gap-2">
              <Link to="/owner/turfs" className="px-3 py-2 bg-indigo-600 text-white rounded">Manage Turfs</Link>
              <Link to="/owner/slots" className="px-3 py-2 border rounded">Slot calendar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
