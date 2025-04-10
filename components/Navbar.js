import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-5 items-center pt-2 flex-wrap sticky top-0 backdrop-blur-3xl w-full'>
      <div className='text-2xl w-full md:w-auto mb-2 md:mb-0'>
        <Link href='/'>
          Bit<span className='text-blue-500 font-bold'>Notes</span>
        </Link>
      </div>

      <ul className='flex gap-4 text-xl justify-center items-center w-full md:w-auto'>
        <Link href='/'>
          <li className='relative text-xl cursor-pointer before:content-[""] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full hover:text-blue-500'>
            Home
          </li>
        </Link>
        <Link href='/about'>
          <li className='relative text-xl cursor-pointer before:content-[""] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full hover:text-blue-500'>
            About
          </li>
        </Link>
        <Link href='/makenow'>
          <li className='relative text-xl cursor-pointer before:content-[""] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full hover:text-blue-500'>
            Try
          </li>
        </Link>
        <li className='gap-4 flex justify-center items-center'>
          <Link target="_blank" href="https://github.com/VinayKumar1510">
            <button className='p-0.5 relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
              <div className='px-4 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent'>
                GitHub
              </div>
            </button>
          </Link>
          
        </li>
          <li className='flex justify-center items-center'>
            <UserButton/>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;