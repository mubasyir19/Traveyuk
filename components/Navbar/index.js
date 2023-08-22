import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 md:px-16 ${
        hasScrolled ? 'transition-all bg-black bg-opacity-70' : 'transition-all'
      }`}
    >
      <div className='flex justify-between relative p-4'>
        <Link href='/' className='text-4xl text-white'>
          Travyuk
        </Link>
        <div className='hidden md:flex md:my-auto md:space-x-7 text-white'>
          <Link href='#' className='hover:underline hover:underline-offset-4'>
            Home
          </Link>
          <Link href='#' className='hover:underline hover:underline-offset-4'>
            Featured
          </Link>
          <Link href='#' className='hover:underline hover:underline-offset-4'>
            Service
          </Link>
          <Link href='#' className='hover:underline hover:underline-offset-4'>
            Contact Us
          </Link>
        </div>
        <div className='hidden md:flex text-white'>
          <Link href='#' className='py-3 px-6 rounded-lg'>
            Sign In
          </Link>
          <Link href='#' className='py-3 px-6 rounded-lg bg-blue-700 hover:bg-blue-600'>
            Sign Up
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenuOpen} className=''>
            <svg className='h-10 w-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute inset-0'>
              <div className='bg-black bg-opacity-80 p-6 space-y-3 text-right'>
                <button onClick={toggleMenuOpen} className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-10 h-10 text-white text-right'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </button>
                <Link href='#' className='block text-lg text-white text-center'>
                  Home
                </Link>
                <Link href='#' className='block text-lg text-white text-center'>
                  Featured
                </Link>
                <Link href='#' className='block text-lg text-white text-center'>
                  Service
                </Link>
                <Link href='#' className='block text-lg text-white text-center'>
                  About Us
                </Link>
                <div className='flex justify-center text-white'>
                  <Link href='#' className='py-3 px-6 rounded-lg'>
                    Sign In
                  </Link>
                  <Link href='#' className='py-3 px-6 rounded-lg bg-blue-700 hover:bg-blue-600'>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
