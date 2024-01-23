const MyFirstComponent = () => {

    const listaDeNomes = ["Guilherme", "João", "Carlos", "Pedro"]

    return (
        <>
            {listaDeNomes.map((nome, id) => (
                <li key={id}>{nome}</li>
            ))}
        </>
    );
}

export default MyFirstComponent