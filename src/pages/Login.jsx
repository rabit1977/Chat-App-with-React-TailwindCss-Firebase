import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-slate-100'>
      <div className='flex flex-col border shadow-sm items-center rounded-md space-y-3 py-8 px-4 bg-white'>
        <span className='text-2xl font-semibold'>Chat App</span>
        <span className='text-[#218CD8] font-bold tracking-wide'>Login</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
          <input
            required
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8] focus:border-[#218CD8]'
          />
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8] focus:border-blue-500'
          />
          <button className='bg-[#218CD8] text-white rounded-full p-1 hover:bg-[#0a5890]'>
            Sign in
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className='text-xs'>
          You don't have an account?{' '}
          <Link
            to='/register'
            className='text-[#218CD8] font-bold hover:text-[#218CD8]/70'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
