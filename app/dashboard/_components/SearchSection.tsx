import React from 'react';
import { Search } from 'lucide-react';

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700
    to-blue-600 flex flex-col justify-center items-center text-white text-center'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>

      <p className='mt-2'>What would you like to create today?</p>

      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-3 border rounded-md 
        bg-white my-5 w-full max-w-md shadow-md'>
          <Search className='text-gray-500' />
          <input 
            type='text' 
            placeholder='Search' 
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full text-black placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />

        </div>
      </div>
    </div>
  );
}

export default SearchSection;
