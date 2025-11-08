import React, { useState } from 'react';

export default function OwnerPromotions() {
  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState('percent');
  const [value, setValue] = useState('10');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');
  const [minOrder, setMinOrder] = useState('0');

  function createPromo(e) {
    e.preventDefault();
    // send to server in real app
    alert(`Created promo ${code} (${discountType} ${value}) valid ${validFrom} to ${validTo}`);
    setCode(''); setValue('10'); setValidFrom(''); setValidTo(''); setMinOrder('0');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Promotions & Offers</h1>
        <form onSubmit={createPromo} className="grid gap-3">
          <input value={code} onChange={e=>setCode(e.target.value)} required placeholder="Promo code (e.g. SUMMER50)" className="p-2 border rounded" />
          <div className="grid sm:grid-cols-3 gap-2">
            <select value={discountType} onChange={e=>setDiscountType(e.target.value)} className="p-2 border rounded">
              <option value="percent">Percentage</option>
              <option value="flat">Flat amount</option>
            </select>
            <input value={value} onChange={e=>setValue(e.target.value)} className="p-2 border rounded" placeholder="10" />
            <input value={minOrder} onChange={e=>setMinOrder(e.target.value)} className="p-2 border rounded" placeholder="Min order (₹)" />
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <input type="date" value={validFrom} onChange={e=>setValidFrom(e.target.value)} className="p-2 border rounded" />
            <input type="date" value={validTo} onChange={e=>setValidTo(e.target.value)} className="p-2 border rounded" />
          </div>
          <textarea placeholder="Optional note for terms (e.g. applies only on weekends)" className="p-2 border rounded" />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Create promo</button>
            <button type="button" className="px-4 py-2 border rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
