import { useState } from 'react'

const HookUseState = () => {
  //1 - useState
let userName = "Guilherme"

const [name, setName] = useState("Conrado")

const changeNames = () => {
  userName = "João Souza"

  setName("Matheus jucá")
}

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
    </div>
  )
}

export default HookUseState