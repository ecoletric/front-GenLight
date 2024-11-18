import React, { useState, useEffect } from 'react';
import CardInfos from '../CardInfos/CardInfos';
import { aparelhoGeradorFinal, maquinaFinal, sitioFinal } from '@/utils/types/types';
import TabelaSitios from './Components/TabelaSitios/TabelaSitios';
import Image from 'next/image';
import PieChart from './Components/GraficoPizza/PieChart';

type PrincipalProps = {
  idIndustria?: number;
}

export default function Principal({ idIndustria }: PrincipalProps) {
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
      <div className='flex justify-end items-center'>
        <Image src={'/calendar.svg'} alt='Calendario' width={30} height={30}></Image>
        <h1 className='text-black text-xl'>{currentDate}</h1>
      </div>
      <div className='flex w-full flex-row gap-5'>
        <CardInfos image='/calendar.svg' alt='Imagem card geração diaria' titulo='Quanto Gerou no dia' Informacao='NadaPorEnquanto'/>
        <CardInfos image='/calendar.svg' alt='Imagem card melhor geração' titulo='Melhor Energia' Informacao='NadaPorEnquanto'/>
      </div>
      <div className='flex flex-row h-1/2 gap-5'>
        <div className='bg-red-200 flex flex-grow w-1/2'>
          <h1>Geração dos Sitios</h1>
          <div>
          <TabelaSitios sitios={sitios}/>
          </div>
        </div>
        <div className='bg-red-200 flex flex-col min-w-[20rem] w-auto h-auto'>
          <h1>Porcentagens da Geração</h1>
          <div className='h-full '>
            <PieChart aparelhos={aparelhos} />
          </div>
        </div>
      </div>
      <div>
        <h1>Media de Geração</h1>
        <div>
          {//Graficos de media de geração
          }
        </div>
      </div>
    </div>
  )
}