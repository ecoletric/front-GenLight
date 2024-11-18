import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Cabecalho(){
    return(
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <Logo />
        
        <nav className="flex items-center space-x-6">
          <Link href="/">Sobre</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-purple-custom-1 text-white rounded-md hover:bg-purple-700">Para Empresas</Link>
        </nav>
      </header>
    )
  }