import React from 'react';
import { useParams } from 'react-router-dom';
import TurfBookingScreen from '../../components/TurfBookingScreen';

export default function BookingPage() {
  const { id } = useParams();
  // In a real app you'd fetch turf details by id and pass to booking component.
  return <TurfBookingScreen turfId={id} />;
}
