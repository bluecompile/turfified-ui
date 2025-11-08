import React, { useState, useMemo } from "react";

/* TurfBookingScreen - full UI component (React + Tailwind)
   Paste this file into src/components/TurfBookingScreen.jsx
*/

// Sample turf data (would normally come from API)
const sampleTurf = {
  id: "turf-001",
  name: "GreenField Arena",
  address: "12, Sports Road, Chennai",
  rating: 4.6,
  images: [
    "https://via.placeholder.com/600x360?text=Turf+1",
    "https://via.placeholder.com/600x360?text=Turf+2",
  ],
  turfTypes: [
    { id: "full", label: "Full Turf (11-a-side)", pricePerHour: 3000 },
    { id: "half", label: "Half Turf (5-a-side)", pricePerHour: 1200 },
  ],
  features: ["Floodlights", "Changing Room", "Parking", "Referee Available"],
};

const timeSlots = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

export default function TurfBookingScreen({ turfId }) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
  });

  const [turfTypeId, setTurfTypeId] = useState(sampleTurf.turfTypes[1].id);
  const [durationHours, setDurationHours] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [players, setPlayers] = useState(10);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const selectedTurfType = sampleTurf.turfTypes.find(t => t.id === turfTypeId);

  const basePrice = useMemo(() => selectedTurfType.pricePerHour * durationHours, [selectedTurfType, durationHours]);

  const discount = useMemo(() => {
    if (!appliedCoupon) return 0;
    // simple demo coupons
    if (appliedCoupon.code === "WELCOME10") return Math.round(basePrice * 0.1);
    if (appliedCoupon.code === "FLAT100") return 100;
    return 0;
  }, [appliedCoupon, basePrice]);

  const totalPrice = Math.max(0, basePrice - discount);

  function applyCouponCode() {
    const code = coupon.trim().toUpperCase();
    if (!code) return;
    if (code === "WELCOME10") setAppliedCoupon({ code: "WELCOME10", desc: "10% off for new users" });
    else if (code === "FLAT100") setAppliedCoupon({ code: "FLAT100", desc: "₹100 off" });
    else setAppliedCoupon({ code: code, desc: "Invalid or expired" });
  }

  function handleSlotToggle(slot) {
    // simple single-slot selection logic
    setSelectedSlot(prev => (prev === slot ? null : slot));
  }

  function handleBookNow() {
    if (!selectedSlot) {
      alert("Please select a time slot before booking.");
      return;
    }
    // Here you'd call your booking API. For this mock we just show an alert.
    alert(`Booking confirmed!\nTurf: ${sampleTurf.name}\nDate: ${selectedDate}\nTime: ${selectedSlot}\nDuration: ${durationHours} hour(s)\nTotal: ₹${totalPrice}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left column: images + basic info */}
          <div className="md:w-1/2 p-6">
            <div className="rounded-lg overflow-hidden shadow-sm mb-4">
              <img src={sampleTurf.images[0]} alt="turf" className="w-full h-56 object-cover" />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{sampleTurf.name}</h2>
                <p className="text-sm text-gray-600">{sampleTurf.address}</p>
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
                  <span className="font-medium">{sampleTurf.rating} ★</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Popular</span>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  {sampleTurf.features.map((f, i) => (
                    <span key={i} className="inline-block mr-2">• {f}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-sm text-gray-500">Selected</div>
                <div className="text-xl font-semibold">₹{selectedTurfType.pricePerHour}/hr</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Choose turf type</h3>
              <div className="flex gap-3">
                {sampleTurf.turfTypes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTurfTypeId(t.id)}
                    className={`flex-1 p-3 rounded-lg border ${t.id === turfTypeId ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"}`}
                  >
                    <div className="text-sm font-medium">{t.label}</div>
                    <div className="text-xs text-gray-500">₹{t.pricePerHour}/hr</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Images</h3>
              <div className="flex gap-3">
                {sampleTurf.images.map((src, i) => (
                  <img key={i} src={src} alt={`img-${i}`} className="w-24 h-16 object-cover rounded-md shadow-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: booking controls */}
          <div className="md:w-1/2 p-6 border-l">
            <h3 className="text-lg font-semibold">Book a slot</h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Date</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="mt-1 p-2 border rounded-md"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Duration (hours)</span>
                <select value={durationHours} onChange={e => setDurationHours(Number(e.target.value))} className="mt-1 p-2 border rounded-md">
                  {[1, 2, 3, 4].map(h => (
                    <option key={h} value={h}>{h} hour{h>1?"s":""}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Players</span>
                <input type="number" value={players} min={1} onChange={e => setPlayers(Number(e.target.value))} className="mt-1 p-2 border rounded-md" />
              </label>

              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Preferred start time</span>
                <select value={selectedSlot || ""} onChange={e => setSelectedSlot(e.target.value)} className="mt-1 p-2 border rounded-md">
                  <option value="">-- choose from slots below --</option>
                  {timeSlots.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-medium text-gray-700">Available slots</h4>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => handleSlotToggle(slot)}
                    className={`p-2 rounded-md text-sm border ${selectedSlot === slot ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-200"}`}
                    aria-pressed={selectedSlot === slot}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-medium text-gray-700">Apply coupon</h4>
              <div className="flex gap-2 mt-2">
                <input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Enter coupon code" className="flex-1 p-2 border rounded-md" />
                <button onClick={applyCouponCode} className="px-4 py-2 rounded-md bg-indigo-600 text-white">Apply</button>
              </div>
              {appliedCoupon && (
                <div className="mt-2 text-sm text-gray-600">Coupon: <span className="font-medium">{appliedCoupon.code}</span> — {appliedCoupon.desc}</div>
              )}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <div>Price</div>
                <div>₹{basePrice}</div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <div>Discount</div>
                <div>- ₹{discount}</div>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-3">
                <div>Total</div>
                <div>₹{totalPrice}</div>
              </div>

              <div className="mt-4 flex gap-3">
                <button onClick={handleBookNow} className="flex-1 py-3 rounded-lg bg-green-600 text-white font-semibold hover:opacity-95">Pay & Book</button>
                <button onClick={() => alert('Added to cart (demo)')} className="w-36 py-3 rounded-lg border border-gray-200">Add to cart</button>
              </div>

              <div className="mt-3 text-xs text-gray-500">By booking you agree to the TurfMate <u>Terms & Conditions</u>.</div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700">Help</h4>
              <p className="text-xs text-gray-600 mt-1">Need a referee or coach? Call the turf on arrival. For cancellations see refund policy.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Small footer with quick actions */}
      <div className="max-w-5xl mx-auto mt-6 flex justify-between items-center text-sm text-gray-600">
        <div>Need changes? Edit booking details above.</div>
        <div className="flex gap-3">
          <button className="px-3 py-2 border rounded">Share</button>
          <button className="px-3 py-2 border rounded">Save for later</button>
        </div>
      </div>
    </div>
  );
}
