import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-2">Booking confirmed!</h2>
        <p className="text-sm text-gray-600">Your booking details have been sent to your phone and email.</p>
        <div className="mt-4">
          <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded mr-2">Back to Home</Link>
          <Link to="/bookings" className="px-4 py-2 border rounded">My Bookings</Link>
        </div>
      </div>
    </div>
  );
}
