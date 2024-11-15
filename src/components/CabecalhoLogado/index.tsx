import React from 'react'
import Logo from '../Logo/Logo'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'

const CabecalhoLogado = () => {
  return (
    <div className='flex w-full rounded-lg shadow-sm py-7 px-10 items-center justify-between bg-white'>
        <div className="flex gap-3 w-max">
            <BsArrowLeft color='#ac96b9' size={32}/>
            <Logo />
        </div>
        <div className="rounded-full p-5 bg-purple-custom-1">
            <Image src="/img/perfil.jpg" height={40} width={40} alt='Foto de perfil de exemplo'/>
        </div>

    </div>
  )
}

export default CabecalhoLogado