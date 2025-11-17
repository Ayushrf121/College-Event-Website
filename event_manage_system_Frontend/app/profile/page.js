"use client"
import React, { useState, useEffect } from 'react'
import { LogOut, User, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { handleSuccess } from '@/component/Util';
import { ToastContainer } from 'react-toastify';

export default function ProfilePage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  const router = useRouter();
  
  useEffect(()=>{
    setUserName(localStorage.getItem('loggedName'));
    setUserEmail(localStorage.getItem('loggedEmail'));
    
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('loggedName')
    localStorage.removeItem('loggedEmail');
    userName ? handleSuccess("Logout Successful") : handleSuccess("Redirecting to the Login page");
    setTimeout(() => {
      router.push('/profile/login');
    }, 3000); 

  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black flex items-center justify-center px-4 py-12">
      <ToastContainer/>
      <div className="w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Your Profile
          </h1>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20">
          
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{userName || "User Name"}</h2>
          </div>

          {/* Info Card */}
          <div className="mb-8">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Address</p>
                <p className="text-white font-medium">{userEmail || "none"}</p>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full bg-gray-900/50 border border-gray-700 py-3 rounded-lg font-semibold text-gray-300 hover:border-red-500/50 hover:text-red-400 transition flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            {
              userName? "Logout" : "login"
            }
          </button>
        </div>

      </div>
    </div>
  )
}