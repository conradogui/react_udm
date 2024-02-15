import { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  isClose,
  onSubmit,
  editedTask,
  taskData,
  setTaskData,
}) => {
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (editedTask) {
      setTarefa(editedTask.tarefa);
      setData(editedTask.data);
      setDescricao(editedTask.descricao);
    }
  }, [editedTask]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask) {
      const updatedTask = { editedTask, tarefa, data: formattedData, descricao };
      const updatedTaskData = taskData.map(task =>
        task.id === editedTask.id ? updatedTask : task
      );
      setTaskData(updatedTaskData);
    } else {
      onSubmit(tarefa, formattedData, descricao);
    }
    setTarefa("");
    setData("");
    setDescricao("");
    isClose();
  };

  const formattedData = data.split("-").reverse().join("/");

  return (
    <>
      <div className="background">
        <form className="principal" onSubmit={handleSubmit}>
          <h1>{editedTask ? "Editar Tarefa" : "Adicionar Tarefa"}</h1>
          <input
            type="text"
            placeholder="Tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <textarea
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
          <button className="add-button">
            {editedTask ? "Editar" : "Adicionar"}
          </button>
          <button className="close-button" onClick={isClose}>
            Fechar
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
