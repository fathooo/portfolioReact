import { useState, useEffect } from "react";
import {Button_change_theme} from './Button_change_theme.jsx';
import "../static/css/index.css";

import {
  RiProfileLine,
  RiArrowDownCircleLine,
  RiHome2Line,
} from "react-icons/ri";

function Nav() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.getElementById("nav-menu").classList.add("show-menu");
    } else {
      document.getElementById("nav-menu").classList.remove("show-menu");
    }
  }, [menu]);

  return (
    <>
      <nav className="nav container">
        <a href="https://www.fathooo.com" className="nav__logo">
          Felipe
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav_item">
              <a href="#TaskForm" className="nav__link">
                <i className="nav__icon">
                  <RiHome2Line />
                </i>{" "}
                Formulario
              </a>
            </li>
            <li className="nav_item">
              <a href="#TaskList" className="nav__link">
                <i className="nav__icon">
                  <RiHome2Line />
                </i>{" "}
                Lista de tareas
              </a>
            </li>
            <li className="nav_item">
              <a href="#TaskReady" className="nav__link">
                <i className="nav__icon">
                  <RiHome2Line />
                </i>{" "}
                Terminadas
              </a>
            </li>
          </ul>
          <div
            className="nav__toggle"
            id="nav-close"
            onClick={() => setMenu(!menu)}
          >
            <i className="nav__close">
              <RiArrowDownCircleLine />
            </i>
          </div>
        </div>

        <div className="class__btns">
          <Button_change_theme />

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setMenu(!menu)}
          >
            <i>
              <RiProfileLine />
            </i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
