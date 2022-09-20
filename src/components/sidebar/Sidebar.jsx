import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='flex flex-col text-teal-900 font-medium bg-teal-300 text-sm border-r border-teal-400 shadow-md relative min-w-max '>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
