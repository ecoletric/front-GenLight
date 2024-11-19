import { sitioConsumo } from '@/utils/types/types';
import React from 'react';

type TabelaSitiosProps = {
  sitios: sitioConsumo[];
};

export default function TabelaSitios({ sitios }: TabelaSitiosProps) {
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
            <th className="text-left py-2 px-4">Consumo</th>
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
              <td className="py-2 px-4">{sitio.consumo ?? 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}