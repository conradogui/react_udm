import { useState } from "react"

const UsandoHook = () => {

    const [algo, setAlgo] = useState(0)

    const somaUm = () => {
        return algo + 1
    }
    const tiraUm = () => {
        return algo - 1
    }

    return (
        <>
            <p>{algo}</p>
            <button onClick={() => setAlgo(somaUm)}>Adiciona um</button>
            <button onClick={() => setAlgo(tiraUm)}>Tira um</button>
            <button onClick={() => setAlgo(0)}>Zerar</button>
        </>
    )
}

export default UsandoHook