import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
  const quizTopics = useLoaderData();
  // console.log(quizTopics);

  const { data } = quizTopics;
  // console.log(data);

  return (
    <div className='md:grid grid-cols-3 gap-6 mx-5 my-20'>
      {
        data.map(quizTopic => <QuizTopic
          key={quizTopic.id}
          quizTopic={quizTopic}
        ></QuizTopic>)
      }
    </div>
  );
};

export default Home;