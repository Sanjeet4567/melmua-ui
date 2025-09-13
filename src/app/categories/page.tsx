'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function CategoriesPage() {
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
              <Link href="/categories" className="text-primary-600 font-medium">Categories</Link>
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
                <Link href="/categories" className="block py-2 text-primary-600 font-medium" onClick={() => setShowMobileNav(false)}>Categories</Link>
                <Link href="/artists" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setShowMobileNav(false)}>Artists</Link>
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
                All Categories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of professional makeup services designed for every occasion and style preference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/category/${category.id}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{category.name}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-gray-800">Services Include:</h4>
                          {category.subcategories.slice(0, 3).map((sub) => (
                            <div key={sub.id} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                              {sub.name}
                            </div>
                          ))}
                          {category.subcategories.length > 3 && (
                            <div className="text-sm text-primary-600">
                              +{category.subcategories.length - 3} more services
                            </div>
                          )}
                        </div>

                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                          <span>Explore Category</span>
                          <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}