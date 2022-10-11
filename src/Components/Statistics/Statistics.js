import React, { useContext } from 'react';
import { DataContext } from '../../Layouts/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const quizDataObj = useContext(DataContext)
  const quizData = quizDataObj.data;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={350}
        height={300}
        data={quizData}
        margin={{
          top: 60,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="name" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Statistics;