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
  }, []);

  //3 - item no array de dependencias
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if(anotherNumber > 0) {
      console.log("Executado apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  //4 - cleanup do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Ola mundo!")
    //   // setAnotherNumber(anotherNumber + 1)
    // }, 2000);
    // return () => clearTimeout(timer)
  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
