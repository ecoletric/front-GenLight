export default function Cadastro(){
    return(
        <div>
            <h1>Cadastro</h1>
            <form>
                <label>Nome da empresa: </label>
                <input type="text" name="Nome da empresa"></input>
                <label>CNPJ: </label>
                <input type="text" name="CNPJ"></input>
                <label>E-mail: </label>
                <input type="email" name="Email"></input>
                <label>CEP: </label>
                <input type="text" name="CEP"></input>
                <label>Número: </label>
                <input type="number" name="Número"></input>
                <label>Senha: </label>
                <input type="password" name="Senha"></input>

                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}