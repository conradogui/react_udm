import { useState } from "react"

const Formu = () => {

    const [nome, setNome] = useState("")
    const [sobrenome,setSobrenome] = useState("")
    const [numero, setNumero] = useState()

    const handleName = (e) => {
        e.preventDefault()
        console.log("enviando");
        console.log(nome)
    }

    return (
        <>
            <form onSubmit={handleName}>
                <label>Coloque  seu nome: </label>
                <input type="text" name="nome" id="" onChange={(e) => setNome(e.target.value)}/><br />
                <label>Coloque seu sobrenome: </label>
                <input type="text" name="sobrenome" id="" /><br />
                <label>Coloque  seu numero: </label>
                <input type="number" name="numero" id="" /><br />
                <button>Enviar</button>
            </form>
            <p>{nome} {sobrenome} {numero}</p>
        </>
    )
}

export default Formu