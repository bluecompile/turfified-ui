import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    // In real app: trigger OTP or password auth
    alert('Mock login successful');
    navigate('/');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Login / Register</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-2 border rounded" placeholder="Phone or email" />
          <button className="w-full p-2 bg-indigo-600 text-white rounded">Continue</button>
        </form>
        <p className="text-xs text-gray-500 mt-3">This is a mock. Implement OTP or password based auth in backend.</p>
      </div>
    </div>
  );
}
