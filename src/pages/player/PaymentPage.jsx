import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [payer, setPayer] = useState({ name:'', phone:'', email:'' });
  const [method, setMethod] = useState('razorpay');
  const [upi, setUpi] = useState('');

  function handlePay(e){ e.preventDefault(); alert('Mock payment initiated'); navigate('/confirmation'); }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <form onSubmit={handlePay} className="grid gap-3">
          <input value={payer.name} onChange={e=>setPayer({...payer, name:e.target.value})} className="p-2 border rounded" placeholder="Payer name" required />
          <input value={payer.phone} onChange={e=>setPayer({...payer, phone:e.target.value})} className="p-2 border rounded" placeholder="Phone" required />
          <input value={payer.email} onChange={e=>setPayer({...payer, email:e.target.value})} className="p-2 border rounded" placeholder="Email (optional)" />
          <label className="text-sm">Payment method</label>
          <select value={method} onChange={e=>setMethod(e.target.value)} className="p-2 border rounded">
            <option value="razorpay">Razorpay / Card</option>
            <option value="upi">UPI</option>
            <option value="wallet">Wallet / Credits</option>
          </select>
          {method==='upi' && <input value={upi} onChange={e=>setUpi(e.target.value)} className="p-2 border rounded" placeholder="Enter UPI ID (example@upi)" />}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded">Pay ₹{1200}</button>
            <button type="button" className="px-4 py-2 border rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
