import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
  const quizDetails = useLoaderData()
  const details = quizDetails.data.questions;
  const quizTopic = quizDetails.data;
  // console.log(quizDetails);

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <h1 className='text-3xl font-semibold bg-violet-200 mt-8 py-4'>Quiz Of {quizTopic.name}</h1>
      {
        details.map(detail => <QuizDetails
          key={detail.id}
          detail={detail}
          notify={notify}
        ></QuizDetails>)
      }
      <ToastContainer />
    </div>
  );
};

export default Quiz;