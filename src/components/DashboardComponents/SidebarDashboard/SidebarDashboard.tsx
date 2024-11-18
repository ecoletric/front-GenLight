"use client";
import React, { useState } from 'react'
import ButtonSideBar from './ButtonSideBar/ButtonSideBar'
import Image from 'next/image';

type SidebarDashboardProps = {
    setConteudo(value: string): void
}

export default function SidebarDashboard({setConteudo}: SidebarDashboardProps) {

    const [ativado, setAtivado] = useState<string>('principal');

    const handleClick = (nomeBotao: string) => {
        setAtivado(nomeBotao);
    }

    return (
        <div className='h-full min-h-screen  items-center bg-white w-auto p-3 gap-4 rounded-[36px] flex flex-col'>
            <div className='flex justify-center items-center'>
                <Image src={'/Vector.svg'} width={50} height={50} alt='Logo Genlight'></Image>
            </div>
            <div className='h-4'><h1 className='text-[#AA93B7]'>Menu</h1></div>
            <ButtonSideBar 
                setConteudo={()=>setConteudo('Principal')} 
                image={'/pagina-inicial.svg'} 
                ativado={ativado === 'principal'} 
                onClick={() => handleClick('principal')}
            />
            <ButtonSideBar 
                setConteudo={()=>setConteudo('Eolico')} 
                image={'/helice.svg'} 
                ativado={ativado === 'eolico'} 
                onClick={() => handleClick('eolico')}
            />
            <ButtonSideBar 
                setConteudo={()=>setConteudo('Solar')} 
                image={'/painel-solar.svg'} 
                ativado={ativado === 'solar'} 
                onClick={() => handleClick('solar')}
            />
            <ButtonSideBar 
                setConteudo={()=>setConteudo('Previsao')} 
                image={'/cronometro.svg'} 
                ativado={ativado === 'previsao'} 
                onClick={() => handleClick('previsao')}
            />
        </div>
    )
}