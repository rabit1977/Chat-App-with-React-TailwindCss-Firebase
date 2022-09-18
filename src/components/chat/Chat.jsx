import React from 'react';
import Input from './Input';
import Messages from './messages/Messages';

const Chat = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex border-b h-14 p-2 '>
        <span>John</span>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
