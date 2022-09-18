import React from 'react';

const Search = () => {
  return (
    <div className='border-b '>
      <div>
        <input
          type='text'
          placeholder='Find a user ...'
          className='h-8 p-2 shadow-sm outline-none w-full placeholder:text-slate-500/90'
        />
      </div>
    </div>
  );
};

export default Search;
