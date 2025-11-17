"use client";

import React from 'react';
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20  py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">

          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="bg-linear-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">College Events</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Discover and register for college events easily.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-purple-400">Home</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-purple-400">All Events</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>events@college.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>College Campus</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 College Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;