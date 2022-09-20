import React from 'react';
import Heddy from '../../img/hedyLammarr.jpg';

const Chats = () => {
  return (
    <div>
      <div className='flex items-center space-x-2 p-2 hover:bg-teal-400/80'>
        <img
          src={Heddy}
          alt=''
          className='h-10 w-10 rounded-full ring-1 ring-white'
        />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-teal-400/80'>
        <img
          src={Heddy}
          alt=''
          className='h-10 w-10 rounded-full ring-1 ring-white'
        />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-teal-400/80'>
        <img
          src={Heddy}
          alt=''
          className='h-10 w-10 rounded-full ring-1 ring-white'
        />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-teal-400/80'>
        <img
          src={Heddy}
          alt=''
          className='h-10 w-10 rounded-full ring-1 ring-white'
        />
        <div className='flex flex-col text-xs'>
          <span>John</span>
          <span>my message</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
