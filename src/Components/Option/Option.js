import React from 'react';

const Option = ({ option }) => {
  console.log(option)

  return (

    <div className='flex flex-start gap-4 p-2 border-2 border-blue-200 bg-lime-100 rounded-lg'>
      <button>
        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

      </button>
      <p className='text-xl'>Answer {option}</p>
    </div>
  );
};

export default Option;