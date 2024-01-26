const MyFirstComponent = () => {

    const listaDeNomes = [
        {nome: "Guilherme", idade: 21, email: "gui12@gmail.com"},
        {nome: "Pedro", idade: 30, email: "pedro@gmail.com"},
        {nome: "Pablo", idade: 14, email: "pablo@gmail.com"},
        {nome: "Carlos", idade: 67, email: "carlos@gmail.com"},
        {nome: "Mariana", idade: 20, email: "mariana@gmail.com"},
        {nome: "Julia", idade: 34, email: "julia@gmail.com"}
    ]

    return (
        <>
        <h3>Pessoas e todas as informações</h3>
            {listaDeNomes.map((obj) => (
                <li>{obj.nome}, {obj.idade}, {obj.email}</li>
            ))}
            <h3>Pessoas com nome grande</h3>
            {listaDeNomes.map((pessoa) => (
                pessoa.nome.length > 5 && <li>{pessoa.nome}</li>
            ))}
        </>
    );
}

export default MyFirstComponent