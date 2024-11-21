import Rodape from "@/components/Rodape/Rodape"
import Cabecalho from "@/components/Cabecalho/Cabecalho"
import Image from "next/image"


export default function Page(){
  return(
    <div className="min-h-screen flex flex-col">
      <Cabecalho></Cabecalho>
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row items-center justify-around bg-background py-10">
          <Image src="/torres.png" alt="torres eletricas" height={500} width={500} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 md:mt-0 md:ml-4">Genlight: gerindo sua energia</h1>
        </div>
        <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 h-full text-center bg-white shadow-md flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">Gerir sua Energia</h3>
            <p className="text-gray-600 mt-2 flex-grow">A GenLight tem como ideia principal te ajudar a gerenciar a sua energia por meio de um Dashboard, onde terá as informações sobre seus patios enegéticos!</p>
          </div>
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 mt-10 h-full text-center bg-white shadow-md flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">Previsões que Impulsionam Resultados</h3>
            <p className="text-gray-600 mt-2 flex-grow">Integramos tecnologia avançada para prever sua geração e consumo com base em dados históricos e condições climáticas. Esteja sempre preparado para otimizar o uso da sua energia.</p>
          </div>
          <div className="border-2 border-purple-custom-1 rounded-lg p-6 h-full text-center bg-white shadow-md flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">Economia que Faz Diferença</h3>
            <p className="text-gray-600 mt-2 flex-grow">Reduza sua conta de luz e transforme excedentes em créditos, contribuindo para o caixa da sua empresa.</p>
          </div>
        </div>
        <div className="py-10 flex flex-col justify-center items-center gap-5">
          <h2 className="text-gray-600 mt-6 text-center text-2xl font-semibold">Genlight: liderando com eficiência e inovação na gestão da sua energia.</h2>
          <p>Imagem do site</p>
          <div className="image-3d w-3/5 h-auto">
          <Image className="rounded-2xl" src={"/dashboard.png"} width={800} height={600} alt="Imagem de amostra"></Image>
          </div>
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