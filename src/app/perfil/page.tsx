"use client"

import CabecalhoLogado from '@/components/CabecalhoLogado'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { FaTags } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { MdAttachEmail, MdBusiness} from 'react-icons/md'
import {PiPasswordFill } from 'react-icons/pi'
import { RiEditBoxLine } from 'react-icons/ri'
import { TbListNumbers } from 'react-icons/tb'

const Perfil = () => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className='bg-background h-full w-screen p-12 m-auto flex flex-col gap-4'>
        <CabecalhoLogado />
        <div className="flex flex-col h-max flex-grow bg-white w-full rounded-3xl items-center p-4 py-10 gap-7">
            <div className="flex flex-col items-center px-12 py-6 bg-lightpink gap-5 w-max rounded-[40px]">
                <Image src="/img/perfil.jpg" height={150} width={150} alt='Imagem de perfil exemplo' className='rounded-full' />
                <div className="flex gap-1 items-start w-max m-auto">
                    <h2 className='text-2xl font-medium'>JuAngelozi</h2>
                    <RiEditBoxLine size={20} color='#000'/>
                </div>
            </div>
            <form className="p-8 w-[700px] mx-auto rounded-2xl shadow-md bg-white border-purple-custom-1 border-4">
                <h1 className="text-2xl mb-4 text-center text-primary">Suas informações</h1>
                <div className="flex gap-2 items-center ">
                  <FaTags color='#aa93b7' size={20} className='-mt-2'/> 
                  <label className="block text-gray-700 font-semibold mb-2">Nome da empresa: </label>
                </div>
                <input type="text" name="Nome da empresa" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"/>

                <div className="flex gap-2 items-center">
                  <MdBusiness color='#aa93b7' size={20} className='-mt-2'/>
                  <label className="block text-gray-700 font-semibold mb-2">CNPJ: </label>
                </div>
                <input type="text" name="CNPJ" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"/>
                <div className="flex gap-2 items-center">
                  <MdAttachEmail color='#aa93b7' size={20} className='-mt-2'/>
                  <label className="block text-gray-700 font-semibold mb-2">E-mail: </label>
                </div>
                <input type="email" name="Email" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"/>

                <div className="flex gap-2 items-center">
                  <ImLocation2 size={20} color='#aa93b7' className='-mt-2'/>
                  <label className="block text-gray-700 font-semibold mb-2">CEP: </label>
                </div>
                <input type="text" name="CEP" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"/>
                <div className="flex gap-2 items-center">
                  <TbListNumbers size={20} color='#aa93b7' className='-mt-2'/>
                  <label className="block text-gray-700 font-semibold mb-2">Número: </label>
                </div>
                <input type="number" name="Número" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"/>
                
                <div className="flex gap-2 items-center">
                  <PiPasswordFill size={20} color='#aa93b7' className='-mt-2' />
                  <label className="block text-gray-700 font-semibold mb-2">Senha: </label>
                </div>
                <div className="flex justify-between w-full px-4 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500 items-center">
                  <input type={seePassword ? 'text' :'password' } name="senha" className="flex-grow py-2 outline-none" />
                  <BsEye color='#aa93b7' size={20} className='cursor-pointer hover:scale-125 transition-all duration-300' onClick={() => setSeePassword(!seePassword)}/>
                </div>

                <div className="text-center">
                    <button type="submit" className="px-5 py-2 bg-purple-custom-1 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors">Salvar informações</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Perfil