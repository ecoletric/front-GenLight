import Image from "next/image";

type BotaoProps = {
    children: React.ReactNode;
    tipo: "submit" | "reset" | "button" | undefined
    onClick?: () => void
    img?: string
}

const Botao = ({ onClick, children, tipo, img }: BotaoProps) => {

    return (
        <div onClick={onClick}  className="group cursor-pointer flex flex-row justify-center items-center hover:bg-primary hover:text-white font-semibold text-lg w-2/5 rounded-xl p-3 ">
            {img ? <Image height={40} width={40} className="h-10 group-hover:invert" src={img} alt="Imagem do botão" /> : <></>}
            <button className="px-4 py-2 bg-purple-custom-1 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors" type={tipo}>{children}</button>
        </div>
    )
}

export default Botao