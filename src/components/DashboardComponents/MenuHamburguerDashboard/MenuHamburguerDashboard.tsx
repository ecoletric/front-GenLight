"use client";
import React from 'react';
import ButtonSideBar from '../SidebarDashboard/ButtonSideBar/ButtonSideBar'; 
import Image from 'next/image';


type SidebarDashboardProps = {
    setConteudo(value: string): void;
    setMenuAberto(value: boolean): void;
    conteudo: string;
}

export default function MenuHamburguerDashboard({ conteudo, setConteudo, setMenuAberto }: SidebarDashboardProps) {


  return (
    <div className='h-full min-h-screen items-center bg-white w-auto p-3 gap-4 rounded-[36px] flex flex-col'>
      <div className='flex justify-center items-center'>
        <Image src={'/Vector.svg'} width={50} height={50} alt='Logo Genlight'></Image>
      </div>
      <div className='h-4'><h1 className='text-[#AA93B7]'>Menu</h1></div>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='flex flex-row gap-5 items-center justify-center cursor-pointer' onClick={() => {setConteudo('Principal'); setMenuAberto(false); }}>
          <ButtonSideBar 
            onClick={()=>setConteudo("Principal")}
            setConteudo={()=>setConteudo("Principal")} 
            image={'/pagina-inicial.svg'} 
            ativado={conteudo === 'Principal'} 
          />
          <h1 className={`font-semibold`}>Principal</h1>
        </div>
        <div className='flex flex-row gap-5 items-center justify-center cursor-pointer' onClick={() => { setConteudo('Eolico'); setMenuAberto(false); }}>
          <ButtonSideBar
            onClick={()=>setConteudo("Eolico")}
            setConteudo={()=>setConteudo("Eolico")} 
            image={'/helice.svg'} 
            ativado={conteudo === 'Eolico'} 
          />
          <h1 className={`font-semibold`}>Eolico</h1>
        </div>
        <div className='flex flex-row gap-5 items-center justify-center cursor-pointer' onClick={() => { setConteudo('Solar'); setMenuAberto(false); }}>
          <ButtonSideBar 
            onClick={()=>setConteudo("Solar")}
            setConteudo={()=>setConteudo("Solar")} 
            image={'/painel-solar.svg'} 
            ativado={conteudo === 'Solar'} 
          />
          <h1 className={`font-semibold`}>Solar</h1>
        </div>
        <div className='flex flex-row gap-5 items-center justify-center cursor-pointer' onClick={() => { setConteudo('Previsao'); setMenuAberto(false); }}>
          <ButtonSideBar 
            onClick={()=>setConteudo("Previsao")}
            setConteudo={()=>setConteudo("Previsao")} 
            image={'/cronometro.svg'} 
            ativado={conteudo === 'Previsao'} 
          />
          <h1 className={`font-semibold`}>Previsao</h1>
        </div>
      </div>
    </div>
  );
}