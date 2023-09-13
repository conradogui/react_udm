import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{name: "Guilherme", email:"gui43@gmail.com", bio: "Sou um dev", role: "admin"}}/>
    </>
  )
}

export default App
