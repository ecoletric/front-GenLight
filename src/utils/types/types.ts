export type EmpresaType = {
    cnpj:string,
    email:string,
    idEndereco:number,
    nome:string,
    senha:string
}

export type EmpresaFinal={
    id:number
}& EmpresaType

export type viacepTipo = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };

  export type enderecoTipo={
    cep:string
    nomeLogradouro:string
    numeroLogradouro:number
    uf:string
    cidade:string,
    bairro:string
    complemento?:string;
}

export type endFinalTipo={
    idEndereco:number
} & enderecoTipo