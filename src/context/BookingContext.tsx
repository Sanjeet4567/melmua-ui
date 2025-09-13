'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Booking } from '@/types';

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => void;
  getBookingById: (id: string) => Booking | undefined;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Omit<Booking, 'id' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...booking,
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    setBookings(prev => [...prev, newBooking]);
  };

  const getBookingById = (id: string) => {
    return bookings.find(booking => booking.id === id);
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id ? { ...booking, status } : booking
      )
    );
  };

  return (
    <BookingContext.Provider value={{
      bookings,
      addBooking,
      getBookingById,
      updateBookingStatus
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}