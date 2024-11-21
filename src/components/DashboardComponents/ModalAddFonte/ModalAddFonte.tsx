import React, { useRef, useEffect, useState } from 'react';
import Botao from '@/components/Botao/Botao';  
import { aparelhoGeradorFinal, maquinaFinal, sitioFinal } from '@/utils/types/types';
import FormAddFonte from './FormAddFonte/FormAddFonte';



type ModalAdicionarSitio = {
    idIndustria: number;
    sitios: sitioFinal[];
    onAddFonte: (fonte: maquinaFinal | aparelhoGeradorFinal, tipo:number) => void;
  };
  
  const ModalAddFonte = ({ onAddFonte, idIndustria,sitios }: ModalAdicionarSitio) => {
    const ref = useRef<HTMLDialogElement>(null);
    const [show, setShow] = useState(false);
    const handleAddSitio = (fonte: maquinaFinal | aparelhoGeradorFinal,tipo:number) => {
        onAddFonte(fonte,tipo);
        setShow(false);
    };
  
    useEffect(() => {
      const dialog = ref.current;
      if (show && dialog) {
        dialog.showModal();
      } else if (dialog) {
        dialog.close();
      }
    }, [show]);
  
    return (
      <>
        <div className="flex">
        <button className="px-4 py-2 h-10 bg-purple-custom-1 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors" onClick={() => setShow(true)} type={"button"}>Adicionar Fonte</button>
        </div>
        <dialog ref={ref} className={`absolute w-[26rem] z-50 pr-2 p-5 ${show ? "open" : ""}`}>
          <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">
            <button className="btnClose" onClick={() => setShow(false)}>X</button>
          </div>
          <FormAddFonte sitios={sitios} onFonteCadastrada={handleAddSitio} />
        </dialog>
      </>
    );
  };
  
  export default ModalAddFonte;