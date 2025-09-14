'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { 
  CheckCircleIcon, 
  CalendarDaysIcon, 
  ClockIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  HeartIcon,
  ShareIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';
import { useBooking } from '@/context/BookingContext';
import { artists } from '@/data/artists';
import { categories } from '@/data/categories';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const { bookings } = useBooking();
  
  // Get the latest booking (in a real app, you'd pass the booking ID)
  const latestBooking = bookings[bookings.length - 1];
  const artist = artists.find(a => a.id === latestBooking?.artistId);
  const category = categories.find(c => c.id === latestBooking?.categoryId);

  if (!latestBooking || !artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Booking not found</h1>
          <Link href="/" className="text-primary-600 hover:underline mt-4 inline-block">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary-600 to-rose-500 bg-clip-text text-transparent">
              Melmua
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
              <Link href="/artists" className="text-gray-700 hover:text-primary-600 transition-colors">Artists</Link>
              <Link href="/bookings" className="text-gray-700 hover:text-primary-600 transition-colors">My Bookings</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-4"
            >
              Booking Confirmed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Your makeup session has been successfully booked. We&apos;ll send you a confirmation email shortly.
            </motion.p>
          </motion.div>

          {/* Booking Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Booking Details</h2>
                  <p className="opacity-90">Booking ID: #{latestBooking.id.slice(-8).toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹{latestBooking.totalAmount.toLocaleString()}</div>
                  <div className="opacity-90">Total Amount</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Artist Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <UserIcon className="w-6 h-6 mr-2 text-primary-600" />
                    Your Artist
                  </h3>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={artist.profileImage}
                      alt={artist.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{artist.name}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {artist.location}
                      </div>
                      <div className="text-sm text-gray-600">{artist.experience} experience</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Service</span>
                      <span className="font-medium">{category?.name}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-medium">{artist.rating} ⭐ ({artist.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Status</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Pending Confirmation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Appointment Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <CalendarDaysIcon className="w-6 h-6 mr-2 text-primary-600" />
                    Appointment Details
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary-50 to-rose-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <CalendarDaysIcon className="w-5 h-5 text-primary-600 mr-2" />
                        <span className="font-semibold text-gray-800">Date</span>
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        {formatDate(latestBooking.date)}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <ClockIcon className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-800">Time</span>
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        {formatTime(latestBooking.time)}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">2-3 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Customer</span>
                        <span className="font-medium">{latestBooking.customerName}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Contact</span>
                        <div className="text-right">
                          <div className="font-medium">{latestBooking.customerEmail}</div>
                          <div className="text-sm text-gray-600">{latestBooking.customerPhone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {latestBooking.notes && (
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">Additional Notes</h4>
                  <p className="text-gray-600">{latestBooking.notes}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            <button className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              <PrinterIcon className="w-5 h-5 mr-2" />
              Print Details
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              <ShareIcon className="w-5 h-5 mr-2" />
              Share Booking
            </button>
            <Link
              href="/bookings"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <HeartIcon className="w-5 h-5 mr-2" />
              View All Bookings
            </Link>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Confirmation Email</h4>
                <p className="text-gray-600 text-sm">You&apos;ll receive a detailed confirmation email within 5 minutes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Artist Contact</h4>
                <p className="text-gray-600 text-sm">Your artist will contact you within 24 hours to confirm details.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Enjoy Your Session</h4>
                <p className="text-gray-600 text-sm">Get ready for an amazing makeup experience on your chosen date!</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="space-x-4">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 text-gray-600 hover:text-primary-600 transition-colors"
              >
                ← Back to Home
              </Link>
              <Link 
                href="/categories"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Book Another Session
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading confirmation...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}