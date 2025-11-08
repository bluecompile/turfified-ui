import React from 'react';
import { useParams, Link } from 'react-router-dom';

const sampleTurf = {
  id: 'turf-001',
  name: 'GreenField Arena',
  address: '12, Sports Road, Chennai',
  rating: 4.6,
  images: ['https://via.placeholder.com/800x400?text=Turf+1'],
  description: 'A premium turf with floodlights, changing rooms and parking.',
  features: ['Floodlights', 'Changing Room', 'Parking', 'Referee Available'],
  turfTypes: [{ id: 'half', label: 'Half Turf (5-a-side)', pricePerHour: 1200 }, { id: 'full', label: 'Full Turf (11-a-side)', pricePerHour: 3000 }]
};

export default function ViewTurf() {
  const { id } = useParams();
  // In real app, fetch data by id
  const turf = sampleTurf;
  if (!turf) return <div className="p-6">Turf not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold">{turf.name}</h1>
          <p className="text-sm text-gray-600">{turf.address} · {turf.rating} ★</p>
          <img src={turf.images[0]} alt="turf" className="w-full h-56 object-cover rounded-md mt-4" />
          <p className="mt-4 text-gray-700">{turf.description}</p>
          <div className="mt-4 flex gap-2">
            {turf.features.map((f, i) => <span key={i} className="px-2 py-1 bg-gray-100 rounded text-sm">{f}</span>)}
          </div>

          <div className="mt-6 flex gap-3">
            <Link to={`/turf/${id}/book`} className="px-4 py-2 bg-green-600 text-white rounded">Book Now</Link>
            <Link to={`/turf/${id}/book`} className="px-4 py-2 border rounded">See availability</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
