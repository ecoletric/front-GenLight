import Image from 'next/image'
import React from 'react'

export default function HeaderDashboard() {
  return (
    <div>
        <header className='flex justify-between p-3 bg-white rounded-[36px]'>
            <div className='flex items-center justify-center gap-3'>
                <Image src={'/energia-renovavel.png'} width={30} height={30} alt='Logo Genlight'></Image>
                <h1 className='font-semibold text-2xl'>Genlight</h1>
            </div>
            <div>
                <div className='bg-[#A35DCA] h-[50px] w-[50px] flex justify-center items-center rounded-full'>
                <Image src={'/icon-dash.svg'} width={40} height={40} alt='Icone Pessoa'></Image>
                </div>
            </div>
        </header>
    </div>
  )
}
