import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function PieChartStats() {
    const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return (<PieChart width={232} height={232}>
        <Pie
          data={data}
        //   cx={232}
        //   cy={232}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={8}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>)
}

export default PieChartStats;