import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminTurfs from './pages/admin/AdminTurfs';
import AdminBookings from './pages/admin/AdminBookings';
import AdminRevenue from './pages/admin/AdminRevenue';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminSettings from './pages/admin/AdminSettings';

import ListTurfs from './pages/ListTurfs';
import ViewTurf from './pages/ViewTurf';
import BookingPage from './pages/BookingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import PaymentPage from './pages/PaymentPage';
import Confirmation from './pages/Confirmation';
import MyBookings from './pages/MyBookings';
import Profile from './pages/Profile';
import OwnerSignup from './pages/owner/OwnerSignup';
import OwnerLogin from './pages/owner/OwnerLogin';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import OwnerTurfs from './pages/owner/OwnerTurfs';
import OwnerSlots from './pages/owner/OwnerSlots';
import OwnerBookings from './pages/owner/OwnerBookings';
import OwnerPayments from './pages/owner/OwnerPayments';
import OwnerPromotions from './pages/owner/OwnerPromotions';
import OwnerProfile from './pages/owner/OwnerProfile';
import OwnerTurfsNew from './pages/owner/OwnerTurfsNew';



export default function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListTurfs />} />
        <Route path="/turf/:id" element={<ViewTurf />} />
        <Route path="/turf/:id/book" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/users" element={<AdminUsers />} />
<Route path="/admin/turfs" element={<AdminTurfs />} />
<Route path="/admin/bookings" element={<AdminBookings />} />
<Route path="/admin/revenue" element={<AdminRevenue />} />
<Route path="/admin/feedback" element={<AdminFeedback />} />
<Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="/owner/signup" element={<OwnerSignup />} />
<Route path="/owner/login" element={<OwnerLogin />} />
<Route path="/owner/dashboard" element={<OwnerDashboard />} />
<Route path="/owner/turfs" element={<OwnerTurfs />} />
<Route path="/owner/slots" element={<OwnerSlots />} />
<Route path="/owner/bookings" element={<OwnerBookings />} />
<Route path="/owner/payments" element={<OwnerPayments />} />
<Route path="/owner/promotions" element={<OwnerPromotions />} />
<Route path="/owner/profile" element={<OwnerProfile />} />
              <Route path="/owner/turfs/new" element={<OwnerTurfsNew />} />
      </Routes>
    </BrowserRouter>
  );
}
