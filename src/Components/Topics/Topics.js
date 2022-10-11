import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Topics = () => {
  const data = [
    {
      name: "Page A",
      marks: 60,
      quiz: 20,
      amt: 2400
    },
    {
      name: "Page B",
      marks: 60,
      quiz: 29,
      amt: 2210
    },
    {
      name: "Page C",
      marks: 50,
      quiz: 8,
      amt: 2290
    },
    {
      name: "Page D",
      marks: 60,
      quiz: 50,
      amt: 2000
    },
    {
      name: "Page E",
      marks: 50,
      quiz: 8,
      amt: 2181
    },
    {
      name: "Page F",
      marks: 30,
      quiz: 45,
      amt: 2500
    },
    {
      name: "Page G",
      marks: 60,
      quiz: 10,
      amt: 2100
    }
  ];

  return (
    <div>
      <h2>Topics</h2>
      <LineChart width={500} height={400} data={data}>
        <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
        <Line type="monotone" dataKey="quiz" stroke="#8884d8" activeDot={{ r: 8 }} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>

  );
};

export default Topics;