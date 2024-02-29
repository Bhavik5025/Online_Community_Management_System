'use client';
// Import necessary dependencies
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Events from './components/events';
import Posts from './components/posts';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout() {
  // State to store the selected navbar option
  const [navbar, setNavbar] = useState('posts');
  // State to store the community name from localStorage
  const [communityName, setCommunityName] = useState('');

  // useEffect to get communityName from localStorage on component mount
  useEffect(() => {
    // Check if localStorage is available (for client-side rendering)
    if (typeof window !== 'undefined') {
      const storedCommunityName = localStorage.getItem('otherCommunity');
      setCommunityName(storedCommunityName || 'Default Community');
    }
  }, []);

  // Function to render the appropriate component based on the selected navbar option
  const renderComponent = () => {
    switch (navbar) {
      case 'events':
        return <Events />;
      case 'posts':
        return <Posts />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-1 font-poppins">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 1a9 9 0 017.993 12.79l5.727 5.727-1.414 1.414-5.727-5.727A9 9 0 1110 1zm0 2a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">{communityName}</h1>
        </div>
        <div className="flex items-center">
          {/* Use a button or a div for better accessibility */}
          <button
            className={`text-gray-300 ${navbar === 'events' ? 'text-white font-bold' : 'hover:text-white'} transition duration-300 transform hover:scale-110 mr-8`}
            onClick={() => setNavbar('events')}
          >
            Events
          </button>
          <button
            className={`text-gray-300 ${navbar === 'posts' ? 'text-white font-bold' : 'hover:text-white'} transition duration-300 transform hover:scale-110`}
            onClick={() => setNavbar('posts')}
          >
            Posts
          </button>
        </div>
      </nav>

      {/* Render the selected component */}
      {renderComponent()}
    </div>
  );
}
