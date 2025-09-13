'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  StarIcon, 
  MapPinIcon, 
  CheckBadgeIcon,
  HeartIcon,
  ShareIcon,
  CalendarDaysIcon,
  SparklesIcon,
  PhotoIcon,
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { artists } from '@/data/artists';
import { categories } from '@/data/categories';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// Mock reviews data - in a real app, this would come from an API
const mockReviews: Review[] = [
  {
    id: '1',
    customerName: 'Shreya M.',
    rating: 5,
    comment: 'Absolutely stunning work! She understood exactly what I wanted for my wedding and exceeded my expectations. The makeup lasted all day and looked flawless in photos.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    customerName: 'Riya K.',
    rating: 5,
    comment: 'Professional, punctual, and incredibly talented. The trial session was perfect and she made me feel so comfortable. Highly recommend!',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    customerName: 'Anjali S.',
    rating: 4,
    comment: 'Great experience overall. Beautiful makeup that lasted throughout the event. Would definitely book again for future occasions.',
    date: '2024-01-08',
    verified: false
  }
];

export default function ArtistProfilePage() {
  const params = useParams();
  const artistId = params?.artistId as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const artist = artists.find(a => a.id === artistId);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Artist not found</h1>
          <Link href="/artists" className="text-primary-600 hover:underline mt-4 inline-block">
            Browse all artists
          </Link>
        </div>
      </div>
    );
  }

  const artistCategories = categories.filter(cat => 
    artist.categoryIds.includes(cat.id)
  );

  const allImages = [artist.profileImage, ...artist.portfolio];

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
              <Link href="/bookings" className="text-gray-700 hover:text-primary-600 transition-colors">My Bookings</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative"
                >
                  <img
                    src={allImages[selectedImage]}
                    alt={artist.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  {artist.verified && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
                        <CheckBadgeIcon className="w-5 h-5 mr-2" />
                        Verified Artist
                      </div>
                    </div>
                  )}
                </motion.div>
                
                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${artist.name} portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Artist Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-4xl font-playfair font-bold text-gray-800">
                        {artist.name}
                      </h1>
                      <div className="flex items-center mt-2 text-gray-600">
                        <MapPinIcon className="w-5 h-5 mr-2" />
                        <span>{artist.location}</span>
                        <span className="mx-3">•</span>
                        <ClockIcon className="w-5 h-5 mr-2" />
                        <span>{artist.experience}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-3 rounded-full transition-colors ${
                          isLiked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <HeartIcon className="w-5 h-5" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <ShareIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarSolid
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(artist.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-lg font-semibold text-gray-800">
                        {artist.rating}
                      </span>
                      <span className="ml-1 text-gray-600">
                        ({artist.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-3xl font-bold text-primary-600">
                        <CurrencyRupeeIcon className="w-8 h-8" />
                        {artist.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per session</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-4 py-2 bg-gradient-to-r from-primary-100 to-rose-100 text-primary-700 text-sm rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {artistCategories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/category/${category.id}`}
                          className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:border-primary-300 hover:text-primary-600 transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Available Days</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <span
                          key={day}
                          className={`px-3 py-1 text-sm rounded-full ${
                            artist.availability.includes(day)
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {day.slice(0, 3)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={`/book/${artist.id}`}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-rose-500 text-white py-4 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <CalendarDaysIcon className="w-5 h-5 mr-2" />
                      Book Now
                    </Link>
                    <button className="px-6 py-4 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors flex items-center">
                      <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
                      Message
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              {[
                { id: 'about', label: 'About', icon: SparklesIcon },
                { id: 'portfolio', label: 'Portfolio', icon: PhotoIcon },
                { id: 'reviews', label: 'Reviews', icon: StarIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-primary-600 text-primary-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About {artist.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {artist.bio}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-4">Experience & Expertise</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• {artist.experience} of professional experience</li>
                        <li>• Specialized in {artist.specialties.join(', ')}</li>
                        <li>• {artist.reviewCount}+ satisfied clients</li>
                        <li>• {artist.rating}/5 average rating</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-4">Service Areas</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Based in {artist.location}</li>
                        <li>• Available for destination events</li>
                        <li>• Home service available</li>
                        <li>• Studio bookings accepted</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artist.portfolio.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage(index + 1)}
                    >
                      <img
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-xl flex items-center justify-center">
                        <PhotoIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {mockReviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-rose-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                            {review.customerName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h4 className="font-semibold text-gray-800">{review.customerName}</h4>
                              {review.verified && (
                                <CheckBadgeIcon className="w-5 h-5 text-green-500 ml-2" />
                              )}
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <StarSolid
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Similar Artists Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">
              Similar Artists You Might Like
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artists
                .filter(a => 
                  a.id !== artist.id && 
                  a.categoryIds.some(catId => artist.categoryIds.includes(catId)) &&
                  a.location === artist.location
                )
                .slice(0, 3)
                .map((similarArtist, index) => (
                  <motion.div
                    key={similarArtist.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={similarArtist.profileImage}
                        alt={similarArtist.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{similarArtist.name}</h4>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {similarArtist.location}
                        </div>
                        <div className="flex items-center">
                          <StarSolid className="w-4 h-4 text-yellow-400" />
                          <span className="ml-1 text-sm font-semibold">{similarArtist.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{similarArtist.bio}</p>
                    <div className="flex gap-2">
                      <Link
                        href={`/artist/${similarArtist.id}`}
                        className="flex-1 text-center py-2 px-4 border border-gray-200 text-gray-700 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors text-sm"
                      >
                        View Profile
                      </Link>
                      <Link
                        href={`/book/${similarArtist.id}`}
                        className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-lg hover:shadow-md transition-all text-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}