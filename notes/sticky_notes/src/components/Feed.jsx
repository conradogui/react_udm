const Feed = ({ taskData }) => {
    return (
      <div>
        {taskData.map((task, index) => (
          <div key={index}>
            <h2>{task.tarefa}</h2>
            <p>{task.data}</p>
            <p>{task.descricao}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Feed;