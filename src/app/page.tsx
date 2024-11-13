import Rodape from "@/components/Rodape/Rodape"
import Cabecalho from "@/components/Cabecalho/Cabecalho"
import Image from "next/image"

export default function Page(){
  return(
    <div>
      <Cabecalho></Cabecalho>
      <div>
        <Image src="/torre-eletrica.png" alt="torres eletricas" height={541} width={568}></Image>
        <h1>Genlight: gerindo sua energia</h1>
      </div>
      <div>
        <div>
          <h3>Quadrado 1</h3>
        </div>
        <div>
          <h3>Quadrado 2</h3>
        </div>
        <div>
          <h3>Quadrado 3</h3>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  )
}