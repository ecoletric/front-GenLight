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

export type industriaType={
    idEmpresa:number,
    nome:string
}

export type AparelhoGeradorType={
    sitio:number,
    tipo:number,
    potencia:number
}

export type aparelhoGeradorFinal={
    id:number
}& AparelhoGeradorType

export type MaquinaType={
    consumo:number,
    idSitio:number,
    nome:string
}

export type maquinaFinal={
    id:number
}& MaquinaType

export type industriaFinal={
    id:number
}& industriaType

export type sitioType={
    idEndereco:number,
    idIndustria:number,
    tipoFonte:number
}

export type sitioConsumo={
    energiaProduzida?:number,
    consumo?:number
}& sitioType & sitioFinal

export type sitioFinal={
    id:number
}& sitioType

export type previsaoSolar = {
    energia_diaria_estimada : number
}
export type previsaoEolica = {
    energia_eolica : number,
    id_sitio : number,
    potencia : number,
    predicted_power : number
}
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
    id:number
} & enderecoTipo