import React, { useRef, useEffect, useState } from 'react'; 
import { industriaFinal } from '@/utils/types/types';
import FormAddIndustria from './FormAddIndustria/FormAddIndustria';


type ModalAdicionarSitio = {
    idEmpresa: number;
    onAddIndustria: (industria: industriaFinal) => void;
  };
  
  const ModalAddSitio = ({ onAddIndustria,idEmpresa }: ModalAdicionarSitio) => {
    const ref = useRef<HTMLDialogElement>(null);
    const [show, setShow] = useState(false);
  
    const handleAddIndustria = (industria: industriaFinal) => {
        onAddIndustria(industria);
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
        <button onClick={() => setShow(true)} className="px-4 py-2 bg-purple-custom-1 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors" type='button'>Adicionar Industria</button>
        </div>
        <dialog ref={ref} className={`absolute w-[26rem] z-50 pr-2 p-5 ${show ? "open" : ""}`}>
          <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">
            <button className="btnClose" onClick={() => setShow(false)}>X</button>
          </div>
          <FormAddIndustria idEmpresa={idEmpresa} onIndustriaCadastrada={handleAddIndustria} />
        </dialog>
      </>
    );
  };
  
  export default ModalAddSitio;