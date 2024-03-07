'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import './globals.css';

import { ThemeProvider } from 'next-themes';
import { redirect } from 'next/navigation';

export default function Home() {
  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      const isAdmin = localStorage.getItem('admin');
      if (isAdmin) {
        redirect('/admin');
      } else {
        const isStudent = localStorage.getItem('student');
        if (isStudent) {
          redirect('/student');
        } else {
          redirect('/landing');
        }
      }
    }
  }, []); // Empty dependency array to run the effect only once

  return ( <ThemeProvider enableSystem={true} attribute='class'><h3>Welcome to our application</h3>;
</ThemeProvider>);
}
