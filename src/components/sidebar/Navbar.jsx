import React from 'react';
import Heddy from '../../img/hedyLammarr.jpg';

const Navbar = () => {
  return (
    <div className='flex justify-between h-14 items-center px-2 py-1 w-full gap-8 border-b shadow-sm'>
      <span className='font-semibold'>Chat</span>
      <div className='flex items-center gap-1'>
        <img src={Heddy} alt='logo' className='h-8 w-8 rounded-full' />
        <span className='text-xs text-[#5C6C79] '>John</span>
        <button className='bg-[#218CD8] px-3 py-1 text-xs rounded-full text-[#F9FCFD] shadow-sm hover:bg-[#0e77cc] hover:shadow-md'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
