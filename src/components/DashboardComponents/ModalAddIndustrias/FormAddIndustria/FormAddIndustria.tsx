import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea'
import {  industriaFinal, industriaType } from '@/utils/types/types';
import React, { useState } from 'react'



type FormAddIndustriaType = {
    onIndustriaCadastrada: (industria: industriaFinal) => void;
    idEmpresa: number;
  };


export default function FormAddIndustria({onIndustriaCadastrada,idEmpresa}: FormAddIndustriaType) {
    
    
    const [nomeIndustria, setNomeIndustria] = useState("");

    const guardaIndustria = async (industria:industriaType) => {
        const res = await fetch("http://localhost:8080/industria",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(industria),
        })
        return res
    }

      const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const industria = {
            idEmpresa:idEmpresa? idEmpresa:0,
            nome: nomeIndustria
        }
        const res = await guardaIndustria(industria)
        if(res.ok){
            const data: industriaFinal = await res.json()
            onIndustriaCadastrada(data)
            setNomeIndustria("")
            window.location.reload();
        }
    }
        


        return (
            <div>
                <fieldset>
                    <form onSubmit={handleSubmit} action="">
                    <InputArea
                        value={nomeIndustria}
                        required
                        onChange={valor =>setNomeIndustria(valor)}
                        label="Nome"
                        placeHolder="Digite o nome da industria"  
                    />
                    
                        <Botao tipo="submit">Salvar</Botao>
                    </form>
                </fieldset>
            </div>
        )
}

