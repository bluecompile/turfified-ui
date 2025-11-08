import React, { useState } from 'react';

export default function Profile() {
  const [form, setForm] = useState({ name:'Demo User', phone:'', email:'', wallet:500 });

  function update(k,v){ setForm(prev=>({...prev,[k]:v})); }
  function save(e){ e.preventDefault(); alert('Profile saved (mock)'); }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Profile & Reviews</h2>
        <form onSubmit={save} className="grid gap-3 mt-4">
          <input value={form.name} onChange={e=>update('name', e.target.value)} className="p-2 border rounded" placeholder="Full name" />
          <input value={form.phone} onChange={e=>update('phone', e.target.value)} className="p-2 border rounded" placeholder="Phone" />
          <input value={form.email} onChange={e=>update('email', e.target.value)} className="p-2 border rounded" placeholder="Email" />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
            <button type="button" className="px-4 py-2 border rounded">Change password</button>
          </div>
        </form>
        <div className="mt-6">
          <h3 className="font-medium">Wallet</h3>
          <div className="text-sm">Balance: ₹{form.wallet}</div>
        </div>
      </div>
    </div>
  );
}
