import React from "react"
import DashboardLayout from "./DashboardLayout"
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

import { Line } from 'react-chartjs-2'


const Dashboard = ({isCurrent, setIsCurrent }) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };

    return (
        <DashboardLayout isCurrent={isCurrent} setIsCurrent={setIsCurrent} >
            <div className="justify-center items-center flex bg-green-400 w-28 h-28 rounded-full m-auto p-5 text-3xl">
                10/10
            </div>
         <Line options={options} data={data} />
        </DashboardLayout>
    )
}

export default Dashboard