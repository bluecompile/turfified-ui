import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-sm">Total users<br/><span className="text-xl font-semibold">1,240</span></div>
          <div className="bg-white p-4 rounded shadow-sm">Total bookings<br/><span className="text-xl font-semibold">3,420</span></div>
          <div className="bg-white p-4 rounded shadow-sm">Active turfs<br/><span className="text-xl font-semibold">320</span></div>
          <div className="bg-white p-4 rounded shadow-sm">Revenue (M)<br/><span className="text-xl font-semibold">₹12.4</span></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium mb-2">Recent bookings</h3>
            <ul className="text-sm text-gray-700">
              <li>GreenField Arena — 2025-06-15 18:00</li>
              <li>BluePitch Stadium — 2025-06-16 09:00</li>
              <li>Star Sports Turf — 2025-06-16 20:00</li>
            </ul>
            <div className="mt-3"><Link to="/admin/bookings" className="text-sm text-indigo-600">View all bookings</Link></div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium mb-2">Turf registrations</h3>
            <p className="text-sm text-gray-600">Pending approvals: 4</p>
            <div className="mt-3"><Link to="/admin/turfs" className="text-sm text-indigo-600">Manage turfs</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
