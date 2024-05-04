import { useState } from 'react';
import './Modal.css'

const EditingModal = () => {

  const [tarefa, setTarefa] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [EditingModal, setEditingModal] = useState(false)


const handleSubmit = (e) => {
  e.preventDefault()
  onSubmit(tarefa, formattedData, descricao)
  setTarefa("")
  setData("")
  setDescricao("")
  setEditingModal(false)
}

const formattedData = data.split('-').reverse().join('/')

  return (
    <>
      <div className="background">
        <form className="principal" onSubmit={handleSubmit}>
          <h1>Alterar tarefa</h1>
          <input type="text" name="" id="" placeholder="Tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
          <input type="date" name="" id="" value={data} onChange={(e) => setData(e.target.value)} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
          <button className='add-button'>Modificar</button>
          <button className="close-button" onClick={isClose}>Fechar</button>
        </form>
      </div>
    </>
  );
};

export default EditingModal;