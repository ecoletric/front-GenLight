import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeButton() {
  return (
    <div>
        <Link href={"/"} className="bg-[#934e9c] mr-5 mb-5 absolute bottom-0 right-0 text-white p-3 rounded-xl"><Image src={"/home.svg"} width={30} height={30} alt='Imagem da home'></Image></Link>
    </div>
  )
}
