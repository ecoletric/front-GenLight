export default function Cadastro(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-background">

            <form className="p-8 w-[700px] mx-auto rounded-lg shadow-md bg-white">
                <h1 className="text-2xl mb-4 text-center text-primary">Cadastro</h1>

                <label className="block text-gray-700 font-semibold mb-2">Nome da empresa: </label>
                <input type="text" name="Nome da empresa" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">CNPJ: </label>
                <input type="text" name="CNPJ" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">E-mail: </label>
                <input type="email" name="Email" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">CEP: </label>
                <input type="text" name="CEP" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">Número: </label>
                <input type="number" name="Número" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">Senha: </label>
                <input type="password" name="Senha" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <label className="block text-gray-700 font-semibold mb-2">Confirmar senha: </label>
                <input type="password" name="Confirmar senha" className="w-full px-4 py-2 mb-4 border-2 border-purple-custom-1 rounded-md focus:outline-none focus:border-purple-500"></input>

                <div className="text-center">
                    <button type="submit" className="px-4 py-2 bg-purple-custom-1 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}