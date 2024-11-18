import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CardInfos from '../CardInfos/CardInfos';
import TabelaSitios from '../Principal/Components/TabelaSitios/TabelaSitios';
import PieChart from '../Principal/Components/GraficoPizza/PieChart';
import { aparelhoGeradorFinal, maquinaFinal, sitioFinal } from '@/utils/types/types';


type EolicoProps = { 
    idIndustria?: number; 
    }

export default function Eolico({idIndustria}:EolicoProps) {
  const currentDate = new Date().toLocaleDateString();
  const [sitios, setSitios] = useState<sitioFinal[]>([]);
  const [maquinas, setMaquinas] = useState<maquinaFinal[]>([]);
  const [aparelhos, setAparelhos] = useState<aparelhoGeradorFinal[]>([]);

  const chamaSitio = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/sitio/industria/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch {
      console.log("Erro ao puxar sitios");
    }
  }

  const chamaMaquina = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/maquina/sitio/${id}`);
      if (res.ok) {
        const data :maquinaFinal[] = await res.json();
        setMaquinas(data);
        return data;
      }
    } catch {
      console.log("Erro ao puxar maquinas");
    }
  }

  const chamaAparelho = async (id: number)=> {
    try {
      const res = await fetch(`http://localhost:8080/aparelho/sitio/${id}`);
      if (res.ok) {
        const data:aparelhoGeradorFinal[] = await res.json();
        setAparelhos(data);
        return data;
      }
    } catch {
      console.log("Erro ao puxar aparelhos");
    }
    return [];
  }
  
  useEffect(() => {
    if (idIndustria) {
      chamaSitio(idIndustria).then((data) => {
        setSitios(data);
      });
    }
  }, [idIndustria]);
  
  useEffect(() => {
    sitios.forEach(async (sitio) => {
      try {
        const maquinas = await chamaMaquina(sitio.id);
        if (!maquinas) {
          throw new Error('Maquinas não encontradas');
        }
        setMaquinas((prevMaquinas) => ([...prevMaquinas, ...maquinas]));
      } catch (e) {
        console.log(e);
      }
      try{
      const aparelhos = await chamaAparelho(sitio.id)
        aparelhos.forEach((aparelho) => {
          if (!aparelhos) {
            throw new Error('Tipo de fonte não encontrado');
          }
          setAparelhos(prevAparelhos => ([ ...prevAparelhos, aparelho]));
      });
      }catch (e) {
        console.log(e);
      }
    });
  }, [sitios]);
  return (
      <div className='bg-white w-full h-full rounded-[36px] flex flex-col gap-5 p-3 shadow-lg'>
        <div className='flex justify-center w-full'>
          <CardInfos image='/engrenagem.svg' alt='Imagem card geração diaria' titulo='Quanto Gerou no dia' Informacao='NadaPorEnquanto'/>
        </div>
        <div className='flex flex-col md:flex-row font-semibold'>
          <Image src="/fontes-energia.svg" alt='grafico x' width={20} height={20}></Image>
          <h1>Energia Eólica</h1>
        </div>
        
        <div className='flex flex-row h-1/2 gap-5 w-full'>
          <div className='bg-white flex flex-col w-full h-auto rounded-[36px] shadow-lg'>
            <div className='h-full '>
              <PieChart aparelhos={aparelhos} />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row font-semibold'>
          <Image src="/fontes-energia.svg" alt='grafico x' width={20} height={20}></Image>
          <h1>Media de Geração</h1>
        </div>
        <div>
          <div>
            {//Graficos de media de geração
            }
          </div>
        </div>
      </div>
  )
}
