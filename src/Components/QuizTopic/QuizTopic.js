import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
  const { id, name, logo } = quizTopic;
  // console.log(quizTopic);


  const navigate = useNavigate()
  const HandleAddToDetails = () => {
    navigate(`/quizTopic/${id}`)
  }

  return (
    <div className='border-2 border-slate-500 rounded-lg'>

      <div className='bg-blue-50 m-1'>
        <img src={logo} alt="" />
      </div>

      <div>
        <h2 className='text-2xl my-2'>{name}</h2>
        <button onClick={HandleAddToDetails} className='bg-blue-600 w-full py-2 text-xl text-white font-semibold'>Show DeTail</button>
      </div>

    </div>
  );
};

export default QuizTopic;