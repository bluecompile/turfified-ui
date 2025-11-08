import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Mock admin auth - in real app validate credentials on server
    if (user === 'admin' && pass === 'admin') {
      alert('Admin login success');
      navigate('/admin');
    } else {
      alert('Invalid credentials. Use admin/admin for demo.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input value={user} onChange={e => setUser(e.target.value)} className="w-full p-2 border rounded" placeholder="Username" />
          <input value={pass} onChange={e => setPass(e.target.value)} type="password" className="w-full p-2 border rounded" placeholder="Password" />
          <button className="w-full p-2 bg-indigo-600 text-white rounded">Login</button>
        </form>
        <p className="text-xs text-gray-500 mt-3">Demo admin credentials: admin / admin</p>
      </div>
    </div>
  );
}
