import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffcet sem dependencias
  useEffect(() => {
    console.log("estou sendo executado");
  });
  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  // 2 - array de dependencias vazio -> executa apenas uma vez
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, [])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
