import { sitioFinal } from '@/utils/types/types';
import React from 'react'

type TabelaSitiosProps = {
    sitios: sitioFinal[];
    }

export default function TabelaSitios({sitios}: TabelaSitiosProps) {
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Id Endereco</th>
                <th>Id Industria</th>
                <th>Tipo Fonte</th>
            </tr>
            </thead>
            <tbody>
            {sitios.map((sitio) => (
                <tr key={sitio.id}>
                <td>{sitio.id}</td>
                <td>{sitio.idEndereco}</td>
                <td>{sitio.idIndustria}</td>
                <td>{sitio.tipoFonte}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
