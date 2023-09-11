import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

import City from './assets/city.jpg'
import ListRender from './components/ListRender'

function App() {
  const name = "Mariana"
  const [userName] = useState("Maravilha")

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={0} color="Azul" newCar={true} />
      {/* reaproveitamento */}
      <h2>Reaproveitando</h2>
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={false} />
      <CarDetails brand="Fiat" km={4500} color="Branco"  newCar={true}/>
      <CarDetails brand="Porsche" km={0} color="Preta"  newCar={false}/>
    </>
  )
}

export default App
