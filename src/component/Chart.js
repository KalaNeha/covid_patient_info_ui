import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

//  const data =
//   [{
//     name: "India",
//     Active: 4000,
//     Deaths: 2400,
//     amt: 2400
//   },
//   {
//     name: "USA",
//     Active : 3000,
//     Deaths: 1398,
//     amt: 2210
//   },
//   {
//     name: "Pakistan",
//     Active : 2000,
//     Deaths: 9800,
//     amt: 2290
//   },
//   {
//     name: "South Korea",
//     Active : 2780,
//     Deaths: 3908,
//     amt: 2000
//   },
//   {
//     name: "Japan",
//     Active : 1890,
//     Deaths: 4800,
//     Recovered: 2181
//   }
// ];

export default function App({data}) {
  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 100,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Active" fill="#82ca9d" />
      <Bar dataKey="Deaths" fill="#e8a4a4" />
    </BarChart>
  );
}
