"use client";

import React from 'react';
import { Calendar, Users, Target, Award, TrendingUp, Heart } from 'lucide-react';
import Link from 'next/link';
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About College Events
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your ultimate platform for discovering, managing, and participating in college events
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 mb-8 border border-purple-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We aim to connect students with exciting opportunities and events happening across campus.
            Our platform makes it easy to discover hackathons, cultural fests, workshops, sports tournaments,
            and career fairs – all in one place. We believe every student should have equal access to
            opportunities that enhance their college experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 border border-purple-500/30 text-center">
            <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-gray-300">Events Hosted</p>
          </div>

          <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur rounded-xl p-6 border border-blue-500/30 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">10,000+</h3>
            <p className="text-gray-300">Active Students</p>
          </div>

          <div className="bg-linear-to-br from-pink-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 border border-pink-500/30 text-center">
            <Award className="w-12 h-12 text-pink-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-300">Partner Organizations</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Easy Event Discovery</h3>
                  <p className="text-gray-300">Browse all campus events in one place with smart filters and categories</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Registration</h3>
                  <p className="text-gray-300">Register for events instantly and manage all your registrations</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                  <p className="text-gray-300">Connect with peers who share similar interests and passions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                  <p className="text-gray-300">Get notifications about upcoming events and important updates</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Built by students, for students. We're a passionate team of developers and event enthusiasts
            working to make campus life more connected and exciting.
          </p>
          <Link href='/eventTeam' className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
            Join Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;