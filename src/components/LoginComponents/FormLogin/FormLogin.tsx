"use client"
import { useEffect, useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea";
import { useRouter } from "next/navigation";
import { EmpresaType } from "@/utils/types/types";
import Link from "next/link";
import HomeButton from "@/components/HomeButton/HomeButton";


const maskCNPJ = (value: string): string => {
    return value
        .replace(/\D/g, '') 
        .replace(/(\d{2})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d)/, '$1/$2') 
        .replace(/(\d{4})(\d{1,2})$/, '$1-$2'); 
};
  
const FormLogin = ()=>{
    const [inputCnpj, setinputCnpj] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [listaEmpresas,setListaEmpresas] = useState<EmpresaType[]>();
    const nav = useRouter();

    useEffect(()=>{
        const chamaApi = async () => {
            try{
            const res = await fetch("http://localhost:8080/empresa")
            const data :EmpresaType[] = await res.json()
            setListaEmpresas(data)
            
        }catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }
        chamaApi()
    },[])

    const removeMaskCNPJ = (value: string): string => {
        return value.replace(/\D/g, ''); // Remove tudo que não é número
      };

    const validar = (e: React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault();
        if (!listaEmpresas) {
            console.log("Usuários ainda não foram carregados.");
            return;
        }
        const cleanedCNPJ = removeMaskCNPJ(inputCnpj);
        if(listaEmpresas != undefined){
        let empresaAchada = false;
        for(let x = 0; x < listaEmpresas.length; x++){
            const empresa = listaEmpresas[x];
            if(empresa.cnpj === cleanedCNPJ && empresa.senha === inputSenha){
                sessionStorage.setItem("empresa", JSON.stringify(empresa));
                setinputCnpj("");
                setInputSenha("");
                console.log("Logado");
                empresaAchada = true;
                nav.push("/")
                break;
            }
        }
        if (!empresaAchada) {
            console.log("Nenhum user encontrado");
        }
    }
    }

    return(
        <>
        <fieldset className="w-[30rem] rounded-xl border-[#AA93B7] border-2 bg-white p-5 shadow-md">
            <h1 className="text-4xl mb-5 font-medium">Entrar</h1>
            <form className="flex flex-col" onSubmit={validar}>
                <InputArea
                value={inputCnpj}
                required={true}
                onChange={(valor: string) => setinputCnpj(maskCNPJ(valor))}
                label="CNPJ"
                placeHolder="Digite seu CPF (XX.XXX.XXX/XXXX-XX)"
                max_length={18}
                />
                <InputArea
                value={inputSenha}
                required={true}
                onChange={valor => setInputSenha(valor)}
                label="Senha"
                placeHolder="Digite sua senha"
                />
                <label className="w-full flex items-center text-lg justify-center gap-2">Quer se cadastrar?<Link className="font-semibold text-blue-600" href={"/cadastro"}>Clique aqui</Link></label>
                <div className="p-3 w-full flex items-center justify-center">
                <Botao tipo="submit">Acessar Conta</Botao>
                </div>
            </form>
        </fieldset>
        <HomeButton></HomeButton>
        </>
    )
}

export default FormLogin