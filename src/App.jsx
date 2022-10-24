import { useState, useEffect } from "react";
// ===================
import Nav from "./components/Nav.jsx";
import Section from "./components/Section.jsx";
// ===================
import {TaskFormSection} from "./TaskFormSection.jsx";
import {TaskListSection} from "./TaskListSection.jsx";
import "./static/css/index.css";

import {FormTask} from "./components/FormTask.jsx";
import { TaskReadySection } from "./TaskReadySection.jsx";

function App() {
  return (
    
    <>
      <header className="header" id="header">
        <Nav />
      </header>
  
      <main className="main">
        <Section
          name__section="TaskForm"
          title__section="Tareas"
          subtitle_section="Puedes agregar tus tareas"
          content__section={[<TaskFormSection />]}
        />
        <Section
          name__section="TaskList"
          title__section="Lista de tareas"
          subtitle_section="Puedes ver tus tareas"
          content__section={[<TaskListSection />]}
        />

        <Section
          name__section="TaskReady"
          title__section=""
          subtitle_section=""
          content__section={[<TaskReadySection />]}
        />
      </main>
      
    </>
  );
}

export default App;
