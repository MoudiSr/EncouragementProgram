import React from "react"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title);
  
  export const data = {
    labels: ['التربية الدينية', 'التنشئة المدنية', 'التربية الوطنية', 'الفنون والابداع', 'المهارات والهوايات الرياضية والحركية', 'العلاقات والقيم الاجتماعية والإنسانية', 'حماية البيئة والاهتمام بها', 'العلمي', 'الصحة والغذاء'],
    datasets: [
      {
        label: 'عدد الأنشطة',
        data: [12, 19, 18, 25, 10, 5, 8, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  export const data1 = {
    labels: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول","تشرين الأول", "تشرين الثاني", "كانون الأول"],
    datasets: [
      {
        label: 'نسبة الحضور في الأنشطة',
        data: [1, 2, 7, 9, 15, 20, 28, 40, 50, 66, 75, 80],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

const Statistics = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="border-2 p-6 m-2 rounded-md flex justify-center items-center border-gray-300 w-full h-auto lg:w-[60rem]">
                <Pie data={data} />
            </div>
            <div className="border-2 p-6 m-2 rounded-md flex justify-center items-center border-gray-300 w-full lg:w-[60rem] h-auto">
                <Line data={data1}/>
            </div>
        </div>
    )
}

export default Statistics