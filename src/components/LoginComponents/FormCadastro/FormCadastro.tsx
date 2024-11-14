"use client";

import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import InputArea from "@/components/InputArea/InputArea";

const FormCadastro = () => {
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (senha !== confirmarSenha && !email.includes('@') && cep.length != 8) {
            alert("As senhas não coincidem.");
            return;
        }
        console.log({
            nomeEmpresa,
            cnpj,
            email,
            cep,
            numero,
            senha,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 w-[700px] mx-auto rounded-lg shadow-md bg-white">
            <h1 className="text-2xl mb-4 font-medium text-primary">Cadastro</h1>

            <InputArea
                value={nomeEmpresa}
                required
                onChange={setNomeEmpresa}
                label="Nome da empresa"
                placeHolder="Digite o nome da empresa"
            />

            <InputArea
                value={cnpj}
                required
                onChange={setCnpj}
                label="CNPJ"
                placeHolder="Digite o CNPJ"
            />

            <InputArea
                value={email}
                required
                onChange={setEmail}
                label="E-mail"
                placeHolder="Digite o e-mail"
                tipo="email"
            />

            <InputArea
                value={cep}
                required
                onChange={setCep}
                label="CEP"
                placeHolder="Digite o CEP"
            />

            <InputArea
                value={numero}
                required
                onChange={setNumero}
                label="Número"
                placeHolder="Digite o número"
                tipo="number"
            />

            <InputArea
                value={senha}
                required
                onChange={setSenha}
                label="Senha"
                placeHolder="Digite a senha"
                tipo="password"
            />

            <InputArea
                value={confirmarSenha}
                required
                onChange={setConfirmarSenha}
                label="Confirmar senha"
                placeHolder="Confirme a senha"
                tipo="password"
            />

            <div className="text-center flex w-full items-center justify-center">
                <Botao tipo="submit">Cadastrar</Botao>
            </div>
        </form>
    );
};

export default FormCadastro;
