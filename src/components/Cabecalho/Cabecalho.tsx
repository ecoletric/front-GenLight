import Image from "next/image";

export default function Cabecalho(){
    return(
      <header>
        <Image src="/energia-renovavel.png" alt="simbolo raio" height={25} width={25}></Image>
        <h2>Genlight</h2>
        <h3>Sobre</h3>
        <h3>Para Empresas</h3>
      </header>
    )
  }