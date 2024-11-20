import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea'
import { enderecoTipo, endFinalTipo, sitioFinal, sitioType, viacepTipo } from '@/utils/types/types';
import React, { useState } from 'react'



type FormAddSitioProps = {
    onSitioCadastrado: (sitio: sitioFinal) => void;
    idIndustria: number;
  };



export default function FormAddSitio({onSitioCadastrado,idIndustria}: FormAddSitioProps) {

    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [tipoFonte, setTipoFonte] = useState(0);
    const maskCEP = (value: string): string => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d{3})$/, '$1-$2');
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

      const guardaSitio = async (sitio:sitioType) => {
        const res = await fetch("http://localhost:8080/sitio",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(sitio),
        })
        return res
    }

      const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cep.length != 9) {
            console.log(cep,cep.length)
            alert("Cep inválido");
            return;
        }
        const via = await viaCep(cep)
        if(!via){
            console.error("Erro ao obter o endereço com o CEP fornecido.");
            return;
        }
        const cleanedCEP = cep.replace(/\D/g, "");

        if(cep.length == 9){
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
            const endRes : endFinalTipo = await resVia.json();
            console.log(idIndustria)
            const sitio: sitioType = {
                idEndereco: endRes.id,
                idIndustria: idIndustria,
                tipoFonte: tipoFonte,
            };
            const resSitio = await guardaSitio(sitio)
            if(resSitio.ok){
                alert("Cadastro realizado com sucesso!")
                const sitioFinal : sitioFinal = await resSitio.json();
                onSitioCadastrado(sitioFinal)
            }
        }
        }    
        };



        return (
            <div>
                <fieldset>
                    <form onSubmit={handleSubmit} action="">
                    <InputArea
                        value={cep}
                        required
                        onChange={valor =>setCep(maskCEP(valor))}
                        label="CEP"
                        placeHolder="Digite o CEP"  
                    />
                    <InputArea
                        value={numero}
                        required
                        onChange={valor =>setNumero(valor)}
                        label="Número"
                        placeHolder="Digite o número"
                        tipo="number"
                    />
                    <div className="flex flex-col gap-2">
                        <label>
                        <input
                            type="radio"
                            value={0}
                            checked={tipoFonte === 0}
                            onChange={() => setTipoFonte(0)}
                        />
                        Máquinas
                        </label>
                        <label>
                        <input
                            type="radio"
                            value={1}
                            checked={tipoFonte === 1}
                            onChange={() => setTipoFonte(1)}
                        />
                        Solar
                        </label>
                        <label>
                        <input
                            type="radio"
                            value={2}
                            checked={tipoFonte === 2}
                            onChange={() => setTipoFonte(2)}
                        />
                        Eólico
                        </label>
                    </div>
                        <Botao tipo="submit">Salvar</Botao>
                    </form>
                </fieldset>
            </div>
        )
}
