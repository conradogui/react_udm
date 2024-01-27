import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {

  const [modal, setModal] = useState(false)

  const isModalOpen = () => {
    setModal(true)
  }

  const isModalClose = () => {
    setModal(false)
  }

  return (
    <>
      <div className='head'>
        <h1>Notas</h1>
        <button onClick={isModalOpen}>+</button>
      </div>
        <Modal isOpen={modal} isClose={isModalClose}/>
    </>
  )
}

export default App
