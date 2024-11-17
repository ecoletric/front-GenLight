import Image from 'next/image';
import React from 'react';
import CardInfos from '../CardInfos/CardInfos';

type PrincipalProps = {
    idIndustria?: number;
  }

export default function Principal({idIndustria}: PrincipalProps) {
  
  const currentDate = new Date().toLocaleDateString();



  return (
    <div className='bg-white w-full h-full rounded-[36px] flex flex-col gap-5 p-3 shadow-lg'>
      <div className='flex justify-end items-center'>
        <Image src={'/calendar.svg'} alt='Calendario' width={30} height={30}></Image>
        <h1 className='text-black text-xl'>{currentDate}</h1>
      </div>
      <div className='flex flex-row gap-5'>
        <CardInfos image='/calendar.svg' alt='Imagem card geração diaria' titulo='Quanto Gerou no dia' Informacao='NadaPorEnquanto'/>
        <CardInfos image='/calendar.svg' alt='Imagem card melhor geração' titulo='Melhor Energia' Informacao='NadaPorEnquanto'/>
      </div>
      <div className='flex flex-row h-1/2 gap-5'>
        <div className='bg-red-200 flex-grow'>
          <h1>Gráfico de Geração Diária</h1>
          <div>
            {//Graficos de geração diaria
            }
          </div>
        </div>
        <div className='bg-red-200 flex-grow'>
          <h1>Porcentagens da Geração</h1>
          <div>
            {//Graficos de porcentagem
            }
          </div>
        </div>
      </div>
      <div>
        <h1>Media de Geração</h1>
        <div>
          {//Graficos de media de geração
          }
        </div>
      </div>
    </div>
  )
}