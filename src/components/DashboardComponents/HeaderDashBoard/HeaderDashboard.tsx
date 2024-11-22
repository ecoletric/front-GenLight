import Image from 'next/image';
import React, { useState } from 'react';
import MenuHamburguerDashboard from '../MenuHamburguerDashboard/MenuHamburguerDashboard';
import Logo from '@/components/Logo/Logo';

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
        <div className='flex items-center mx-3'>
          <button onClick={toggleMenu} className='lg:hidden'>
            <Image src={'/menu-hamburguer.svg'} width={30} height={30} alt='Menu Hamburguer' />
          </button>
          <div className="max-sm:hidden">
            <Logo />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='bg-[#A35DCA] h-[40px] w-[40px] flex justify-center items-center rounded-full'>
            <Image src={'/perfil.png'} width={35} height={35} alt='Icone Pessoa' />
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