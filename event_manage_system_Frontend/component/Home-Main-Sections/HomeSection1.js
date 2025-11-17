import React from 'react'
import {ArrowRight} from "lucide-react";
import Link from 'next/link';
export default function HomeSection1() {
    return (
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Discover Campus Events
            </h1>
            <p className="text-gray-300 text-lg mb-6">
                Join amazing events, connect with peers, and make memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/events' className="bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition flex items-center justify-center space-x-2">
                    <span>Explore All Events</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    )
}
