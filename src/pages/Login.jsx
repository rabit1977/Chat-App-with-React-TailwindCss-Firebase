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
    <div className='flex h-screen items-center justify-center bg-teal-200  '>
      <div className='flex flex-col border shadow-lg items-center rounded-md space-y-3 py-8 px-2 bg-teal-200 ring ring-offset-8 ring-teal-700'>
        <span className='text-3xl font-bold text-teal-900'>Chat App</span>
        <span className='text-teal-900 font-bold tracking-wide'>Login</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
          <input
            required
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            className='border-b placeholder:text-teal-700 text-sm outline-none p-2 rounded-full hover:ring-1 ring-teal-900 placeholder'
          />
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            className='border-b placeholder:text-teal-700 text-sm outline-none p-2 rounded-full hover:ring-1 ring-teal-900'
          />
          <button className='bg-gradient-to-r from-teal-500 to-teal-700 hover:bg-gradient-to-l hover:from-teal-500 hover:to-teal-700 text-white rounded-full p-1 hover:bg-[#0a5890]'>
            Sign in
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className='text-xs text-teal-700'>
          You don't have an account?{' '}
          <Link
            to='/register'
            className='text-teal-700 font-bold hover:text-teal-900'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
