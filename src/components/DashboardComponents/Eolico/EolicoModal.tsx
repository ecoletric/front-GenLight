import React, { useRef, useEffect, useState } from 'react';
import { previsaoEolica } from '@/utils/types/types';
import { FaWind } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

type ModalPrevEolico = {
  idSitio: number;
};

const EolicoModal = ({ idSitio }: ModalPrevEolico) => {
  const [previsao, setPrevisao] = useState<previsaoEolica['energia_eolica']>(-1);
  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLDialogElement>(null);
  const [show, setShow] = useState(false);

  const prevEolico = async (idSitio: number) => {
      console.log('Fetching data for idSitio:', idSitio); // Adicionando log
      const response = await fetch(`/api/predict-eolic/${idSitio}`);
      if (!response.ok) {
        throw new Error();
      }
      const data: previsaoEolica = await response.json();
      setPrevisao(data.energia_eolica);
      console.log(data)
      setLoading(false);
  };

  const handleEolicoPrev = () => {
    setShow(true);
    setLoading(true);
    prevEolico(idSitio);

    setTimeout(() => {
      setLoading(false);
    }, 10000);
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
        <FaWind
          size={20}
          color="#1f5ed3"
          className="hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick={handleEolicoPrev}
        />
      </div>
      {show && (
        <dialog
          ref={ref}
          className={`absolute w-[26rem] z-50 pr-2 p-5 shadow-lg rounded-lg ${show ? 'open' : ''}`}
        >
          <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">
            <button className="btnClose" onClick={() => setShow(false)}>
              <FaX color='#c46558' size={15} /> 
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            {loading ? (
              <div className="spinner">
                {/* Implementação do spinner de carregamento */}
                <p>Carregando...</p>
              </div>
            ) : (
              <>
                <FaWind size={80} color="#1f5ed3" />
                <p className='text-center font-medium'>
                  {previsao != 0 ? `A previsão de geração de energia para o seu sítio é de ${previsao.toFixed(2)} kw` : 'Sem previsão para sua cidade!'}
                </p>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default EolicoModal;