import React, { useState } from 'react';

const turfsMock = [
  { id: 't1', name: 'GreenField Arena', owner: 'Owner 1', status: 'Active' },
  { id: 't2', name: 'New Turf', owner: 'Owner 2', status: 'Pending' },
];

export default function AdminTurfs() {
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name:'', status:'' });

  function startEdit(t) { setEditing(t.id); setForm({ name: t.name, status: t.status }); }
  function save() { alert('Saved (mock)'); setEditing(null); }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Manage Turfs</h1>
        {editing && (
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <h3 className="font-medium">Editing turf</h3>
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="p-2 border rounded mt-2" />
            <select value={form.status} onChange={e=>setForm({...form, status:e.target.value})} className="p-2 border rounded mt-2">
              <option>Active</option><option>Pending</option><option>Rejected</option>
            </select>
            <div className="mt-2"><button onClick={save} className="px-3 py-2 bg-indigo-600 text-white rounded">Save</button> <button onClick={()=>setEditing(null)} className="px-3 py-2 border rounded">Cancel</button></div>
          </div>
        )}
        <div className="bg-white rounded shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr><th className="p-3 text-left">Turf</th><th className="p-3 text-left">Owner</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr>
            </thead>
            <tbody>
              {turfsMock.map(t => (
                <tr key={t.id} className="border-t">
                  <td className="p-3">{t.name}</td>
                  <td className="p-3">{t.owner}</td>
                  <td className="p-3 text-center">{t.status}</td>
                  <td className="p-3 text-center"><button onClick={()=>startEdit(t)} className="px-2 py-1 border rounded mr-2">Edit</button><button className="px-2 py-1 border rounded">Approve</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
