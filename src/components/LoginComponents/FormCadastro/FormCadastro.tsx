"use client";

import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import InputArea from "@/components/InputArea/InputArea";
import { EmpresaType, enderecoTipo, endFinalTipo, viacepTipo } from "@/utils/types/types";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import HomeButton from "@/components/HomeButton/HomeButton";

const FormCadastro = () => {
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const maskCEP = (value: string): string => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d{3})$/, '$1-$2');
      };

      const maskCNPJ = (value: string): string => {
        return value
          .replace(/\D/g, '') 
          .replace(/^(\d{2})(\d)/, '$1.$2') 
          .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') 
          .replace(/\.(\d{3})(\d)/, '.$1/$2') 
          .replace(/(\d{4})(\d)/, '$1-$2'); 
      };

      async function  guardarEndereco(endereco:enderecoTipo){
        const res = await fetch("http://localhost:8080/endereco",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(endereco),
        })
        return res
    }
    async function  guardarEmpresa(empresa:EmpresaType){
        const res = await fetch("http://localhost:8080/empresa",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(empresa),
        })
        return res
    }
    const nav = useRouter()

    const viaCep = async (cep: string) => {
        try {
          cep.replace("-","")
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.ok) {
            throw new Error(`Erro ao buscar CEP: ${response.statusText}`);
          }
          const data: viacepTipo = await response.json();
          return data;
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
        }
      };

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (senha !== confirmarSenha && !email.includes('@') && cep.length != 8) {
            alert("As senhas não coincidem.");
            return;
        }
        const via = await viaCep(cep)
        if(!via){
            console.error("Erro ao obter o endereço com o CEP fornecido.");
            return;
        }
        const cleanedCEP = cep.replace(/\D/g, "");
        const cleanedCNPJ = cnpj.replace(/\D/g, "");

        if(senha == confirmarSenha && email.includes('@') && cep.length == 9){
        const endereco: enderecoTipo = {
            cep: cleanedCEP,
            nomeLogradouro: via.logradouro,
            numeroLogradouro: parseInt(numero),
            uf: via.uf,
            cidade: via.localidade,
            bairro: via.bairro,
            complemento: "complmento isnano",
          };
          const resVia  = await guardarEndereco(endereco)
          if(resVia.ok){
            console.log("Endereço cadastrado com sucesso")
            const endRes : endFinalTipo = await resVia.json();
            console.log(endRes)
            const empresa : EmpresaType = {
            nome: nomeEmpresa,
            cnpj:cleanedCNPJ,
            email: email,
            senha: senha,
            idEndereco: endRes.id
            }
            console.log(empresa)
            const resEmpresa = await guardarEmpresa(empresa)
            if(resEmpresa.ok){
                alert("Cadastro realizado com sucesso!")
                nav.push('/login')
            }
        }

        }
        
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="p-8 w-[700px] mx-auto rounded-lg shadow-md bg-white">
            <h1 className="text-2xl mb-4 font-medium text-primary">Cadastro</h1>

            <InputArea
                value={nomeEmpresa}
                required
                onChange={valor =>setNomeEmpresa(valor)}
                label="Nome da empresa"
                placeHolder="Digite o nome da empresa"
            />

            <InputArea
                value={cnpj}
                required
                onChange={valor =>setCnpj(maskCNPJ(valor))}
                label="CNPJ"
                placeHolder="Digite o CNPJ"
                max_length={18}
            />

            <InputArea
                value={email}
                required
                onChange={valor =>setEmail(valor)}
                label="E-mail"
                placeHolder="Digite o e-mail"
                tipo="email"
            />

            <InputArea
                value={cep}
                required
                onChange={valor =>setCep(maskCEP(valor))}
                label="CEP"
                placeHolder="Digite o CEP"
                max_length={9}
            />

            <InputArea
                value={numero}
                required
                onChange={valor =>setNumero(valor)}
                label="Número"
                placeHolder="Digite o número"
                tipo="number"
            />

            <InputArea
                value={senha}
                required
                onChange={valor =>setSenha(valor)}
                label="Senha"
                placeHolder="Digite a senha"
                tipo="password"
            />

            <InputArea
                value={confirmarSenha}
                required
                onChange={valor =>setConfirmarSenha(valor)}
                label="Confirmar senha"
                placeHolder="Confirme a senha"
                tipo="password"
            />
            <label className="w-full flex items-center text-lg justify-center gap-2">Já possui conta?<Link className="font-semibold text-blue-600" href={"/login"}>Clique aqui</Link></label>
            <div className="text-center flex w-full items-center justify-center">
                <Botao tipo="submit">Cadastrar</Botao>
            </div>
        </form>
        <HomeButton></HomeButton>
        </>
    );
};

export default FormCadastro;
