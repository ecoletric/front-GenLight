import Image from 'next/image'
import React from 'react'

type CardInfosProps = {
    image: string;
    alt: string;
    titulo: string;
    Informacao: string;
}

export default function CardInfos({ image, alt, titulo, Informacao }: CardInfosProps) {
    return (
        <div className='flex flex-col w-1/2 shadow-sm rounded-md'>
            <div className='w-full rounded-t-md h-[3.5rem] flex justify-center items-center gap-3 font-semibold bg-[#AA93B7] text-white'>
                <Image src={image} alt={alt} width={30} height={30}></Image>
                <h1>{titulo}</h1>
            </div>
            <div className='w-full font-semibold h-[3.5rem] flex justify-center items-center'>
                {Informacao}
            </div>
        </div>
    )
}