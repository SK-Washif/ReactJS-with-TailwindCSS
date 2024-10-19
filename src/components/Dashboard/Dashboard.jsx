import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

  const marksArray = [
    { id: 1, name: "Alice", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Bob", physics: 67, chemistry: 82, math: 76 },
    { id: 3, name: "Charlie", physics: 90, chemistry: 88, math: 94 },
    { id: 4, name: "Diana", physics: 72, chemistry: 65, math: 80 },
    { id: 5, name: "Ethan", physics: 59, chemistry: 71, math: 68 },
    { id: 6, name: "Fiona", physics: 94, chemistry: 93, math: 96 },
    { id: 7, name: "George", physics: 88, chemistry: 79, math: 85 },
    { id: 8, name: "Hannah", physics: 76, chemistry: 81, math: 79 },
    { id: 9, name: "Ivan", physics: 64, chemistry: 72, math: 60 },
    { id: 10, name: "Julia", physics: 91, chemistry: 84, math: 89 },
    { id: 11, name: "Kyle", physics: 83, chemistry: 75, math: 87 },
    { id: 12, name: "Luna", physics: 69, chemistry: 77, math: 73 }
  ];
  

  return (
    <div>
      <LineChart width={500} height={300} data={marksArray}>

        <Line dataKey="physics"></Line>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />

      </LineChart>
    </div>
  );
};

export default Dashboard;