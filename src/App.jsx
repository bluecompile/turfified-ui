import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteNav from './components/SiteNav';

// Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminTurfs from './pages/admin/AdminTurfs';
import AdminBookings from './pages/admin/AdminBookings';
import AdminRevenue from './pages/admin/AdminRevenue';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminSettings from './pages/admin/AdminSettings';

// Player
import ListTurfs from './pages/player/ListTurfs';
import ViewTurf from './pages/player/ViewTurf';
import BookingPage from './pages/player/BookingPage';
import Home from './pages/player/Home';
import Login from './pages/player/Login';
import PaymentPage from './pages/player/PaymentPage';
import Confirmation from './pages/player/Confirmation';
import MyBookings from './pages/player/MyBookings';
import Profile from './pages/player/Profile';

// Owner
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

// Fallback
function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go to Home</a>
    </div>
  );
}

// Error Boundary (to catch rendering errors)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary Caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <ErrorBoundary>
        <Routes>
          {/* Player */}
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListTurfs />} />
          <Route path="/turf/:id" element={<ViewTurf />} />
          <Route path="/turf/:id/book" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/turfs" element={<AdminTurfs />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/revenue" element={<AdminRevenue />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Owner */}
          <Route path="/owner/signup" element={<OwnerSignup />} />
          <Route path="/owner/login" element={<OwnerLogin />} />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/turfs" element={<OwnerTurfs />} />
          <Route path="/owner/turfs/new" element={<OwnerTurfsNew />} />
          <Route path="/owner/slots" element={<OwnerSlots />} />
          <Route path="/owner/bookings" element={<OwnerBookings />} />
          <Route path="/owner/payments" element={<OwnerPayments />} />
          <Route path="/owner/promotions" element={<OwnerPromotions />} />
          <Route path="/owner/profile" element={<OwnerProfile />} />

          {/* Catch-all for invalid routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
