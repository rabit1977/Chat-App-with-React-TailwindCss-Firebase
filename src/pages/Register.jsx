import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddIcon } from '../img/icons';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/login');
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className='flex h-screen items-center justify-center bg-slate-100'>
      <div className='flex flex-col border shadow-sm items-center rounded-md space-y-3 py-8 px-4 bg-white w-[240px]'>
        <span className='text-2xl font-semibold'>Chat App</span>
        <span className='text-[#218CD8] font-bold tracking-wide'>Register</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
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
            onSubmit={handleSubmit}
            type='password'
            placeholder='password'
            className='border-b placeholder:text-slate-500 text-sm outline-none p-2 hover:rounded-full hover:bg-[#E6E7E8]'
          />
          <input required type='file' id='file' className='hidden' />
          <label htmlFor='file' className='flex gap-2 items-center'>
            <AddIcon />
            <span className='text-xs'>Add an avatar</span>
          </label>
          <button
            disabled={loading}
            className='bg-[#218CD8] text-white rounded-full p-1 hover:bg-[#0a5890]'
          >
            Sign up
          </button>
          {loading && 'Uploading and compressing the image please wait...'}
          {err && <span>Something went wrong</span>}
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

export default Register;
