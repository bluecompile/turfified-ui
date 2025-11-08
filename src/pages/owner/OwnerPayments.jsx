import React from 'react';

export default function OwnerPayments() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Payments & Reports</h1>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm text-gray-600">View earnings, download invoices and payout summary. (Placeholder)</p>
          <div className="mt-3"><button className="px-3 py-2 border rounded">Download CSV</button></div>
        </div>
      </div>
    </div>
  );
}
