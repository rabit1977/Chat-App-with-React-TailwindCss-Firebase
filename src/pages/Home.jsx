import React from 'react';
import Chat from '../components/chat/Chat';

import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='bg-slate-50 h-screen flex items-center justify-center '>
      <div className='w-4/6 max-w-3xl flex h-4/6 border border-[#218CD8] bg-white shadow-md rounded-lg overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
