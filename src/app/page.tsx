'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import CategoriesSection from '@/components/CategoriesSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function HomePage() {
  const [showMobileNav, setShowMobileNav] = useState(false);
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
              <Link href="/artists" className="text-gray-700 hover:text-primary-600 transition-colors">Artists</Link>
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
                <Link href="/artists" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>Artists</Link>
                <Link href="/bookings" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>My Bookings</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-rose-400/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-playfair font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Beauty
                </span>
                <br />
                <span className="text-gray-800">Redefined</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Connect with verified professional makeup artists for every occasion. 
                From bridal elegance to editorial artistry, find your perfect beauty match.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  href="#categories"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-rose-500 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
                <Link 
                  href="/artists"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300"
                >
                  Find Artists
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <UsersIcon className="w-6 h-6 text-primary-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-800">500+</span>
                  </div>
                  <p className="text-sm text-gray-600">Verified Artists</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <StarIcon className="w-6 h-6 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-800">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <SparklesIcon className="w-6 h-6 text-rose-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-800">10K+</span>
                  </div>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-rose-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Professional makeup artist at work"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Floating cards */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">4.9 Rating</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-rose-500 text-white rounded-xl p-4 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="text-center">
                      <div className="text-sm font-semibold">500+</div>
                      <div className="text-xs">Artists</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}