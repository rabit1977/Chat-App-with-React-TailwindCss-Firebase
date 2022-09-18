import React from 'react';
import Heddy from '../../img/hedyLammarr.jpg';

const Chats = () => {
  return (
    <div>
      <div className='flex items-center space-x-2 p-2 hover:bg-[#E6E7E8]'>
        <img src={Heddy} alt='' className='h-10 w-10 rounded-full' />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-[#E6E7E8]'>
        <img src={Heddy} alt='' className='h-10 w-10 rounded-full' />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-[#E6E7E8]'>
        <img src={Heddy} alt='' className='h-10 w-10 rounded-full' />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-[#E6E7E8]'>
        <img src={Heddy} alt='' className='h-10 w-10 rounded-full' />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
