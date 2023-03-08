import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';



function ChartStats () {
    ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: false,
  },
};

const labels = ['01/2023', '02/2023'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
          label: 'Dataset 2',
          data: labels.map(()=> Number(5)),
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'red',
      backgroundColor: 'red',
      },
      {
      fill: true,
          label: 'Dataset 3',
          data: labels.map(()=> Number(6)),
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'white',
      backgroundColor: 'white',
      },
      {
      fill: true,
          label: 'Dataset 4',
          data: labels.map(()=> Number(7)),
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'green',
      backgroundColor: 'green',
    },
      {
      fill: true,
          label: 'Dataset 5',
          data: labels.map(()=> Number(0)),
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'black',
      backgroundColor: 'black',
    }
  ],
};


  return (<Line options={options} data={data} />)
}

export default ChartStats;

