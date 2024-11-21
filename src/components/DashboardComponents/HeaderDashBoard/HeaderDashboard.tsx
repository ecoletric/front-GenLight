import Image from 'next/image';
import React, { useState } from 'react';
import MenuHamburguerDashboard from '../MenuHamburguerDashboard/MenuHamburguerDashboard';

type HeaderDashboardProps = {
  setConteudo(value: string): void;
  conteudo: string;
}

export default function HeaderDashboard({conteudo, setConteudo }: HeaderDashboardProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      <header className='flex justify-between p-3 bg-white rounded-[36px]'>
        <div className='flex items-center'>
          <button onClick={toggleMenu} className='lg:hidden'>
            <Image src={'/menu-hamburguer.svg'} width={30} height={30} alt='Menu Hamburguer' />
          </button>
          <div className='hidden lg:flex items-center gap-3'>
            <Image src={'/energia-renovavel.png'} width={30} height={30} alt='Logo Genlight' />
            <h1 className='font-semibold text-2xl'>Genlight</h1>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='bg-[#A35DCA] h-[50px] w-[50px] flex justify-center items-center rounded-full'>
            <Image src={'/icon-dash.svg'} width={40} height={40} alt='Icone Pessoa' />
          </div>
        </div>
      </header>
      {menuAberto && (
        <div className='lg:hidden'>
          <MenuHamburguerDashboard conteudo={conteudo} setConteudo={setConteudo} setMenuAberto={setMenuAberto} />
        </div>
      )}
    </div>
  );
}