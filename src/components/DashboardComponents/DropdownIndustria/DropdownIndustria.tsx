
import { industriaFinal } from '@/utils/types/types';
import React from 'react';

type DropDownProps = {
    label: string;
    onChange: (valor: React.ChangeEvent<HTMLSelectElement>) => void;
    industrias: industriaFinal[];
}

export default function DropDownIndustria({ label, onChange, industrias }: DropDownProps) {
    return (
        <div className="flex flex-col areaDropDown">
            <label className="mt-3 font-semibold text-lg"> {label}</label>
            <select className="rounded-xl p-3 border-2 border-primary shadow-xl" onChange={valor => onChange(valor)} name={label}>
                {industrias.map(industria => (
                    <option key={industria.id} value={industria.id}>
                        {industria.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}