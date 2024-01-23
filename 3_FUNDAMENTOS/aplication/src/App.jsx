import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";

function App() {
  const name = "Mariana";
  const [userName] = useState("Maravilha");

  const cars = [
    { id: 1, brand: "ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Mazeratti", color: "Preta", newCar: false, km: 32430 },
    { id: 3, brand: "Porsche", color: "Vermelha", newCar: true, km: 0 },
  ];

  function showMwssage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { id:1, nome: "José", idade: 32, profissao: "Mecanico" },
    { id:2, nome: "Maria", idade: 16, profissao: "estudante" },
    { id:3, nome: "Carlos", idade: 20, profissao: "Nutricionista" },
    { id:4, nome: "Mateus", idade: 14, profissao: "Esteticista" },
    { id:5, nome: "Mariana", idade: 12, profissao: "Cabaleleira" },
    { id:6, nome: "Guilherme", idade: 24, profissao: "Astronauta" },
  ];

  return (
    <>
      <h1>Avançando em react</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={0} color="Azul" newCar={true} />
      {/* reaproveitamento */}
      <h2>Reaproveitando</h2>
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={false} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={true} />
      <CarDetails brand="Porsche" km={0} color="Preta" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragments */}
      <Fragments propFragment="teste" />
      {/* children */}
      <Container>
        <p>E esse é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMwssage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </>
  );
}

export default App;
