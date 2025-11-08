import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-indigo-600">Turfified</Link>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600">Find Turfs</Link>
          <Link to="/bookings" className="text-sm text-gray-600 hover:text-indigo-600">My Bookings</Link>
          <Link to="/profile" className="text-sm text-gray-600 hover:text-indigo-600">Profile</Link>
          <Link to="/login" className="text-sm text-gray-600 hover:text-indigo-600">Login</Link>
                  <Link to="/admin" className="text-sm text-gray-600 hover:text-indigo-600">Admin</Link>
                  <div className="ml-2">
            <Link to="/owner/login" className="text-sm text-gray-600 hover:text-indigo-600">Owner Login</Link>
            <Link to="/owner/signup" className="ml-3 text-sm text-gray-600 hover:text-indigo-600">Owner Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
