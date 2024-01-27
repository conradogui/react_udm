import './Modal.css'

const Modal = ({isOpen, isClose, children}) => {

if(!isOpen) return null

  return (
    <>
      <div className="background">
        <div className="principal">
          <h1>Adicionar tarefa</h1>
          <input type="text" name="" id="" placeholder="Tarefa" />
          <input type="date" name="" id="" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Descrição da tarefa"
          ></textarea>
          <button className='add-button'>Adicionar</button>
          <button className="close-button" onClick={isClose}>Fechar</button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
