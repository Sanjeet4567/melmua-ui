'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const footerLinks = {
    services: [
      { name: 'Bridal Makeup', href: '/category/bridal' },
      { name: 'Party & Glam', href: '/category/party-glam' },
      { name: 'Editorial Makeup', href: '/category/fashion-editorial' },
      { name: 'Everyday Looks', href: '/category/casual-everyday' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Artists', href: '/artists' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="font-playfair text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 inline-block">
                Melmua
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your premier destination for professional makeup artistry. 
                Connecting you with verified makeup artists who bring your 
                beauty vision to life for every special occasion.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">Mumbai, Delhi, Bangalore & 15+ cities</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-300">hello@melmua.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <SparklesIcon className="w-5 h-5 text-pink-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-1">500+</div>
              <div className="text-gray-300 text-sm">Verified Artists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">10K+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
                <span className="text-2xl font-bold text-yellow-400">4.9</span>
              </div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-400 mb-1">15+</div>
              <div className="text-gray-300 text-sm">Cities</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Melmua. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-pink-400 mx-2" />
            <span>for beauty enthusiasts</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}