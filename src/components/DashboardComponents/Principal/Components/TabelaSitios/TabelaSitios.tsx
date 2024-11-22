import EolicoModal from '@/components/DashboardComponents/Eolico/EolicoModal';
import SolarModal from '@/components/DashboardComponents/Solar/SolarModal';
import { sitioConsumo } from '@/utils/types/types';
import Image from 'next/image';
import React from 'react';

type TabelaSitiosProps = {
  sitios: sitioConsumo[];
};

export default function TabelaSitios({ sitios }: TabelaSitiosProps) {
  
  const handleDelete = async (id:number) => {
    const confirmDelete = confirm('Deseja realmente deletar este sitio?');
    if (confirmDelete) {
      const res = await fetch(`https://localhost:8080/sitio/${id}`,{
        method: 'DELETE',
      });
      if (res.ok) {
        alert('Sitio deletado com sucesso!');
        window.location.reload();
      } else {
        alert('Erro ao deletar sitio!');
      }
    }
  };

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100 border-b">
          <th className="text-left py-2 px-4 border-r">Id</th>
          <th className="text-left py-2 px-4 border-r">Id Endereco</th>
          <th className="text-left py-2 px-4 border-r">Id Industria</th>
          <th className="text-left py-2 px-4 border-r">Tipo Fonte</th>
          <th className="text-left py-2 px-4 border-r">Energia Produzida</th>
          <th className="text-left py-2 px-4 border-r">Consumo</th>
          <th className="text-left py-2 px-4">Ações</th>
        </tr>
      </thead>
      <tbody>
        {sitios.map((sitio) => (
          <tr key={sitio.id} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4 border-r">{sitio.id}</td>
            <td className="py-2 px-4 border-r">{sitio.idEndereco}</td>
            <td className="py-2 px-4 border-r">{sitio.idIndustria}</td>
            <td className="py-2 px-4 border-r">{sitio.tipoFonte === 1 ? 'Solar' : sitio.tipoFonte === 0 ? 'Maquinas' : 'Eolico'}</td>
            <td className="py-2 px-4 border-r">{sitio.energiaProduzida ?? 'N/A'}</td>
            <td className="py-2 px-4 border-r">{sitio.consumo ?? 'N/A'}</td>
            <td className="py-2 px-4 w-full flex gap-2">
              <button onClick={() => handleDelete(sitio.id)}>
                <Image height={20} width={20} src="./lixeira.svg" alt="Delete" />
              </button>
              {
                sitio.tipoFonte == 0 ? '' : sitio.tipoFonte == 1 ? (
                    <SolarModal idSitio={sitio.id} />
                ) : (
                  <EolicoModal idSitio={sitio.id}/>
                )
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}