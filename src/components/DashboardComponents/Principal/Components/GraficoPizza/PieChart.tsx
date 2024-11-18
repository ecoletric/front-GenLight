import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { aparelhoGeradorFinal } from '@/utils/types/types'; 

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  aparelhos: aparelhoGeradorFinal[];
}

const PieChart: React.FC<PieChartProps> = ({ aparelhos }) => {
  // Agrupar os dados por tipo
  const dataPorTipo = aparelhos.reduce((acc, aparelho) => {
    acc[aparelho.tipo] = (acc[aparelho.tipo] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  const chartData = {
    labels: Object.keys(dataPorTipo).map(key => `${key == '1'?'Solar':'Eolico'}`),
    datasets: [
      {
        data: Object.values(dataPorTipo),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    circumference: 360,
    radius:100,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 14
          }
        }
      }
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      }
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#ffffff'
        
      }
    },
  
  };
  return (
    <div className='w-auto h-full'>
      <Pie data={chartData} options={options}/>
    </div>

  );
};

export default PieChart;