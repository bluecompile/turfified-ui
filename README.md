# Turfified - React + Tailwind + Vite Project

## 🚀 How to Run the Project

1. **Install Node.js** (v16 or newer) — [Download here](https://nodejs.org/)
2. **Open a terminal** in the project folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. The dev server will start (default: http://localhost:5173)
4. Visit that URL in your browser to view the Turfified app.

To build for production:
```bash
npm run build
npm run preview
```

---

## 🧩 Git & GitHub Setup

To initialize Git and push this project to GitHub:

1. **Initialize a Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Turfified project setup"
   ```

2. **Create a new repository** on [GitHub](https://github.com/new).  
   Copy your repo URL (e.g., `https://github.com/username/turfified.git`).

3. **Add the remote origin:**
   ```bash
   git remote add origin https://github.com/username/turfified.git
   ```

4. **Push your code:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. Done ✅ Your project is now on GitHub.

---

# Turfified - Pages Reference (User-wise)

This README lists every page in the Turfified project, grouped by user role (Player, Owner, Admin),
with the route/path and a short description of what each page does. Use this as a developer or product
reference when implementing features or APIs.

---

## Player / Public (players searching & booking)

- **Home (Landing)** — `/`  
  Search bar + map placeholder, featured turfs. Use for quick search by location/name and show highlighted turfs.

- **List Turfs (filtered list)** — `/list`  
  Filterable list of turfs for players (price, location, rating, sport type). Each item links to view and book actions.

- **View Turf (turf detail)** — `/turf/:id`  
  Detailed turf page: images, address, price/hour, ratings/reviews, features/amenities, available turf types, and CTA “Book Now” / “See availability”.

- **Booking (slot selection & booking)** — `/turf/:id/book`  
  Select date, start time, duration, number of players, turf-type (half/full), apply coupon, view price summary, then proceed to payment. Uses the TurfBookingScreen component.

- **Payment (checkout stub / integration)** — `/payment`  
  Payment checkout page (mock). Intended for Razorpay / UPI / payment provider integration and submitting order details.

- **Booking Confirmation** — `/confirmation`  
  Booking success page that shows booking details and actions like “Add to Calendar”, “Share” and link to My Bookings.

- **My Bookings Dashboard (player)** — `/bookings`  
  Player’s bookings list (past & upcoming). View details, cancel/reschedule where allowed.

- **Profile & Reviews (player profile)** — `/profile`  
  Edit profile, view wallet/credits, view/add reviews for turfs.

- **Login / Register (player auth)** — `/login`  
  Login or register flow (mock) — phone/email OTP or password-based authentication (to implement server-side).

---

## Owner (turf owners / managers)

- **Owner Signup / KYC (owner registration)** — `/owner/signup`  
  Owner onboarding with KYC-like form: name, business/turf details, GST/PAN (optional) and **bank details (bank name, account number, IFSC)** for payouts. Submits for verification.

- **Owner Login** — `/owner/login`  
  Owner login screen (mock). After auth navigate to owner dashboard.

- **Owner Dashboard (overview)** — `/owner/dashboard`  
  Owner’s home: daily/weekly stats, bookings count, revenue quick stats, pending payouts, quick links to manage turfs/slots/bookings.

- **Manage Turfs (owner turf list / CRUD)** — `/owner/turfs`  
  Owner’s turfs list with actions: add/edit/delete turf, upload images, set amenities, set cancellation policy, view turf status (active/pending).

- **Add / Edit Turf** — `/owner/turfs/new` (or `/owner/turfs/:id/edit`)  
  Form to add turf details, images, turf types and pricing; set cancellation policy and amenities.

- **Slot Management / Calendar (owner)** — `/owner/slots`  
  Weekly calendar UI (placeholder) to define available slots, hourly pricing, block maintenance days and set recurring/one-off closures.

- **Booking Management (owner)** — `/owner/bookings`  
  Booking requests & confirmations for owner’s turfs. Approve/reject bookings, view past bookings and booking details.

- **Payments & Reports (owner)** — `/owner/payments`  
  View earnings, download invoices/CSV, payout summary and payout history (placeholder for actual payouts integration).

- **Promotions & Offers (owner)** — `/owner/promotions`  
  Owner-managed discount codes or event offers to promote their turf.

- **Owner Profile & Settings** — `/owner/profile`  
  Edit contact info, bank details, payout settings, cancellation policy, change password.

> **Note:** Owner signup collects bank/KYC data — verify on the server before enabling payouts. Do not store sensitive documents insecurely in production.

---

## Admin (platform operators)

- **Admin Login** — `/admin/login`  
  Secure admin authentication (demo credentials provided in project for development).

- **Admin Dashboard (overview)** — `/admin`  
  Admin overview: total users, bookings, active turfs, revenue summary, recent bookings and pending turf registrations.

- **User Management (admin)** — `/admin/users`  
  View users list, edit user profiles, deactivate/reactivate accounts, search/filter users.

- **Turf Management (admin)** — `/admin/turfs`  
  Approve/reject new turf registrations, edit turf details, manage owner associations and turf status.

- **Booking Management (admin)** — `/admin/bookings`  
  Monitor platform bookings, handle refunds/cancellations, view booking details and issue manual refunds.

- **Revenue & Analytics (admin)** — `/admin/revenue`  
  Monthly revenue, commissions, owner payouts analytics and exportable reports (CSV/Excel). Chart placeholders.

- **Feedback & Complaints (admin)** — `/admin/feedback`  
  Complaints module to view/triage/resolve reported issues and coordinate refunds or owner actions.

- **Settings / Config (admin)** — `/admin/settings`  
  Platform configuration: commission rates, payment gateway keys, global cancellation rules, notification config.

---

## Shared / Component-level pages & utilities

- **Turf Booking Component** — `src/components/TurfBookingScreen.jsx`  
  Reusable booking UI used by Booking page (can be reused in owner calendar or admin booking detail if needed).

- **Site Navigation** — `src/components/SiteNav.jsx`  
  Top navigation used across all public/owner/admin pages (links to Home, Bookings, Profile, Owner/Admin entry points).

---

## Quick route map (copy/paste)
```
Public/Player:
  /                Home (landing)
  /list            List Turfs
  /turf/:id        Turf Details
  /turf/:id/book   Booking
  /payment         Payment checkout
  /confirmation    Booking confirmed
  /bookings        My bookings (player)
  /profile         Profile & reviews
  /login           Login/Register

Owner:
  /owner/signup    Owner KYC / signup
  /owner/login     Owner login
  /owner/dashboard Owner dashboard
  /owner/turfs     Manage turfs (+ /owner/turfs/new, edit)
  /owner/slots     Slot calendar
  /owner/bookings  Booking requests
  /owner/payments  Payments & reports
  /owner/promotions Promotions / offers
  /owner/profile   Owner profile & settings

Admin:
  /admin/login     Admin login
  /admin           Admin dashboard
  /admin/users     User management
  /admin/turfs     Turf management
  /admin/bookings  Booking management
  /admin/revenue   Revenue & analytics
  /admin/feedback  Complaints & disputes
  /admin/settings  Platform settings
```

---
Generated by Turfified dev helper.
