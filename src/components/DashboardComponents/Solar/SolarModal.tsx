import React, { useRef, useEffect, useState } from 'react';

import { previsaoSolar } from '@/utils/types/types';
import { FaSolarPanel } from 'react-icons/fa';



type ModalPrevSolar = {
    idSitio: number;
  };
  
  const SolarModal = ({idSitio }: ModalPrevSolar) => {
    const [previsao, setPrevisao] = useState<previsaoSolar['energia_diaria_estimada']>(0)

    const prevSolar = async(idSitio : number) => {
      try{
        const response = await fetch(`localhost:5000/predict-solar/${idSitio}`)
        if (!response.ok){
          throw new Error()
        }
        const data : previsaoSolar['energia_diaria_estimada'] = await response.json()
        setPrevisao(data)
      } catch (error){
        console.error("Erro: " + error)
      }

    }

    
    // const [activeApi, setActiveApi] = useState<boolean>(false)

    const ref = useRef<HTMLDialogElement>(null);
    const [show, setShow] = useState(false);
  
    const handleSolarPrev = () => {
      prevSolar(idSitio)
      setShow(true);
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
          <FaSolarPanel size={20} color='#d3b81f' className='hover:scale-110 transition-all duration-300 cursor-pointer' onClick={() => handleSolarPrev()}/>
        </div>
        <dialog ref={ref} className={`absolute w-[26rem] z-50 pr-2 p-5 ${show ? "open" : ""}`}>
          <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">
            <button className="btnClose" onClick={() => setShow(false)}>X</button>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <FaSolarPanel size={80} color='#d3b81f' />
            <p>{previsao ?? 'Sem previsão solar para sua cidade!'}</p>
          </div>

        </dialog>
      </>
    );
  };
  
  export default SolarModal;