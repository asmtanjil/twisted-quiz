import React, { useContext } from 'react';
import { DataContext } from '../../Layouts/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const quizDataObj = useContext(DataContext)
  const quizData = quizDataObj.data;

  return (
    <div>
      <h2>Statistics</h2>
      <LineChart width={500} height={400} data={quizData}>
        <Line type="monotone" dataKey="name" stroke="#82ca9d" />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;