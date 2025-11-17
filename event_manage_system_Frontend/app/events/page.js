"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Filter } from "lucide-react";
import eventsData from '@/component/EMS-JSON/allEvents.json'
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hackathon", "Cultural", "Sports", "Career"];

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title
      .toLowerCase()
    return matchesCategory && matchesSearch;
  });
  const router = useRouter();
  const handleInput = (id) =>{
      // console.log(id,"YEEEEEEEE");
      router.push(`/weekevents/${id}`);
  }
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0118] to-[#1b0630] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-3">
            Explore All Events
          </h1>
          <p className="text-gray-300">
            Discover all upcoming college events and never miss out on the fun!
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          
          {/* Category Dropdown */}
          <div className="flex items-center gap-3">
            <Filter className="text-pink-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#120626] border border-purple-500/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#18092c]/80 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs text-pink-400 font-semibold uppercase tracking-wide">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <button onClick={()=>handleInput(event.id)} className="mt-4 bg-linear-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white px-4 py-2 rounded-lg w-full transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-400"

              >
                No events found matching your filters.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
