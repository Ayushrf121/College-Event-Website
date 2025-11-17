import React from 'react'
import upcomingEventsDesc from '@/component/EMS-JSON/upcomingEventsDesc.json'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, MapPin } from 'lucide-react'

export default async function WeekEvents({ params }) {
    // Await params then we'll parse it to int
    const { id } = await params

    // Convert id to number since JSON ids are numbers
    const eventDesc = upcomingEventsDesc.find(f => f.id === parseInt(id))

    if (!eventDesc) return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 to-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">No event found!</h1>
                <p className="text-gray-400 mb-6">Event with ID {id} does not exist.</p>
                <Link href='/' className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-black text-white">
            {/* Back Button */}
            <div className="max-w-4xl mx-auto pt-8 px-8">
                <Link href='/' className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Events</span>
                </Link>
            </div>

            {/* Main Content */}
            <section className="max-w-4xl mx-auto px-8 py-8">
                {/* Title Section with gradient border */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {eventDesc.title}
                    </h1>
                    <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                {/* Event Meta Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur px-4 py-2 rounded-lg border border-purple-500/20">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-gray-300">October 2025</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur px-4 py-2 rounded-lg border border-purple-500/20">
                        <Users className="w-5 h-5 text-pink-400" />
                        <span className="text-sm text-gray-300">College Event</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur px-4 py-2 rounded-lg border border-purple-500/20">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-300">Campus</span>
                    </div>
                </div>

                {/* Description Card */}
                <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition shadow-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-300">About This Event</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                            {eventDesc.description}
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}