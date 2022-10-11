import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {

  const quizDetails = useLoaderData()
  const details = quizDetails.data.questions;

  return (
    <div>
      {
        details.map(detail => <QuizDetails
          key={detail.id}
          detail={detail}
        ></QuizDetails>)
      }

    </div>
  );
};

export default Quiz;