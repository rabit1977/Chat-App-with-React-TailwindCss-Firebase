import React from 'react';
import Chat from '../components/chat/Chat';

import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='bg-gradient-to-l from-teal-600 to-teal-50 h-screen flex items-center justify-center'>
      <div className='w-4/6 max-w-3xl flex h-4/6 border border-teal-500 ring ring-teal-600 ring-offset-8 ring-offset-white shadow-teal-700 bg-white shadow-md rounded-xl overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
