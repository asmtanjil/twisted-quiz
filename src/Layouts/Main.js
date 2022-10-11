import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const DataContext = createContext('Hello');

const Main = () => {
  const quizTopics = useLoaderData();
  return (
    <DataContext.Provider value={quizTopics}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </DataContext.Provider>
  );
};

export default Main;