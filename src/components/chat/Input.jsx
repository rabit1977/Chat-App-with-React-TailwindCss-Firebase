import React from 'react';
import Heddy from '../../img/hedyLammarr.jpg';

const Input = () => {
  return (
    <div className='flex justify-between p-2 border-t '>
      <input
        type='text'
        placeholder='Type something...'
        className='flex flex-1  outline-none text-sm '
      />
      <div className='flex gap-2 items-center'>
        <img src='' alt='' />
        <input type='file' className='hidden' />
        <label htmlFor='file'>
          <img src={Heddy} alt='' className='w-8 h-8 rounded-full' />
        </label>
        <button className='bg-[#218CD8] px-3 py-1 text-sm rounded-full text-[#F9FCFD] shadow-sm hover:bg-[#0e77cc] hover:shadow-md'>
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
