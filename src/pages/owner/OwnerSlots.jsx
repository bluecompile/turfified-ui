import React, { useState } from 'react';

export default function OwnerSlots() {
  const [weekday, setWeekday] = useState('Monday');
  const [fromTime, setFromTime] = useState('18:00');
  const [toTime, setToTime] = useState('20:00');
  const [price, setPrice] = useState('1200');
  const [maintenanceDate, setMaintenanceDate] = useState('');

  function addSlot(e) {
    e.preventDefault();
    alert(`Added slot: ${weekday} ${fromTime}-${toTime} @ ₹${price}/hr`);
    setFromTime('18:00'); setToTime('20:00'); setPrice('1200');
  }

  function addMaintenance() {
    if (!maintenanceDate) return alert('Select a date');
    alert('Marked maintenance on ' + maintenanceDate);
    setMaintenanceDate('');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Slot management</h1>
        <form onSubmit={addSlot} className="grid gap-3">
          <div className="grid sm:grid-cols-2 gap-2">
            <select value={weekday} onChange={e=>setWeekday(e.target.value)} className="p-2 border rounded">
              <option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
            </select>
            <input type="time" value={fromTime} onChange={e=>setFromTime(e.target.value)} className="p-2 border rounded" />
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <input type="time" value={toTime} onChange={e=>setToTime(e.target.value)} className="p-2 border rounded" />
            <input value={price} onChange={e=>setPrice(e.target.value)} className="p-2 border rounded" placeholder="Price per hour" />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Add slot</button>
            <button type="button" className="px-4 py-2 border rounded">Add recurring (weekly)</button>
          </div>
        </form>

        <div className="mt-6 border-t pt-4">
          <h3 className="font-medium mb-2">Maintenance / Block days</h3>
          <div className="flex gap-2 items-center">
            <input type="date" value={maintenanceDate} onChange={e=>setMaintenanceDate(e.target.value)} className="p-2 border rounded" />
            <button onClick={addMaintenance} className="px-3 py-2 border rounded">Mark maintenance</button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Blocked days will be unavailable for booking.</p>
        </div>
      </div>
    </div>
  );
}
