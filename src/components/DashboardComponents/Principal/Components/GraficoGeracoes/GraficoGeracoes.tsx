// src/components/DashboardComponents/Principal/Components/GraficoGeracoes/GraficoGeracoes.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { aparelhoGeradorFinal, maquinaFinal } from '@/utils/types/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

type GraficoGeracoesProps = {
  maquinas: maquinaFinal[];
  aparelhos: aparelhoGeradorFinal[];
};

const GraficoGeracoes = ({ maquinas, aparelhos }: GraficoGeracoesProps) => {
  // Preparar os dados para o gráfico
  const consumoMaquinas = maquinas.reduce((acc, maquina) => acc + maquina.consumo, 0);
  const geracaoSolar = aparelhos
    .filter((aparelho) => aparelho.tipo === 1) // Supondo que tipo 1 é Solar
    .reduce((acc, aparelho) => acc + aparelho.potencia, 0);
  const geracaoEolica = aparelhos
    .filter((aparelho) => aparelho.tipo === 2) // Supondo que tipo 2 é Eólico
    .reduce((acc, aparelho) => acc + aparelho.potencia, 0);

  const data = {
    labels: ['Consumo Máquinas', 'Geração Solar', 'Geração Eólica'],
    datasets: [
      {
        label: 'Energia (kWh)',
        data: [consumoMaquinas, geracaoSolar, geracaoEolica],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Consumo e Geração de Energia',
      },
    },
  };

  return (
    <div className='w-full h-auto max-h-80'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoGeracoes;