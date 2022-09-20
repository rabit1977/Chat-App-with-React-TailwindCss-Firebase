import React from 'react';
import { AddPeopleIcon, CameraIcon, MoreIcon } from '../../img/icons';
import Input from './Input';
import Messages from './messages/Messages';

const Chat = () => {
  return (
    <div className='flex flex-col w-full text-teal-500 font-medium text-sm'>
      <div className='flex justify-between items-center border-b border-teal-400  h-14 p-2 '>
        <span>John</span>
        <div className='flex items-center gap-2'>
          <CameraIcon className='h-3.5 w-6' />
          <AddPeopleIcon />
          <MoreIcon className='w-4' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
