import React from 'react'

import featuredEvents from '../EMS-JSON/featuredEvents.json'
import Link from 'next/link';
import {Calendar, MapPin, Zap, Clock, UserPlus } from "lucide-react";
export default function HomeSection3() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Featured Events</h2>
                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    featuredEvents.map((data) => (
                        <div key={data.id} className="relative bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-purple-500/30 hover:border-purple-500/60 transition group">

                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                                {/* light translucent cover over the img div */}
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                            </div>
                            <div className='p-4'>
                                <span className='text-xs font-semibold text-purple-400 bg-purple-500/20 px-2 py-1 rounded'>
                                    {
                                        data.category
                                    }
                                </span>
                            </div>
                            <div className='ml-3'>
                                <h3 className="text-2xl font-bold mb-3">{data.title}</h3>
                            </div>
                            <div className='ml-3'>
                                <div className="flex items-center text-sm text-gray-300">
                                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                                    <span>{data.date}</span>
                                    <Clock className="w-4 h-4 ml-4 mr-2 text-purple-400" />
                                    <span>{data.time}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-300">
                                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                                    <span>{data.location}</span>
                                </div>
                            </div>
                            {/* next time we'll make it as a Link of nextjs */}
                            <div className='p-5'>
                                <Link href='/eventRegistration' className="w-full bg-linear-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition flex items-center justify-center space-x-2">
                                    <UserPlus className="w-5 h-5" />
                                    <span>Register Now</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
