"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, User, Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import upcomingEventsDesc from '@/component/EMS-JSON/upcomingEventsDesc.json';

const Navbar = () => {
  const [userName,setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Search word on JSOn
  const [Search_Event, setSearch_Event] = useState('');
  
  //State for suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  
  const router = useRouter();

  useEffect(()=>{
    localStorage.getItem('loggedName')?setUserName(localStorage.getItem('loggedName')):setUserName('');
  },[])

  //Get suggestions based on search text
  const getSuggestions = (searchText) => {
    if (!searchText.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = upcomingEventsDesc.filter((event) => 
      event.title.toLowerCase().includes(searchText.toLowerCase())
    );
    
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  };

  //Handle input change and update suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch_Event(value);
    getSuggestions(value);
  };

  //Handle clicking on a suggestion
  const handleSuggestionClick = (event) => {
    setSearch_Event(event.title);
    setShowSuggestions(false);
    router.push(`/weekevents/${event.id}`);
  };

  //Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchHandler = () => {
    // console.log("Search ho gya!");
    const searchText = Search_Event.toLowerCase().trim();
    console.log(searchText);
    
    let found = false;
    for (let i = 0; i < upcomingEventsDesc.length; i++) {
      const data = upcomingEventsDesc[i];
      const jsonData = data.title.toLowerCase().trim();
      console.log(jsonData);
      
      if (!found && jsonData.includes(searchText)) {
        console.log("Search data id : ", data.id);
        router.push(`/weekevents/${data.id}`);
        found = true;
        setShowSuggestions(false); // ✅ Hide suggestions after navigation
        break;
      }
    }
    
    if (!found) {
      alert("No such event found!");
    }
  };

  // ✅ Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
      searchHandler();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-linear-to-r from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg">
              <Link href='/'><Calendar className="w-6 h-6 text-white" /></Link>
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hidden sm:block">
              <Link href='/'>College Events</Link>
            </span>
          </div>

          {/* Desktop Search Bar with Suggestions */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full" ref={searchRef}>
              <Search 
                onClick={searchHandler} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-purple-400 transition" 
              />
              <input
                type="text"
                value={Search_Event}
                placeholder="Search events, tags..."
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                onKeyUp={handleKeyPress}
                onFocus={() => Search_Event && getSuggestions(Search_Event)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              />
              
              {/*Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-purple-500/30 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">
                  {suggestions.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => handleSuggestionClick(event)}
                      className="px-4 py-3 hover:bg-purple-500/20 cursor-pointer border-b border-gray-700 last:border-b-0 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-purple-400 flex-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium truncate">{event.title}</p>
                          <p className="text-gray-400 text-sm truncate">
                            {event.description.substring(0, 80)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition"
            >
              <Search className="w-5 h-5 text-white" />
            </button>

            {/* User Profile */}
            <button className="p-2 group">
              <Link href='/profile' className='flex flex-col items-center'>
              <User className="w-8 h-8 text-white group-hover:text-purple-400 transition" />
              {
                userName ? <span className='text-white group-hover:text-purple-400 transition'>{userName}</span>:<></>
              }
              </Link>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar with Suggestions */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="relative" ref={searchRef}>
              <Search 
                onClick={searchHandler}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" 
              />
              <input
                type="text"
                value={Search_Event}
                placeholder="Search events, tags..."
                onChange={handleSearchChange}
                onKeyUp={handleKeyPress}
                onKeyDown={handleKeyPress}
                onFocus={() => Search_Event && getSuggestions(Search_Event)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
              
              {/*Mobile Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-purple-500/30 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
                  {suggestions.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => handleSuggestionClick(event)}
                      className="px-4 py-3 hover:bg-purple-500/20 cursor-pointer border-b border-gray-700 last:border-b-0"
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400 flex-0" />
                        <p className="text-white text-sm truncate">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            
            <Link href="/events" className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded-lg transition text-white">
              All Events
            </Link>
            <Link href="/about" className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded-lg transition text-white">
              About Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;