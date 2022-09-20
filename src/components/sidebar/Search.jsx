import React from 'react';

const Search = () => {
  return (
    <div className='border-b border-teal-400 '>
      <div>
        <input
          type='text'
          placeholder='Find a user ...'
          className='h-8 p-2 shadow-sm outline-none text-xs font-normal w-full bg-teal-400 placeholder:text-teal-900'
        />
      </div>
    </div>
  );
};

export default Search;
