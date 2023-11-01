"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div>
          <Link href="/">
          <Image src="/images/logo.svg" alt="Rehab Fit" width={450} height={650} className='w-52' />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className=" font-semibold">Home</Link>
          <Link href="/" className="font-semibold">About Us</Link>
          <Link href="/" className="font-semibold">Our Offerings</Link>
          <Link href="/" className="text-[#0B577E] font-semibold flex items-center">
          <Image src="/images/whatapp.svg" alt="Rehab Fit" width={450} height={650} className='w-7' />
            +92 320 3588468
            </Link>
          <Link href="/" className="bg-[#0E9CD9]  px-4 py-2 rounded-md text-white text-[18px]">
          Consult now
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white w-full absolute top-14 left-0 right-0  py-10 px-4">
          <Link href="/#products" className="block py-2 hover:opacity-70">Home</Link>
          <Link href="/#industries" className="block py-2 hover:opacity-70">About Us</Link>
          <Link href="load-market" className="block  py-2 hover:opacity-70 pb-6">Our Offerings</Link>
          <Link href="/load-market" className="after:text-[#0B577E] py-2 font-semibold flex items-center">
          <Image src="/images/whatapp.svg" alt="Rehab Fit" width={450} height={650} className='w-7' />
            +92 320 3588468
          </Link>
          <Link href="/contact-us" className="bg-[#0E9CD9] px-4 py-2 mt-4 rounded-md text-white text-[18px]">
          Consult now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;