import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="bg-background text-black py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex items-center space-x-2">
          <Image src="/energia-renovavel.png" alt="simbolo raio" height={25} width={25} />
          <h2 className="text-xl font-bold">Genlight</h2>
        </div>

        <div className="text-center md:text-left">
          <p>Rua das Palmeiras, 1234 | São Paulo | Brasil</p>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <Image src="/telefone.png" alt="telefone" height={12} width={12} />
            <p>(11) 98745-2133</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <Image src="/e-mail.png" alt="simbolo carta" height={13} width={13} />
            <p>genlight@gmail.com</p>
          </div>
        </div>

        <nav className="text-center md:text-right">
          <h3 className="font-semibold mb-2">Links rápidos</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/empresas" className="hover:underline">Para empresas</Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline">Sobre nós</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
