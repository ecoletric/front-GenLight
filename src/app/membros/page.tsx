import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'
import Image from 'next/image'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const Membros = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Cabecalho />
        <main className='max-w-screen-lg flex-grow flex-col flex self-center py-5 px-3'>
            <h1 className='font-semibold text-3xl'>Membros</h1>
            <h2 className='font-medium text-xl mb-4'>Sem eles, a Genlight não seria possível!</h2>
            <div className="flex flex-wrap gap-4 max-w-screen-lg m-auto justify-evenly px-4">
            
                <div className="flex flex-col gap-4 max-w-1/3 shadow-md p-5 py-10 rounded-lg bg-slate-200 h-max m-auto justify-center items-center">
                    <Image src="https://github.com/gustavodscruz.png" width={200} height={200} alt="Membros" className='rounded-full' />
                    <h2 className="text-xl font-semibold text-center w-52 m-auto">Gustavo Dias da Silva Cruz</h2>
                    <div className="flex gap-3 justify-center items-center w-max m-auto">
                        <a href="https://linkedin.com/in/gustavodiasdsc" target='_blank'>
                            <FaLinkedin size={30} color="#0077b5" className='hover:scale-110 transition-all duration-300' />
                        </a>
                        <a href="https//github.com/gustavodscruz" target='_blank'>
                            <BsGithub size={30} color="#000"  className='hover:scale-110 transition-all duration-300'/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-1/3 shadow-md p-5 py-10 rounded-lg bg-slate-200 h-max m-auto justify-center items-center">
                    <Image src="https://github.com/cotete.png" width={200} height={200} alt="Membros" className='rounded-full' />
                    <h2 className="text-xl font-semibold text-center w-52 m-auto">Felipe Ribeiro Tardochi da Silva</h2>
                    <div className="flex gap-3 justify-center items-center w-max m-auto">
                        <a href="https://www.linkedin.com/in/felipe-ribeiro-tardochi-da-silva-112b712b5" target='_blank'>
                            <FaLinkedin size={30} color="#0077b5" className='hover:scale-110 transition-all duration-300' />
                        </a>
                        <a href="https://github.com/cotete" target='_blank'>
                            <BsGithub size={30} color="#000"  className='hover:scale-110 transition-all duration-300'/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-1/3 shadow-md p-5 py-10 rounded-lg bg-slate-200 h-max m-auto justify-center items-center">
                    <Image src="https://github.com/JuliaAngelozi.png" width={200} height={200} alt="Membros" className='rounded-full' />
                    <h2 className="text-xl font-semibold text-center w-52 m-auto">Júlia Medeiros Angelozi</h2>
                    <div className="flex gap-3 justify-center items-center w-max m-auto">
                        <a href="https://www.linkedin.com/in/julia-angelozi" target='_blank'>
                            <FaLinkedin size={30} color="#0077b5" className='hover:scale-110 transition-all duration-300' />
                        </a>
                        <a href="https://github.com/JuliaAngelozi" target='_blank'>
                            <BsGithub size={30} color="#000"  className='hover:scale-110 transition-all duration-300'/>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <Rodape />
    </div>
  )
}

export default Membros