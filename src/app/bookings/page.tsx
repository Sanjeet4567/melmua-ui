'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarDaysIcon, 
  ClockIcon,
  MapPinIcon,
  StarIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { useBooking } from '@/context/BookingContext';
import { artists } from '@/data/artists';
import { categories } from '@/data/categories';
import { Booking } from '@/types';

export default function MyBookingsPage() {
  const { bookings } = useBooking();
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBookings = bookings.filter(booking => {
    const artist = artists.find(a => a.id === booking.artistId);
    const category = categories.find(c => c.id === booking.categoryId);
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesSearch = !searchQuery || 
      artist?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
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
              <Link href="/bookings" className="text-primary-600 font-medium">My Bookings</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-4">
                My Bookings
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Manage all your makeup appointments and track their status
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-6 bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings by artist, service, or customer name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Status Filter */}
              <div className="flex gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Bookings List */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredBookings.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <CalendarDaysIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  {bookings.length === 0 ? 'No bookings yet' : 'No bookings found'}
                </h3>
                <p className="text-gray-500 mb-8">
                  {bookings.length === 0 
                    ? 'Start by booking your first makeup session!'
                    : 'Try adjusting your filters to see more results.'
                  }
                </p>
                <Link
                  href="/categories"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Browse Services
                </Link>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {filteredBookings.map((booking, index) => (
                  <BookingCard key={booking.id} booking={booking} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

interface BookingCardProps {
  booking: Booking;
  index: number;
}

function BookingCard({ booking, index }: BookingCardProps) {
  const artist = artists.find(a => a.id === booking.artistId);
  const category = categories.find(c => c.id === booking.categoryId);

  if (!artist || !category) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
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

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <img
              src={artist.profileImage}
              alt={artist.name}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{artist.name}</h3>
              <div className="flex items-center text-gray-600 mb-1">
                <MapPinIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">{artist.location}</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm">{artist.rating} ({artist.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
            <div className="text-2xl font-bold text-primary-600 mt-2">
              ₹{booking.totalAmount.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-primary-50 to-rose-50 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <CalendarDaysIcon className="w-5 h-5 text-primary-600 mr-2" />
              <span className="font-semibold text-gray-800">Service</span>
            </div>
            <div className="text-gray-800 font-medium">{category.name}</div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <CalendarDaysIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold text-gray-800">Date</span>
            </div>
            <div className="text-gray-800 font-medium">{formatDate(booking.date)}</div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <ClockIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-800">Time</span>
            </div>
            <div className="text-gray-800 font-medium">{formatTime(booking.time)}</div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Customer Details</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Name:</span>
              <span className="font-medium">{booking.customerName}</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-4 h-4 text-gray-400 mr-2" />
              <span className="font-medium">{booking.customerEmail}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 text-gray-400 mr-2" />
              <span className="font-medium">{booking.customerPhone}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {booking.notes && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Additional Notes</h4>
            <p className="text-gray-600 text-sm bg-blue-50 rounded-lg p-3">{booking.notes}</p>
          </div>
        )}

        {/* Booking ID and Date */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>Booking ID: #{booking.id.slice(-8).toUpperCase()}</span>
          <span>Booked on: {new Date(booking.createdAt).toLocaleDateString('en-IN')}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 text-center rounded-xl hover:border-primary-300 hover:text-primary-600 transition-colors flex items-center justify-center">
            <EyeIcon className="w-4 h-4 mr-2" />
            View Details
          </button>
          {booking.status === 'pending' && (
            <button className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors">
              Cancel
            </button>
          )}
          {booking.status === 'completed' && (
            <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-300">
              Rebook
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}