'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '@/component/Util';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const handleSignup = async (e) => {
    e.preventDefault()

    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Either email or password not written");
    }
    try {
      const url = 'http://localhost:8080/auth/login';
      const responce = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(loginInfo)
      })
      // console.log(responce);
      const result = await responce.json();
      const { message, email: userEmail,name, success } = result;
      if (success) {
        handleSuccess(`${message}\nEmail: ${userEmail}\nName: ${name}`);
        
        localStorage.setItem('loggedName', name);
        localStorage.setItem('loggedEmail',userEmail);
        
        setLoginInfo({
          email: '',
          password: ''
        })
        setTimeout(() => 
          router.push("/profile"), 3000);
      } else {
        handleError(message);
      }

    } catch (error) {
      handleError(error)
    }
    // console.log('Login data:', loginInfo);
    setLoginInfo({
      email: '',
      password: ''
    })
  }
  const handleInput = (e) => {
    const { name, value } = e.target;

    setLoginInfo({ ...loginInfo, [name]: value });

  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20">
          <form onSubmit={handleSignup} className="space-y-5">

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name='email'
                value={loginInfo.email}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name='password'
                value={loginInfo.password}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <Link href="/profile/signup" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}