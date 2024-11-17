type InputArea={
    label : string;
    required: boolean;
    placeHolder : string;
    disable ?: boolean;
    value ?: string;
    onChange ?: (valor : string) =>void;
    tipo ?: string;
    max_length ?: number;
    pattern?:string
}

const InputArea = ({onChange,value,label,required ,placeHolder, disable,tipo,max_length,pattern}:InputArea)=>{

    const aoDigitado = (e :string)=>{
        if(onChange != undefined){
            onChange(e)
        } 
    }

    return(
        <>
        <label className="block text-gray-700 font-semibold mb-2">{label}</label>
        <input
        className={`${disable==true? "bg-gray-300" : ""} w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500`}
        value={value}
        required={required}
        placeholder={placeHolder}
        type={tipo}
        disabled={disable}
        maxLength={max_length}
        pattern={pattern}
        onChange={e => aoDigitado(e.target.value)}>
        </input>
        </>
    )
}

export default InputArea