import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OwnerSignup() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', businessName: '', address: '', gst: '', bankName: '', accountNumber: '', ifsc: '', pan: ''
  });
  const navigate = useNavigate();

  function update(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In real app: send KYC + bank details to server for verification
    alert('Owner registration submitted for verification (demo).');
    navigate('/owner/login');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Owner Signup / KYC</h2>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input required value={form.name} onChange={e => update('name', e.target.value)} className="p-2 border rounded" placeholder="Full name" />
          <input required value={form.phone} onChange={e => update('phone', e.target.value)} className="p-2 border rounded" placeholder="Phone" />
          <input value={form.email} onChange={e => update('email', e.target.value)} className="p-2 border rounded" placeholder="Email (optional)" />
          <input value={form.businessName} onChange={e => update('businessName', e.target.value)} className="p-2 border rounded" placeholder="Business / Turf name" />
          <input value={form.address} onChange={e => update('address', e.target.value)} className="p-2 border rounded" placeholder="Business address" />
          <div className="grid sm:grid-cols-2 gap-2">
            <input value={form.gst} onChange={e => update('gst', e.target.value)} className="p-2 border rounded" placeholder="GST (optional)" />
            <input value={form.pan} onChange={e => update('pan', e.target.value)} className="p-2 border rounded" placeholder="PAN (optional)" />
          </div>
          <h3 className="font-medium mt-2">Bank details (for payouts)</h3>
          <input required value={form.bankName} onChange={e => update('bankName', e.target.value)} className="p-2 border rounded" placeholder="Bank name" />
          <input required value={form.accountNumber} onChange={e => update('accountNumber', e.target.value)} className="p-2 border rounded" placeholder="Account number" />
          <input required value={form.ifsc} onChange={e => update('ifsc', e.target.value)} className="p-2 border rounded" placeholder="IFSC code" />
          <div className="text-xs text-gray-500">We will verify KYC and bank details before enabling payouts. Do not share sensitive documents here in demo mode.</div>
          <button type="submit" className="mt-3 p-2 bg-indigo-600 text-white rounded">Submit registration</button>
        </form>
      </div>
    </div>
  );
}
