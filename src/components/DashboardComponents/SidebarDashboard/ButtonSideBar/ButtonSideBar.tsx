"use client";
import Image from 'next/image'
import React from 'react'

type ButtonSideBarProps = {
    setConteudo(value: string): void,
    image: string,
    ativado: boolean,
    onClick: () => void
}

export default function ButtonSideBar({ setConteudo, image, ativado, onClick }: ButtonSideBarProps) {
    return (
        <div>
            <button 
                className={`${ativado ? 'bg-[#AA93B7]' : 'bg-transparent'} rounded-xl flex justify-center items-center border-none p-2`} 
                onClick={() => {
                    setConteudo('Principal');
                    onClick();}}
            >
                <Image src={image} alt='Imagem da side bar' width={30} height={30} />
            </button>
        </div>
    )
}