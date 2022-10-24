import Task_card from "./components/Task_card";
import { useContext } from "react";
import { Context_task } from "./context/Context_provider.jsx";
import "./static/css/TaskListSection.css";

export function TaskListSection({
  tasks,
  eliminateTaskCard,
  updateStatusTaskCard,
}) {
  const context = useContext(Context_task);

  const conditionalTaskReady = (task, taskStatus) => {
    if (task.status !== taskStatus) {
      return (
        <Task_card
          key={task.id}
          task={task}
          eliminateTaskCard={context.eliminateTaskCard}
          updateStatusTaskCard={context.updateStatusTaskCard}
        />
      );
    }
  };
  
  let taskReady = context.tasks.filter((task) => task.status !== "TERMINADO");

  if (taskReady.length === 0) {
    return (
      <div className="noTask">
        No hay tareas
      </div>
    );
  }


  return (
    <>
      <div className="cards">
        {context.tasks.map((task) => conditionalTaskReady(task, "TERMINADO"))}
      </div>
    </>
  );
}
