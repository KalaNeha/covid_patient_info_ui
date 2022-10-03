import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'District information',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Active Cases',
        data: [37444,37544,57444,77440,87444,47449,37478],
        borderColor: 'blue',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Closed Cases',
        data: [30444,37544,57444,77440,77444,87449,97478],
        borderColor: 'red',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Death',
        data: [37404,27544,7444,7440,7444,4449,3478],
        borderColor: 'green',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };

const LineChart = () => {
    return (  
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-5 mb-3 mt-3'>
                    <Line options={options} data={data} />;
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LineChart;