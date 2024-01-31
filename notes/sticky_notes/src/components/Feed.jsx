import './Feed.css'

const Feed = ({ taskData }) => {
    return (
      <div className='itemFeed'>
        {taskData.map((task, index) => (
          <div key={index} className='item'>
            <h2>{task.tarefa}</h2>
            <p>{task.data}</p>
            <p>{task.descricao}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Feed;