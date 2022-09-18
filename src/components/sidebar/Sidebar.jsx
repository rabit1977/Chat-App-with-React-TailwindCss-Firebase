import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='flex flex-col text-sm border-r relative min-w-max '>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
