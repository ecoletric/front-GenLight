"use client";
import Eolico from '@/components/DashboardComponents/Eolico/Eolico';
import HeaderDashboard from '@/components/DashboardComponents/HeaderDashBoard/HeaderDashboard'
import Previsao from '@/components/DashboardComponents/Previsao/Previsao';
import Principal from '@/components/DashboardComponents/Principal/Principal';
import SidebarDashboard from '@/components/DashboardComponents/SidebarDashboard/SidebarDashboard'
import Solar from '@/components/DashboardComponents/Solar/Solar';
import React, { use, useState } from 'react'

export default function Dashboard() {
  const [conteudo, setConteudo] = useState<string>('Principal');

  const handleClick = (nomeBotao: string) => {
    setConteudo(nomeBotao);
  }
  
  const conteudoChanger = () => {
      switch (conteudo) {
        case 'Principal':
          return <Principal/>;
        case 'Eolico':
          return <Eolico/>;
        case 'Solar':
          return <Solar/>;
        case 'Previsao':
          return <Previsao/>;
        default:
          return <Principal/>;
      }
    }

    return (
      <div className='bg-[#AA93B7] flex flex-col gap-4 h-full p-4'>
          <HeaderDashboard/>
          <div className='flex flex-row gap-10'>
          <SidebarDashboard setConteudo={handleClick}/>
          <div className='flex-grow'>
          {conteudoChanger()}
          </div>
          </div>
      </div>
    )
}
