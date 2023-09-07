//components
import FirstComponent from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponents from './components/MyComponents'
import Events from './components/Events'
import Challenger from './components/Challenge'

//style/css
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>fundamentos React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <p className="teste">Meu texto</p>
        <MyComponents/>
        <Events/>
        <Challenger/>
      </div>
    </>
  )
}

export default App
