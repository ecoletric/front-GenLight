import { sitioFinal } from '@/utils/types/types';
import React from 'react';

type TabelaSitiosProps = {
  sitios: sitioFinal[];
};

export default function TabelaSitios({ sitios }: TabelaSitiosProps) {
    return (

        <table className="min-w-full max-sm:text-sm bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-2 px-4 border-r">Id</th>
              <th className="text-left py-2 px-4 border-r">Id Endereco</th>
              <th className="text-left py-2 px-4 border-r">Id Industria</th>
              <th className="text-left py-2 px-4">Tipo Fonte</th>
            </tr>
          </thead>
          <tbody>
            {sitios.map((sitio) => (
              <tr key={sitio.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 border-r">{sitio.id}</td>
                <td className="py-2 px-4 border-r">{sitio.idEndereco}</td>
                <td className="py-2 px-4 border-r">{sitio.idIndustria}</td>
                <td className="py-2 px-4">{sitio.tipoFonte}</td>
              </tr>
            ))}
          </tbody>
        </table>

    );
  }