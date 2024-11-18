import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-[#fcedfc] flex-col flex flex-grow h-screen w-screen m-auto'>
        <Cabecalho />
        <div className="bg-white shadow-md rounded-md flex flex-col py-5 px-3 size-96 m-auto justify-center items-center gap-6">
            <iframe src="https://lottie.host/embed/dd826c69-a053-4725-80d8-9fe1b5949a4d/WI2Xj248KP.json"></iframe>
            <h2 className='font-semibold text-center'>Página não encontrada!</h2>
            <Link href={"/"}><button className='bg-purple-custom-1 py-3 px-5 text-white font-semibold rounded-md hover:bg-purple-700 transition-all duration-300'>Voltar para home</button></Link>
        </div>
        <Rodape />
    </div>
  )
}

export default NotFound