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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']

  const data = {
    labels,
    datasets: [
      {
        label: 'Active Cases',
        data: [37444,37544,57444,77440,87444,47449,37478],
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Closed Cases',
        data: [30444,37544,57444,77440,77444,87449,97478],
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: 'Death',
        data: [37404,27544,7444,7440,7444,4449,3478],
        borderColor: 'green',
        backgroundColor: 'green',
      }
    ],
  };

const LineChart = () => {
    return (  
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-5 mb-3 mt-3' style={{width:1000, margin:20, padding:56}}>
                    <Line options={options} data={data}/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LineChart;