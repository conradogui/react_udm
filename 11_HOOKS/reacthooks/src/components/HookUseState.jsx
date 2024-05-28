import { useState } from "react";

const HookUseState = () => {
  //1 - useState
  let userName = "Guilherme";

  const [name, setName] = useState("Conrado");

  const changeNames = () => {
    userName = "João Souza";

    setName("Matheus jucá");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a alguma API por exemplo
    console.log(age);
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* 2 - useState e input*/}
      <p>Digite sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Voce tem {age} anos</p>
    </div>
  );
};

export default HookUseState;
