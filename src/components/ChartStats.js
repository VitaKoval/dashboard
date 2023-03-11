import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const chartData = [
//   {
//     blue: 8,
//     red: 6,
//     green: 4,
//     date: "2023-02-08",
//   },
//   {
//     blue: 5,
//     red: 3,
//     green: 2,
//     date: "2023-02-09",
//   },
//   {
//     blue: 9,
//     red: 7,
//     green: 3,
//     date: "2023-02-10",
//   },
//   {
//     blue: 29,
//     red: 27,
//     green: 24,
//     date: "2023-02-11",
//   },
//   {
//     blue: 15,
//     red: 13,
//     green: 10,
//     date: "2023-02-12",
//   },
//   {
//     blue: 11,
//     red: 9,
//     green: 7,
//     date: "2023-02-13",
//   },
//   {
//     blue: 22,
//     red: 20,
//     green: 17,
//     date: "2023-02-14",
//   },
//   {
//     blue: 8,
//     red: 7,
//     green: 4,
//     date: "2023-02-15",
//   },
//   {
//     blue: 19,
//     red: 17,
//     green: 13,
//     date: "2023-02-16",
//   },
//   {
//     blue: 17,
//     red: 12,
//     green: 14,
//     date: "2023-02-17",
//   },
//   {
//     blue: 7,
//     red: 4,
//     green: 6,
//     date: "2023-02-18",
//   },
// ];

function ChartStats({data}) {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={903}
      height={248}
      data={data}
      margin={{
        top: 8,
        right: 23,
        left: 17,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="1" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="green"
        stackId="1"
        dot={{ stroke: "green", strokeWidth: 5 }}
        stroke="#1BBA64"
        fill="#3CDC86"
      />
      <Area
        type="monotone"
        dataKey="red"
        stackId="1"
        dot={{ stroke: "red", strokeWidth: 5 }}
        stroke="#ED2D95"
        fill="#ED2D95"
      />
      <Area
        type="monotone"
        dataKey="blue"
        stackId="1"
        dot={true}
        strokeWidth={2}
        stroke="#z0F81CE"
        fill="#0F81CE"
      />
    </AreaChart>
    // </ResponsiveContainer>
  );
}

export default ChartStats;
