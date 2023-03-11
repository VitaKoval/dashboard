import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { nanoid } from "nanoid";

function ChartStats({ data, value }) {
  const colorsMapper = { green: "#3CDC86", blue: "#18A0FB", red: "#ED2D95" };

  return (
    <ResponsiveContainer width="90%" maxHeight={248}>
      <AreaChart
        data={data}
        margin={{
          top: 8,
          right: 23,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="1" />
        <Tooltip />

        {Object.keys(value).map((item) => {
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
    </ResponsiveContainer>
  );
}

export default ChartStats;
