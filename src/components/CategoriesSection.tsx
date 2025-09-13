'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { useState } from 'react';

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary-600 to-rose-500 bg-clip-text text-transparent">
            Our Makeup Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional makeup services, 
            each crafted to bring out your unique beauty for every special moment.
          </p>
        </motion.div>

        {/* Featured Categories Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.filter(cat => cat.featured).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/category/${category.id}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{category.description}</p>
                    <div className="flex items-center text-sm font-medium">
                      <span>Explore</span>
                      <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Interactive Category Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-gray-800">
              Explore All Categories
            </h3>
            <p className="text-gray-600">
              Click on any category to discover its specialized services and expert artists
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Category List */}
            <div className="space-y-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory.id === category.id
                      ? 'bg-white shadow-lg border-2 border-primary-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{category.name}</h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                    <SparklesIcon className={`w-5 h-5 ${
                      selectedCategory.id === category.id ? 'text-primary-500' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Selected Category Details */}
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6"
            >
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h4 className="text-2xl font-bold mb-3 text-gray-800">
                {selectedCategory.name}
              </h4>
              <p className="text-gray-600 mb-6">{selectedCategory.description}</p>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-gray-800">Subcategories:</h5>
                {selectedCategory.subcategories.map((sub) => (
                  <div key={sub.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-800">{sub.name}</span>
                      <p className="text-sm text-gray-600">{sub.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/category/${selectedCategory.id}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-rose-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                View Artists
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}