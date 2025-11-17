'use client'

import { useState } from 'react'
import Link from 'next/link'
import { handleError, handleSuccess } from '@/component/Util';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default function SignupPage() {
  const router = useRouter();
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Either name or email or password not written!");
    }

    try {
      const url = 'http://localhost:8080/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();
      const { message, success, error } = result;

      if (success) {
        handleSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => router.push("/profile/login"), 3000);
      } else if (error) {
        handleError(error);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black flex items-center justify-center px-4">
      <ToastContainer/>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Sign Up
          </h1>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={signupInfo.name}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={signupInfo.email}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={signupInfo.password}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/profile/login" className="text-purple-400 hover:text-purple-300 font-semibold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
