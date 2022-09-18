import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 text-sm border-r border-[#218CD8] shadow-md relative min-w-max '>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
