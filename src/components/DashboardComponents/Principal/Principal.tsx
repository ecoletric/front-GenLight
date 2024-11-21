import React, { useState, useEffect } from 'react';
import CardInfos from '../CardInfos/CardInfos';
import { aparelhoGeradorFinal, industriaFinal, maquinaFinal, sitioConsumo, sitioFinal } from '@/utils/types/types';
import TabelaSitios from './Components/TabelaSitios/TabelaSitios';
import Image from 'next/image';
import PieChart from './Components/GraficoPizza/PieChart';
import ModalAddSitio from './Components/ModalAddSitio/ModalAddSitio';
import GraficoGeracoes from './Components/GraficoGeracoes/GraficoGeracoes';
import { Modal } from '@nextui-org/modal';
import ModalAddFonte from '../ModalAddFonte/ModalAddFonte';


type PrincipalProps = {
  industria: industriaFinal;
}

export default function Principal({ industria }: PrincipalProps) {
  const currentDate = new Date().toLocaleDateString();
  const [sitios, setSitios] = useState<sitioConsumo[]>([
    {
      id: 0,
      idEndereco: 0,
      idIndustria: 0,
      tipoFonte: 0,
      consumo: 0,
      energiaProduzida: 0,
    },
  ]);
  const [maquinas, setMaquinas] = useState<maquinaFinal[]>([
    {
      id: 0,
      idSitio: 0,
      nome: '',
      consumo: 0
    }
  ]);
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
      const res = await fetch(`http://localhost:8080/aparelho-gerador/sitio/${id}`);
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
    const fetchData = async () => {
      if (industria.id) {
        const sitiosData = await chamaSitio(industria.id);
        setSitios(sitiosData);

        const maquinasData: maquinaFinal[] = [];
        const aparelhosData: aparelhoGeradorFinal[] = [];

        for (const sitio of sitiosData) {
          const maquinas = await chamaMaquina(sitio.id);
          if (maquinas) {
            maquinasData.push(...maquinas);
          }

          const aparelhos = await chamaAparelho(sitio.id);
          aparelhosData.push(...aparelhos);
        }

        setMaquinas(maquinasData);
        setAparelhos(aparelhosData);
      }
    };

    fetchData();
  }, [industria]);
  
  const onFonteCadastrada = (fonte: maquinaFinal | aparelhoGeradorFinal,tipo : number) => {
    if (tipo === 0) {
      setMaquinas(prevMaquinas => ([...prevMaquinas, fonte as maquinaFinal]));
    } else {
      setAparelhos(prevAparelhos => ([...prevAparelhos, fonte as aparelhoGeradorFinal]));
    }
  }

  const onSitioCadastrado = (sitio: sitioFinal) => {
    setSitios(prevSitios => ([...prevSitios, sitio]));
  }


  return (
    <div className='bg-white w-full max-lg:h-auto lg:h-full rounded-[36px] flex flex-col gap-5 p-3 shadow-lg'>
      <div className='flex justify-end items-center'>
        <Image src={'/calendar.svg'} alt='Calendario' width={30} height={30}></Image>
        <h1 className='text-black text-xl'>{currentDate}</h1>
      </div>
      <div className='flex w-full max-md:flex-col flex-row gap-5'>
        <CardInfos image='/engrenagem.svg' alt='Imagem card geração diaria' titulo='Quanto Gerou no dia' Informacao='5000kw'/>
        <CardInfos image='/energia.svg' alt='Imagem card melhor geração' titulo='Melhor Energia' Informacao='Solar'/>
      </div>
      <div className='flex flex-col max-lg:gap-5'>
        <div className='flex flex-row  max-lg:flex-col h-auto min-h-[20rem] gap-5'>
          <div className='shadow-md rounded-lg max-lg:w-full flex flex-col flex-grow w-1/2'>
          <div className='flex flex-row w-full gap-5 mt-5 mb-5'>
            <ModalAddSitio idIndustria={industria.id?industria.id:1} onAddSitio={onSitioCadastrado} />
            <ModalAddFonte idIndustria={industria.id?industria.id:1} sitios={sitios} onAddFonte={onFonteCadastrada} />
            </div>
            <h1>Geração dos Sitios</h1>
            <div>
            <TabelaSitios sitios={sitios}/>
            </div>
          </div>
          <div className='shadow-md rounded-md flex flex-col max-lg:w-full lg:min-w-[20rem] h-full max-lg:h-auto'>
            <h1>Porcentagens da Geração</h1>
            <div className='max-lg:h-auto lg:h-full'>
              {aparelhos.length > 0 ? <PieChart aparelhos={aparelhos} />:(
                <div className='w-full h-full flex text-center items-center justify-center text-xl font-semibold'>
                  <h1 className='w-4/5'>Não há dados suficientes para gerar o gráfico</h1>
                </div>
              )}
              
            </div>
          </div>
        </div>
        <div className='bg-white w-full max-lg:h-auto lg:h-full rounded-[36px] flex flex-col gap-5 p-3 shadow-lg'>
          <h1>Gerações</h1>
          <div>
            <GraficoGeracoes maquinas={maquinas} aparelhos={aparelhos}></GraficoGeracoes>
          </div>
        </div>
      </div>
    </div>
  )
}