import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import Heddy from '../../img/hedyLammarr.jpg';

const Navbar = () => {
  return (
    <div className='flex justify-between h-14 items-center px-2 py-1 w-full gap-8 border-b border-teal-400 '>
      <span className='font-bold uppercase text-lg'>Chat...</span>
      <div className='flex items-center gap-1'>
        <img
          src={Heddy}
          alt='logo'
          className='h-8 w-8 rounded-full ring-1 ring-white'
        />
        <span className='text-xs text-teal font-normal '>John</span>
        <button
          onClick={() => signOut(auth)}
          className='bg-teal-500 px-3 py-1 text-xs rounded-full text-[#F9FCFD] shadow-sm hover:bg-teal-600 hover:shadow-md'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
