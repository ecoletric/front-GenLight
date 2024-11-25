import React, { useRef, useEffect, useState } from 'react';
import { previsaoSolar } from '@/utils/types/types';
import { FaSolarPanel } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

type ModalPrevSolar = {
  idSitio: number;
};

const SolarModal = ({ idSitio }: ModalPrevSolar) => {
  const [previsao, setPrevisao] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLDialogElement>(null);
  const [show, setShow] = useState(false);

  const prevSolar = async (idSitio: number) => {
    try {
      console.log('Fetching data for idSitio:', idSitio); // Adicionando log
      const response = await fetch(`/api/predict-solar/${idSitio}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar previsão solar');
      }
      const data: previsaoSolar = await response.json();
      setPrevisao(data.energia_diaria_estimada);
    } catch (error) {
      console.error('Erro: ' + error);
      setPrevisao(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSolarPrev = () => {
    console.log('handleSolarPrev called with idSitio:', idSitio); // Adicionando log
    setShow(true);
    setLoading(true);
    prevSolar(idSitio);

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
        <FaSolarPanel
          size={20}
          color="#d3b81f"
          className="hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick={handleSolarPrev}
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
                <FaSolarPanel size={80} color="#d3b81f" />
                <p className='text-center font-medium'>
                  {previsao !== null ? `A previsão de geração de energia solar para o seu sítio é de ${previsao.toFixed(2)} kW` : 'Sem previsão solar para sua cidade!'}
                </p>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default SolarModal;