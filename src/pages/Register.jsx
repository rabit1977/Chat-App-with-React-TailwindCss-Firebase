import React from 'react';
import { Link } from 'react-router-dom';
import Heddy from '../img/hedyLammarr.jpg';
import { AddIcon } from '../img/icons';

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-slate-100'>
      <div className='flex flex-col border shadow-sm items-center rounded-md space-y-3 py-8 px-4 bg-white w-[240px]'>
        <span className='text-2xl font-semibold'>Chat App</span>
        <span className='text-[#218CD8] font-bold tracking-wide'>Register</span>
        <form className='flex flex-col space-y-6'>
          <input
            required
            type='text'
            placeholder='display name'
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8] focus:border-[#218CD8]'
          />
          <input
            required
            type='email'
            placeholder='email'
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8] focus:border-[#218CD8]'
          />
          <input
            required
            type='password'
            placeholder='password'
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8] focus:border-blue-500'
          />
          <input required type='file' id='file' className='hidden' />
          <label htmlFor='file' className='flex gap-2 items-center'>
            <AddIcon />
            <span className='text-xs'>Add an avatar</span>
          </label>
          <button className='bg-[#218CD8] text-white rounded-full p-1 hover:bg-[#0a5890]'>
            Sign up
          </button>
        </form>
        <p className='text-xs'>
          You do have an account?{' '}
          <Link
            to='/login'
            className='text-[#218CD8] font-bold hover:text-[#218CD8]/70'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
