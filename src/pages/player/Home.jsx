import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Find nearby turfs</h1>
        <div className="bg-white p-4 rounded shadow-sm mb-6">
          <div className="grid sm:grid-cols-3 gap-3">
            <input className="col-span-2 p-2 border rounded" placeholder="Search by location or turf name" />
            <button className="p-2 bg-indigo-600 text-white rounded">Search</button>
          </div>
          <div className="mt-4 text-sm text-gray-500">Map view placeholder — integrate map SDK (Google Maps / Mapbox) here.</div>
        </div>

        <h2 className="text-xl font-semibold mb-3">Featured turfs</h2>
        <div className="grid gap-4">
          <div className="bg-white p-4 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">GreenField Arena</div>
              <div className="text-sm text-gray-600">12, Sports Road, Chennai</div>
            </div>
            <Link to="/turf/turf-001" className="px-3 py-2 bg-indigo-600 text-white rounded">View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
