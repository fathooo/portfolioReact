import {status} from "../static/js/task.js";
import { IoAlertCircleSharp } from "react-icons/io5";




function Task_card({task, eliminateTaskCard, updateStatusTaskCard}) {
  function updateStatus(e) {
    const status_ = e.target.value;
    updateStatusTaskCard(task.id, status_);
  }

  const hour = task.timeExpiration.split("T")[1];
  const date = task.timeExpiration.split("T")[0];


const functionDeterminateStatus = (status) => {
  if (status === "BAJA") {
      return (< IoAlertCircleSharp className="color_blue"/>)
  }
  if (status === "MEDIA") {
      return (< IoAlertCircleSharp className="color_gree"/>)
  }
  if (status === "ALTA") {
      return (< IoAlertCircleSharp className="color_red" />)
  }
}


  return (
    <>
      <div key={task.id} className="card__task">
      <div className="card__priority">
           {functionDeterminateStatus(task.priority)}
        </div>
        <div>
        <div className="card__task__title">
          <p> {task.title}</p>
        </div>
        <div className="card__task__description">
          <p> Descripción : {task.description}</p>
        </div>
        <div className="card__task__assignee">
          <p> Asignado: {task.assignee}</p>
        </div>

        <div className="card__task__timeExpiration">
          <p> Expira: {date} {hour} </p>
        </div>

        <div className="card__task__priority">
          <p> Prioridad: {task.priority}</p>
        </div>

        <div className="card__task__status">
          <p> Estado: {task.status}</p>
        </div>

        <div className="changeCard">
        <div className="selectFieldInputTask">
          <select className="selectFieldInputTask" name="status" id="status" onChange={updateStatus} required>
            <option value="">Cambia el estado: </option>
            {status.map((status, index) => (<option key={index} value={status.name}> {status.name}</option> ))}
          </select>
        </div>
        <div> 
            <button className="button button--flex submit" onClick={() => eliminateTaskCard(task.id)}>Eliminar</button>
        </div>
        </div>


        </div>

      </div>
    </>
  );
}

export default Task_card;
