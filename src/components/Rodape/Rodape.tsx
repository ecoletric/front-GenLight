import Image from "next/image";
import Link from "next/link";

export default function Rodape(){
    return(
      <footer>
        <div>
          <Image src="/energia-renovavel.png" alt="simbolo raio" height={25} width={25}></Image>
          <h2>Genlight</h2>
        </div>
        
        <div>
          <p>Rua das Palmeiras, 1234 | São Paulo | Brasil</p>
          <div>
            <Image src="/telefone.png" alt="telefone" height={12} width={12}></Image>
            <p>(11) 98745-2133</p>
          </div>
          <div>
            <Image src="/e-mail.png" alt="simbolo carta" height={13} width={13}></Image>
            <p>genlight@gmail.com</p>
          </div>
        </div>
        <nav>
          <h3>Links rápidos</h3>
          <Link href="/">Home</Link>
          <Link href="/empresas">Para empresas</Link>
          <Link href="/sobre">Sobre nós</Link>
        </nav>
        
      </footer>
    )
  }