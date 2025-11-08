import React, { useState } from 'react';

export default function AdminSettings() {
  const [commission, setCommission] = useState('10'); // percent
  const [razorKey, setRazorKey] = useState('');
  const [upiId, setUpiId] = useState('');

  function save(e) {
    e.preventDefault();
    alert('Settings saved (mock)');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <form onSubmit={save} className="grid gap-3">
          <label className="text-sm">Platform commission (%)</label>
          <input value={commission} onChange={e=>setCommission(e.target.value)} className="p-2 border rounded" />
          <label className="text-sm">Razorpay key (test)</label>
          <input value={razorKey} onChange={e=>setRazorKey(e.target.value)} className="p-2 border rounded" />
          <label className="text-sm">UPI ID (for payouts)</label>
          <input value={upiId} onChange={e=>setUpiId(e.target.value)} className="p-2 border rounded" />
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
            <button type="button" className="px-4 py-2 border rounded">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
