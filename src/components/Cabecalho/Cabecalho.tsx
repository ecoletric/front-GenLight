"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { EmpresaFinal } from "@/utils/types/types";

export default function Cabecalho(){
    
  const [empresa, setEmpresa] = useState<EmpresaFinal | null>(null);

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
    chamadaEmpresa();
  }, []);
  
  
  return(
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <Logo />
        
        <nav className="flex items-center space-x-6">
          <Link href="/">Sobre</Link>
          <Link href={empresa?"/dashboard":'/cadastro'} className="px-4 py-2 bg-purple-custom-1 text-white rounded-md hover:bg-purple-700">Para Empresas</Link>
        </nav>
      </header>
    )
  }