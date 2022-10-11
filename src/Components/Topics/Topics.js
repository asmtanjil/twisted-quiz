import React, { useContext } from 'react';
import { DataContext } from '../../Layouts/Main';
import QuizTopic from '../QuizTopic/QuizTopic';

const Topics = () => {
  const quizData = useContext(DataContext)
  const data = quizData.data;
  // console.log(data)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-8 md:mx-48 my-20'>
        {
          data.map(quizTopic => <QuizTopic
            key={quizTopic.id}
            quizTopic={quizTopic}
          ></QuizTopic>)
        }
      </div>
    </div>

  );
};

export default Topics;