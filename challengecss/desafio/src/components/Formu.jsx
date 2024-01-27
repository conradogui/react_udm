import { useState } from "react";

const Formu = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [numero, setNumero] = useState();

  const handleName = (e) => {
    e.preventDefault();
    console.log(nome, sobrenome, numero);
    setNome("")
    setSobrenome("")
    setNumero("")
};

  return (
    <>
      <form onSubmit={handleName}>
        <label>Coloque seu nome: </label>
        <input
          type="text"
          name="nome"
          id=""
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <br />
        <label>Coloque seu sobrenome: </label>
        <input
          type="text"
          name="sobrenome"
          id=""
          onChange={(e) => setSobrenome(e.target.value)}
          value={sobrenome}
        />
        <br />
        <label>Coloque seu numero: </label>
        <input
          type="number"
          name="numero"
          id=""
          onChange={(e) => setNumero(e.target.value)}
          value={numero}
        />
        <br />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Formu;
