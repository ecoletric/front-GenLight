import Rodape from "@/components/Rodape/Rodape"
import Cabecalho from "@/components/Cabecalho/Cabecalho"
import Image from "next/image"


export default function Page(){
  return(
    <div className="min-h-screen flex flex-col">
      <Cabecalho></Cabecalho>
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row items-center justify-center bg-background py-10">
          <Image src="/torres.png" alt="torres eletricas" height={250} width={250} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 md:mt-0 md:ml-4">Genlight: gerindo sua energia</h1>
        </div>
        <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 text-center bg-white shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Quadrado 1</h3>
            <p className="text-gray-600 mt-2">Descrição do quadrado 1...</p>
          </div>
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 text-center bg-white shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Quadrado 2</h3>
            <p className="text-gray-600 mt-2">Descrição do quadrado 2...</p>
          </div>
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 text-center bg-white shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Quadrado 3</h3>
            <p className="text-gray-600 mt-2">Descrição do quadrado 3...</p>
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-gray-600 mt-6 text-center text-2xl font-semibold">Genlight: liderando com eficiência e inovação na gestão da sua energia.</h2>
          <p>Imagem do site</p>
        </div>
        <div className="text-center py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Genlight</h2>
          <p className="text-gray-600 mt-2">Seu parceiro na transição para um mundo movido por energia limpa.</p>
          <button className="mt-6 px-6 py-3 bg-purple-custom-1 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800">Inicie sua amostra</button>
        </div>
      </main>

      <Rodape></Rodape>
    </div>
  )
}