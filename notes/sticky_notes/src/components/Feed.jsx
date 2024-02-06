import './Feed.css'

const Feed = ({ taskData , setTaskData }) => {
  console.log(taskData)

  const handleDelete = (index,e) => {
    e.preventDefault()
    const newData = [...taskData]
    newData.splice(index, 1)
    setTaskData(newData)
  }


    return (
      <div className='itemFeed'>
        {taskData.map((task, index) => (
          <div key={index} className='item'>
            <h2>{task.tarefa}</h2>
            <p>{task.data}</p>
            <p>{task.descricao}</p>
            <button onClick={(e) => handleDelete(index, e)}>Apagar</button>
            <button>Editar</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Feed;