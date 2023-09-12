import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

{/* components */}
import MyComponent from './components/MyComponent'

function App() {

  const redTitle = true

  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Esse parágrafo é do App.js</p>
      <p className="my-comp-paragraph">Esse também é do componente</p>
      {/* classes dinãmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter a classe dinâmica</h2>
      {/* css modules */}
      <Title/>
    </>
  )
}

export default App
