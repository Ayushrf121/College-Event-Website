"use client";

import { useState } from "react";
import { User, Mail, Phone, BookOpen } from "lucide-react";
import { handleError, handleSuccess } from "@/component/Util";
import { ToastContainer } from "react-toastify";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const courses = [
    "Computer Science",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Other"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.phone || !formData.course)
    {
      return handleError("Can't submit — all fields required!");
    }
    
    console.log("Form submitted:", formData);
    try {
      const response = await fetch('https://college-event-website.onrender.com/registration/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    
    if (result.success) {
      handleSuccess(result.message);
      
      // form clear
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: ""
      });
    } else {
      handleError(result.message);
    }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0118] to-[#1b0630] text-white flex items-center justify-center px-4 py-16">
      <ToastContainer/>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-3">
            Registration
          </h1>
          <p className="text-gray-300">
            Fill in your details to register
          </p>
        </div>

        <div className="bg-[#18092c]/80 rounded-2xl p-8 border border-purple-500/20">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-[#120626] border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#120626] border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-[#120626] border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Course
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-[#120626] border border-purple-500/30 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Select your course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-all mt-6"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
