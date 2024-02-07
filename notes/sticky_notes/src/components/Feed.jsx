import './Feed.css'


const Feed = ({ taskData, setModal, setTaskData }) => {
  console.log(taskData)
  const editIndex = -1

  const handleDelete = (index,e) => {
    e.preventDefault()
    const newData = [...taskData]
    newData.splice(index, 1)
    setTaskData(newData)
  }



  const editTask = (index) => { //vai passar as informações para o modal
    console.log(taskData[index].tarefa)  
    // editIndex = index
    const newTrefa = taskData[index].tarefa
    const newData = taskData[index].data
    const newDescricao = taskData[index].descricao
    
    setModal(true)
  }


    return (
      <div className='itemFeed'>
        {taskData.map((task, index) => (
          <div key={index} className='item'>
            <h2>{task.tarefa}</h2>
            <p>{task.data}</p>
            <p>{task.descricao}</p>
            <button onClick={(e) => handleDelete(index, e)}>Apagar</button>
            <button onClick={(e) => editTask(index,e)}>Editar</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Feed;