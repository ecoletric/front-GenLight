"use client";
import DropDownIndustria from '@/components/DashboardComponents/DropdownIndustria/DropdownIndustria';
import Eolico from '@/components/DashboardComponents/Eolico/Eolico';
import HeaderDashboard from '@/components/DashboardComponents/HeaderDashBoard/HeaderDashboard';
import ModalAddSitio from '@/components/DashboardComponents/ModalAddIndustrias/ModalAddIndustrias';
import Previsao from '@/components/DashboardComponents/Previsao/Previsao';
import Principal from '@/components/DashboardComponents/Principal/Principal';
import SidebarDashboard from '@/components/DashboardComponents/SidebarDashboard/SidebarDashboard';
import Solar from '@/components/DashboardComponents/Solar/Solar';
import { EmpresaFinal, industriaFinal } from '@/utils/types/types';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [conteudo, setConteudo] = useState<string>('Principal');
  const [loading, setLoading] = useState<boolean>(true);
  const [industria, setIndustria] = useState<industriaFinal >({
    id: 0,
    idEmpresa: 0,
    nome: '',
  });
  const [industriasList, setIndustriasList] = useState<industriaFinal[]>([]);
  const [empresa, setEmpresa] = useState<EmpresaFinal | null>(null);

  const handleClick = (nomeBotao: string) => {
    setConteudo(nomeBotao);
  };

  const changeIndustria = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedIndustria = industriasList.find(industria => industria.id === selectedId);
    if (selectedIndustria) {
      console.log(industria)
      setIndustria(selectedIndustria);
    }
  };



  const conteudoChanger = () => {
    if (loading) {
      return <div>Carregando...</div>;
    }

    switch (conteudo) {
      case 'Principal':
        return <Principal industria={industria} />;
      case 'Eolico':
        return <Eolico idIndustria={industria?.id} />;
      case 'Solar':
        return <Solar idIndustria={industria?.id} />;
      case 'Previsao':
        return <Previsao idIndustria={industria?.id} />;
      default:
        return <Principal industria={industria} />;
    }
  };

  const ApiIndustria = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/industria/empresa/${id}`);
      if (res.ok) {
        const data: industriaFinal[] = await res.json();
        console.log(data);
        return data;
      }
    } catch {
      console.log("Erro ao puxar industrias");
    }
  };

  const ApiEmpresa = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/empresa/${id}`);
      if (res.ok) {
        const data: EmpresaFinal = await res.json();
        console.log(data);
        return data;
      }
    } catch {
      console.log("Erro ao puxar usuario");
    }
  };




  const onAddIndustria = async (industria: industriaFinal) => {
    setIndustriasList(prevIndustrias => ([...prevIndustrias, industria]));
  }




  useEffect(() => {
    const chamadaEmpresa = async () => {
      try {
        const empresaString = sessionStorage.getItem("empresa");
        if (empresaString) {
          const parsedUser: EmpresaFinal = await JSON.parse(empresaString);
          console.log(parsedUser.id);
          const empresa = await ApiEmpresa(parsedUser.id);
          console.log(empresa);
          if (empresa) {
            setEmpresa(empresa);
          }
        }
      } catch {
        console.log("Erro na chamada empresa");
      }
    };
    const chamadaIndustria = async () => {
      try {
        const empresaString = sessionStorage.getItem("empresa");
        if (empresaString) {
          const parsedUser: EmpresaFinal = await JSON.parse(empresaString);
          console.log(parsedUser.id);
          const industrias = await ApiIndustria(parsedUser.id);
          console.log(industrias);
          if (industrias) {
            setIndustriasList(industrias);
            setIndustria(industrias[0]); 
          }
        }
      } catch {
        console.log("Erro na chamada industria");
      } finally {
        setLoading(false); 
      }
    };
    
    chamadaEmpresa();
    chamadaIndustria();
  }, []);

  return (
    <div className='bg-[#AA93B7] flex flex-col gap-4 min-h-full p-4'>
      <HeaderDashboard conteudo={conteudo} setConteudo={handleClick} />
      <div className='flex flex-row gap-10'>
        <div className='max-lg:hidden'>
          <SidebarDashboard setConteudo={handleClick} />
        </div>
        <div className='flex-grow w-full flex gap-5 flex-col'>
          <ModalAddSitio idEmpresa={empresa?.id?empresa.id:0} onAddIndustria={onAddIndustria}></ModalAddSitio>
          <DropDownIndustria label='Industria' onChange={changeIndustria} industrias={industriasList} />
          {conteudoChanger()}
        </div>
      </div>
    </div>
  );
}