'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  StarIcon, 
  MapPinIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  HeartIcon,
  TagIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { artists } from '@/data/artists';
import { categories } from '@/data/categories';
import { Artist } from '@/types';

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const filteredArtists = useMemo(() => {
    return artists.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           artist.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           artist.specialties.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'all' || artist.categoryIds.includes(categoryFilter);
      
      const matchesPrice = priceFilter === 'all' || 
                          (priceFilter === 'low' && artist.price < 5000) ||
                          (priceFilter === 'medium' && artist.price >= 5000 && artist.price < 15000) ||
                          (priceFilter === 'high' && artist.price >= 15000);
      
      const matchesRating = ratingFilter === 'all' ||
                           (ratingFilter === '4+' && artist.rating >= 4) ||
                           (ratingFilter === '4.5+' && artist.rating >= 4.5);
      
      const matchesLocation = locationFilter === 'all' || artist.location === locationFilter;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesLocation;
    });
  }, [artists, searchQuery, categoryFilter, priceFilter, ratingFilter, locationFilter]);

  const locations = Array.from(new Set(artists.map(artist => artist.location)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary-600 to-rose-500 bg-clip-text text-transparent">
              Melmua
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
              <Link href="/artists" className="text-primary-600 font-medium">Artists</Link>
              <Link href="/bookings" className="text-gray-700 hover:text-primary-600 transition-colors">My Bookings</Link>
            </div>
            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onClick={() => setShowMobileNav(!showMobileNav)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Dropdown */}
          {showMobileNav && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-3 space-y-2">
                <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>Home</Link>
                <Link href="/categories" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>Categories</Link>
                <Link href="/artists" className="block py-2 text-primary-600 font-medium" onClick={() => setShowMobileNav(false)}>Artists</Link>
                <Link href="/bookings" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>My Bookings</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary-600 to-rose-500 bg-clip-text text-transparent">
                Our Artists
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover talented and verified makeup artists who will bring your beauty vision to life with expertise and creativity.
              </p>
              <div className="mt-6 text-lg">
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full border border-primary-200 font-medium">
                  {filteredArtists.length} Professional Artists Available
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white shadow-sm sticky top-16 z-40 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4">
              {/* Filter Header with Mobile Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FunnelIcon className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">Search & Filter Artists</span>
                </div>
                {/* Mobile Filter Toggle Button */}
                <button
                  className="md:hidden px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>
              
              {/* Filter Content - Hidden on mobile by default, always visible on desktop */}
              <div className={`flex flex-col lg:flex-row gap-4 ${showMobileFilters ? 'flex' : 'hidden md:flex'}`}>
                {/* Search */}
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search artists, locations, or specialties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 placeholder-gray-500 font-medium shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3">
                  <div className="relative">
                    <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="custom-select pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-medium shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer min-w-[160px] appearance-none"
                    >
                      <option value="all" className="font-medium">All Categories</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id} className="font-medium">{category.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <CurrencyRupeeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      className="custom-select pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-medium shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer min-w-[160px] appearance-none"
                    >
                      <option value="all" className="font-medium">All Prices</option>
                      <option value="low" className="font-medium">Under ₹5,000</option>
                      <option value="medium" className="font-medium">₹5,000 - ₹15,000</option>
                      <option value="high" className="font-medium">Above ₹15,000</option>
                    </select>
                  </div>

                  <div className="relative">
                    <StarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={ratingFilter}
                      onChange={(e) => setRatingFilter(e.target.value)}
                      className="custom-select pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-medium shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer min-w-[140px] appearance-none"
                    >
                      <option value="all" className="font-medium">All Ratings</option>
                      <option value="4+" className="font-medium">4+ Stars</option>
                      <option value="4.5+" className="font-medium">4.5+ Stars</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="custom-select pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-medium shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer min-w-[160px] appearance-none"
                    >
                      <option value="all" className="font-medium">All Locations</option>
                      {locations.map(location => (
                        <option key={location} value={location} className="font-medium">{location}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <FunnelIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No artists found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtists.map((artist, index) => (
                  <ArtistCard key={artist.id} artist={artist} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

function ArtistCard({ artist, index }: ArtistCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Artist Image */}
      <div className="relative overflow-hidden">
        <img
          src={artist.profileImage}
          alt={artist.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
          >
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>
        {artist.verified && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              <CheckBadgeIcon className="w-4 h-4 mr-1" />
              Verified
            </div>
          </div>
        )}
      </div>

      {/* Artist Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{artist.name}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span className="text-sm">{artist.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">
              ₹{artist.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">per session</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(artist.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {artist.rating} ({artist.reviewCount} reviews)
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        {/* Specialties */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {artist.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-rose-100 text-primary-700 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/artist/${artist.id}`}
            className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 text-center rounded-xl hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            View Profile
          </Link>
          <Link
            href={`/book/${artist.id}`}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white text-center rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}