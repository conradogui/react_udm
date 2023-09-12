import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  
  const cars = [
    {key: 1, marca: "Porsche", ano: 2022, km: 0, blindado: true},
    {key: 2, marca: "Mercedes", ano: 2015, km: 4240, blindado: true},
    {key: 3, marca: "Mazeratti", ano: 2020, km: 56430, blindado: false},
    {key: 4, marca: "Rolls-Royce", ano: 2023, km: 0, blindado: true},
    {key: 5, marca: "Corvete", ano: 2010, km: 0, blindado: false},
  ]

  return (
    <>
      {cars.map((carro) => (
        <CarDetails key={carro.id} marca={carro.marca} ano={carro.ano} km={carro.km} blindado={carro.blindado}/>
      ))}
    </>
  )
}

export default App
