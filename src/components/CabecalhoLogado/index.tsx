import React from 'react'
import Logo from '../Logo/Logo'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const CabecalhoLogado = () => {
  return (
    <div className='flex w-full rounded-full shadow-md py-3 px-6 items-center justify-between bg-white'>
        <div className="flex gap-3 w-max">
            <BsArrowLeft color='#ac96b9' size={32} className='hover:scale-110 transition-all duration-300 cursor-pointer'/>
            <Logo />
        </div>
        <Link href="/perfil" className='hover:scale-110 transition-all duration-300'>
            <div className="rounded-full p-2 bg-purple-custom-1">
                <Image src="/img/perfil.jpg" height={40} width={40} alt='Foto de perfil de exemplo' className='rounded-full'/>
            </div>
        </Link>

    </div>
  )
}

export default CabecalhoLogado