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
import {nanoid} from 'nanoid';

function ChartStats({ data, value }) {
  const colorsMapper = {green: "#3CDC86", blue: "#18A0FB", red: "#ED2D95"}

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
      
      {Object.keys(value).map((item) => {
        // console.log(value);

        if (value[item]) {
          return (
            <Area
              key={nanoid()}
              type="monotone"
              dataKey={item}
              stackId="1"
              dot={{ stroke: colorsMapper[item], strokeWidth: 5 }}
              stroke={colorsMapper[item]}
              fill={colorsMapper[item]}
            />
          );
        }
        return;
      })}
    </AreaChart>
    // </ResponsiveContainer>
  );
}

export default ChartStats;
