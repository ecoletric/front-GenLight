import Image from "next/image";
import Link from "next/link";

export default function Cabecalho(){
    return(
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/energia-renovavel.png" alt="simbolo raio" height={25} width={25}></Image>
          <h2 className="text-xl font-bold text-gray-800">Genlight</h2>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link href="/">Sobre</Link>
          <Link href="/empresas" className="px-4 py-2 bg-purple-custom-1 text-white rounded-md hover:bg-purple-700">Para Empresas</Link>
        </nav>
      </header>
    )
  }