import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const QuizDetails = ({ detail }) => {
  const { question, options, correctAnswer } = detail;
  console.log(detail);

  return (
    <div className='my-12 mx-8 md:mx-48 p-2 bg-blue-200 rounded-xl'>
      <div className='flex justify-between'>
        <h2 className='my-8 text-2xl font-semibold'>Question: {question}</h2>
        <div>
          <button onClick={() => toast(correctAnswer)}>
            <EyeIcon className="h-6 w-6 text-blue-500" />
          </button>
        </div>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mx-4 md:mx-12'>
        {
          options.map((option, idx) => <Option
            key={idx}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>)
        }
      </div>

    </div>
  );
};

export default QuizDetails;