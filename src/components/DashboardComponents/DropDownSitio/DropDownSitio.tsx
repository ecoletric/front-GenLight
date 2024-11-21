"use client";
import React from 'react';
import { sitioConsumo } from '@/utils/types/types';

type DropDownSitioProps = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sitios: sitioConsumo[];
};

export default function DropDownSitio({ label, onChange, sitios }: DropDownSitioProps) {
  return (
    <div className="flex flex-col areaDropDown">
      <label className="mt-3 font-semibold text-lg">{label}</label>
      <select
        className="rounded-xl p-3 border-2 border-primary shadow-xl"
        onChange={onChange}
        name={label}
      >
        {sitios.map((sitio) => (
          <option key={sitio.id} value={sitio.id}>
            {sitio.tipoFonte === 0 ? 'Máquina' : 'Aparelho Gerador'} {sitio.consumo} kWh
          </option>
        ))}
      </select>
    </div>
  );
}