import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Feed from './components/Feed'

function App() {

  const [modal, setModal] = useState(false)
  const [taskData, setTaskData] = useState([])

  const isModalOpen = () => {
    setModal(true)
  }

  const isModalClose = () => {
    setModal(false)
  }

  const handleAddTask = (tarefa, data, descricao) => {
    const newTask = {tarefa,data, descricao}
    setTaskData([...taskData, newTask])
  }

  return (
    <>
      <div className='head'>
        <h1>Notas</h1>
        <button onClick={isModalOpen}>+</button>
      </div>
        <Modal isOpen={modal} isClose={isModalClose} onSubmit={handleAddTask}/>
        <div className="feed">
          <Feed taskData={taskData}/>
        </div>
    </>
  )
}

export default App
