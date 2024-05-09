import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../components/context/CounterContext.jsx'
import ChangeCounter from '../components/ChangeCounter.jsx'

const Home = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador {counter}</p>
      {/* 3 - Alterando valor do contexto */}
      <ChangeCounter/>
    </div>
  )
}

export default Home