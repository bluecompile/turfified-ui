import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OwnerTurfsNew() {
  const [form, setForm] = useState({ name:'', address:'', contact:'', types: [{label:'Half Turf', price:1200}], amenities: '', cancellationPolicy:'' });
  const navigate = useNavigate();

  function update(key, val) { setForm(prev=>({...prev, [key]: val})); }

  function addType() {
    setForm(prev=>({...prev, types: [...prev.types, {label:'New Type', price:0}]}));
  }

  function save(e) {
    e.preventDefault();
    alert('Turf saved (mock)');
    navigate('/owner/turfs');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Add / Edit Turf</h1>
        <form onSubmit={save} className="grid gap-3">
          <input value={form.name} onChange={e=>update('name', e.target.value)} placeholder="Turf name" className="p-2 border rounded" required />
          <input value={form.address} onChange={e=>update('address', e.target.value)} placeholder="Address" className="p-2 border rounded" required />
          <input value={form.contact} onChange={e=>update('contact', e.target.value)} placeholder="Contact phone" className="p-2 border rounded" />
          <label className="text-sm">Turf types & pricing</label>
          {form.types.map((t, idx)=> (
            <div key={idx} className="grid sm:grid-cols-2 gap-2">
              <input value={t.label} onChange={e=>{ const copy = [...form.types]; copy[idx].label = e.target.value; setForm(prev=>({...prev, types: copy})); }} className="p-2 border rounded" />
              <input value={t.price} onChange={e=>{ const copy = [...form.types]; copy[idx].price = Number(e.target.value); setForm(prev=>({...prev, types: copy})); }} className="p-2 border rounded" />
            </div>
          ))}
          <button type="button" onClick={addType} className="px-3 py-2 border rounded">Add turf type</button>
          <textarea value={form.amenities} onChange={e=>update('amenities', e.target.value)} placeholder="Amenities (comma separated)" className="p-2 border rounded" />
          <input type="file" className="p-2" />
          <input value={form.cancellationPolicy} onChange={e=>update('cancellationPolicy', e.target.value)} placeholder="Cancellation policy" className="p-2 border rounded" />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save turf</button>
            <button type="button" className="px-4 py-2 border rounded">Preview</button>
          </div>
        </form>
      </div>
    </div>
  );
}
