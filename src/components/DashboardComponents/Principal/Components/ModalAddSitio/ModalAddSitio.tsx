import React, { useRef, useEffect, useState } from 'react';
import Botao from '@/components/Botao/Botao';  
import { sitioFinal } from '@/utils/types/types';
import FormAddSitio from './FormAddSitio/FormAddSitio';

type ModalAdicionarSitio = {
    idIndustria: number;
    onAddSitio: (sitio: sitioFinal) => void;
  };
  
  const ModalAddSitio = ({ onAddSitio, idIndustria }: ModalAdicionarSitio) => {
    const ref = useRef<HTMLDialogElement>(null);
    const [show, setShow] = useState(false);
  
    const handleAddSitio = (sitio: sitioFinal) => {
      onAddSitio(sitio);
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
          <Botao tipo="button" onClick={() => setShow(true)}>Adicionar Sitio</Botao>
        </div>
        <dialog ref={ref} className={`absolute w-[26rem] z-50 pr-2 p-5 ${show ? "open" : ""}`}>
          <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">
            <button className="btnClose" onClick={() => setShow(false)}>X</button>
          </div>
          <FormAddSitio idIndustria={idIndustria} onSitioCadastrado={handleAddSitio} />
        </dialog>
      </>
    );
  };
  
  export default ModalAddSitio;