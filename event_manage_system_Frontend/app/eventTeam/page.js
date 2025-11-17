"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function JoinTeamPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0118] to-[#1b0630] text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <Users className="w-20 h-20 text-pink-400 mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-4">
          Join Our Team
        </h1>
        
        <p className="text-xl text-gray-300 mb-6">
          No positions available right now
        </p>
        
        <div className="bg-[#18092c]/80 rounded-xl p-8 border border-purple-500/20">
          <p className="text-gray-400">
            We're not currently recruiting, but we'd love to have you in the future! 
            Check back soon for exciting opportunities to join our team.
          </p>
        </div>
      </motion.div>
    </div>
  );
}