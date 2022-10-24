import { useContext, useState } from "react";
import { priority as pri, assignee as assig } from "./static/js/task.js";

import { ContextFormValidateTask } from "./context/Context_validateTask.jsx";

import "./static/css/TaskFormSection.css";
import "./static/css/formComponents.css";

import { TextField } from "./components/TextField.jsx";
import { TextArea } from "./components/TextArea.jsx";
import { InputDataTimeLocal } from "./components/InputDataTimeLocal.jsx";
import { InputSelect } from "./components/InputSelect.jsx";

export function TaskFormSection() {
  const contextFormValidateTask = useContext(ContextFormValidateTask);
  const priority_ = pri;
  const assignee_ = assig;

  const handleSubmit = (e) => {
    e.preventDefault();
    contextFormValidateTask.handleSubmit(e);
  };

  return (
    <>
      <div className="containerForm">
        <form onSubmit={handleSubmit} className={"form"}>
          <div className="FormColumn">
            <TextField labelTitle="Titulo" selectOption="title" />
            <br />
            <TextArea labelTitle="Descripción" selectOption="description" />
            <br />
          </div>
          <div className="FormColumn">
            <InputDataTimeLocal
              labelTitle="¿Cuándo expira?"
              selectOption="timeExpiration"
            />
            <br />
            <InputSelect
              labelTitle="Prioridad "
              selectOption="priority"
              options={priority_}
            />
            <br />
          </div>
          <div className="FormColumn">
            <InputSelect
              labelTitle="Asignado a "
              selectOption="assignee"
              options={assignee_}
            />
            <br />
            <button
              type="submit"
              className="button button--flex button--small portfolio__button submit"
            >
              Guardar datos
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
