import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { db } from '../../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, 'userChats', currentUser?.uid),
        (doc) => {
          setChats(doc.data());
        }
      );
      // terminate the onSnapshot
      return () => {
        unsub();
      };
    };
    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className='flex items-center space-x-2 p-2 hover:bg-teal-400/80'
          >
            <img
              src={chat[1].userInfo?.photoURL}
              alt=''
              className='h-10 w-10 rounded-full ring-1 ring-white'
            />
            <div className='flex flex-col text-xs'>
              <span>{chat[1].userInfo?.displayName}</span>
              <span>{chat[1].lastMessage?.text}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
