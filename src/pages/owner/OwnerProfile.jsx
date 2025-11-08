import React, { useState } from 'react';

export default function OwnerProfile() {
  const [form, setForm] = useState({ name:'Owner Name', phone:'', email:'', bankName:'', accountNumber:'', ifsc:'' });

  function update(k,v){ setForm(prev=>({...prev,[k]:v})); }
  function save(e){ e.preventDefault(); alert('Owner profile saved (mock)'); }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Owner Profile & Settings</h1>
        <form onSubmit={save} className="grid gap-3">
          <input value={form.name} onChange={e=>update('name', e.target.value)} className="p-2 border rounded" placeholder="Name" />
          <input value={form.phone} onChange={e=>update('phone', e.target.value)} className="p-2 border rounded" placeholder="Phone" />
          <input value={form.email} onChange={e=>update('email', e.target.value)} className="p-2 border rounded" placeholder="Email" />
          <h3 className="font-medium mt-2">Bank details (for payouts)</h3>
          <input value={form.bankName} onChange={e=>update('bankName', e.target.value)} className="p-2 border rounded" placeholder="Bank name" />
          <input value={form.accountNumber} onChange={e=>update('accountNumber', e.target.value)} className="p-2 border rounded" placeholder="Account number" />
          <input value={form.ifsc} onChange={e=>update('ifsc', e.target.value)} className="p-2 border rounded" placeholder="IFSC" />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
            <button type="button" className="px-4 py-2 border rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
