import React, { useEffect, useState } from 'react';
import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea';
import { sitioFinal, MaquinaType, maquinaFinal, AparelhoGeradorType, aparelhoGeradorFinal } from '@/utils/types/types';
import DropDownSitio from '@/components/DashboardComponents/DropDownSitio/DropDownSitio'; 

type FormAddFonteProps = {
  onFonteCadastrada: (fonte: maquinaFinal | aparelhoGeradorFinal,tipo:number) => void;
  sitios: sitioFinal[];
};

export default function FormAddFonte({ onFonteCadastrada, sitios }: FormAddFonteProps) {
  const [sitioSelected, setSitioSelected] = useState<sitioFinal | null>(null);
  const [nome, setNome] = useState('');
  const [consumo, setConsumo] = useState('');
  const [potencia, setPotencia] = useState('');
  const [quantidade,setQauantidade] = useState(0);

  const handleSitioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedSitio = sitios.find((sitio) => sitio.id === selectedId) || null;
    setSitioSelected(selectedSitio);
  };

  useEffect(() => {
    if (sitios.length > 0) {
      setSitioSelected(sitios[0]);
    }
  }, [sitios]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sitioSelected) {
      alert('Por favor, selecione um sítio.');
      return;
    }

    if (sitioSelected.tipoFonte === 0) {
      const maquina: MaquinaType = {
        nome,
        consumo: parseFloat(consumo),
        idSitio: sitioSelected.id,
      };

      try {
        for (let i = 0; i <= quantidade; i++) {

        const res = await fetch('http://localhost:8080/maquina', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(maquina),
        });

        if (res.ok) {
          const maquinaCadastrada: maquinaFinal = await res.json();
          onFonteCadastrada(maquinaCadastrada,sitioSelected.tipoFonte);
        }
      }
        alert('Máquina cadastrada com sucesso!');
        setNome('');
        setConsumo('');
      } catch (error) {
        console.error('Erro ao cadastrar máquina:', error);
      }
    } else {
      const aparelho: AparelhoGeradorType = {
        sitio: sitioSelected.id,
        tipo: sitioSelected.tipoFonte,
        potencia: parseFloat(potencia),
      };
      console.log(aparelho)
      try {
        for (let i = 0; i<= quantidade; i++) {
          const res = await fetch('http://localhost:8080/aparelho-gerador', {
            method: 'POST',
              headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(aparelho),
          });     
          if (res.ok) {
            const aparelhoCadastrado: aparelhoGeradorFinal = await res.json();
            onFonteCadastrada(aparelhoCadastrado,sitioSelected.tipoFonte);
          }
        }
        setPotencia('');
        alert('Aparelho gerador cadastrado com sucesso!');
      } catch (error) {
        console.error('Erro ao cadastrar aparelho gerador:', error);
      }
    }
  };

  return (
    <div>
      <fieldset>
        <form onSubmit={handleSubmit}>

          <DropDownSitio label="Selecione um Sítio" onChange={handleSitioChange} sitios={sitios} />

          {sitioSelected && sitioSelected.tipoFonte === 0 ? (

            <div>
              <InputArea
                value={nome}
                required
                onChange={(valor) => setNome(valor)}
                label="Nome da Máquina"
                placeHolder="Digite o nome da máquina"
              />
              <InputArea
                value={consumo}
                required
                tipo="number"
                onChange={(valor) => setConsumo(valor)}
                label="Consumo"
                placeHolder="Digite o consumo da máquina"
              />
              <InputArea
              value={String(quantidade)}
              required
              tipo="number"
              onChange={(valor) => setQauantidade(parseInt(valor))}
              label="Quantidade"
              placeHolder="Digite a quantidade de máquinas"
              />
            </div>
          ) : sitioSelected ? (
            <div>
              <InputArea
                value={potencia}
                required
                tipo="number"
                onChange={(valor) => setPotencia(valor)}
                label="Potência"
                placeHolder="Digite a potência do aparelho"
              />
              <InputArea
              value={String(quantidade)}
              required
              tipo="number"
              onChange={(valor) => setQauantidade(parseInt(valor))}
              label="Quantidade"
              placeHolder="Digite a quantidade de máquinas"
              />
            </div>
          ) : (
            <p>Por favor, selecione um sítio para continuar.</p>
          )}
          <Botao tipo="submit">Salvar</Botao>
        </form>
      </fieldset>
    </div>
  );
}