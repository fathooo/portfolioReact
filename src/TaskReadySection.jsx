import Task_card from "./components/Task_card";
import { useContext } from "react";
import { Context_task } from "./context/Context_provider.jsx";

import { TiArrowDownOutline } from "react-icons/ti";

import "./static/css/TaskListSection.css";
import "./static/css/TaskReadySection.css";

export function TaskReadySection({
  tasks,
  eliminateTaskCard,
  updateStatusTaskCard,
}) {
  const context = useContext(Context_task);

  const conditionalTaskReady = (task, taskStatus) => {
    if (task.status === taskStatus) {
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

  const handleTaskOpen = () => {
    const taskOpen = document.getElementById("taskContent");
    const taskOpenIcon = document.getElementById("iconArrowDown");
    const taskOpenIcon1 = document.getElementById("iconArrowDown_");

    taskOpen.classList.toggle("taskClose");
    taskOpenIcon.classList.toggle("iconArrowDownRotate");
    taskOpenIcon1.classList.toggle("iconArrowDownRotate");
  };

  let taskReady = context.tasks.filter((task) => task.status === "TERMINADO");

  if (taskReady.length === 0) {
    return (
      <div className="noTask">
        No hay tareas terminadas.
      </div>
    );
  }

  return (
    <>
      <div id={"taskContent"} className="taskContent taskClose">
        <div className="taskHeader" onClick={handleTaskOpen}>
          <TiArrowDownOutline
            id={"iconArrowDown"}
            className="taskIcon iconArrowDown"
          />

          <div className="TaskText">
            <h1 className="taskReadyHeaderTitles">Tareas Listas</h1>
            <span className="taskReadyHeaderSubtitle">Has click aquí</span>
          </div>
          <TiArrowDownOutline
            id={"iconArrowDown_"}
            className="taskIcon iconArrowDown"
          />
        </div>
        <br />
        <br />
        <br />

        <div className="taskCardsList ">
          <div className="taskData">
            {context.tasks.map((task) =>
              conditionalTaskReady(task, "TERMINADO")
            )}
          </div>
        </div>
      </div>
    </>
  );
}
