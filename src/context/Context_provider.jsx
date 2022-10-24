import { createContext, useState, useEffect  } from "react";
const Context_task = createContext();

import { task as data } from "../static/js/task.js";

function Context_taskProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTaskCard(task) {
    if (tasks.length === 0) {
      task.id = 1;
      setTasks([...tasks, task]);
    }
    if (tasks.length > 0) {
      let last_id = Object.values(tasks).pop().id;
      task["id"] = last_id + 1;
      setTasks([...tasks, task]);
    }

  }

  function eliminateTaskCard(task_id) {
    tasks.filter((task) => task.id !== task_id);
    setTasks(tasks.filter((task) => task.id !== task_id));
  }

  function updateTaskCard(task_id) {
    setTasks(
      tasks.map((task_) => {
        if (task_.id === task_id) {

          return task;
        }
        return task_;
      })
    );
  }

  function updateStatusTaskCard(task_id, status) {
    const task = tasks.find((task) => task.id === task_id);
    task.status = status;
    setTasks([...tasks]);
  }

  return (
    <>
      <Context_task.Provider
        value={{
          tasks,
          createTaskCard,
          eliminateTaskCard,
          updateStatusTaskCard,
        }}
      >
        {props.children}
      </Context_task.Provider>
    </>
  );
}

export { Context_taskProvider, Context_task };
