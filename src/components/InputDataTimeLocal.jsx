import { useState, useContext } from "react";

import { ContextFormValidateTask } from "../context/Context_validateTask.jsx";

export const InputDataTimeLocal = ({ labelTitle = "", selectOption = "" }) => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date + "T" + time;

  const [inputValue, setInputValue] = useState(dateTime);

  const contextFormValidateTask = useContext(ContextFormValidateTask);

  function handleInputValue(e) {
    contextFormValidateTask.handleChange(e);
    setInputValue(e.target.value);
  }

  function handleFocus() {
    const element = document.getElementById(selectOption);
    element.classList.add("element--focus");
  }

  function handleOnBlur() {
    const element = document.getElementById(selectOption);
    element.classList.remove("element--focus");
  }

  return (
    <>
      <div className="dateTimeLocalInputContainer">
        <label className="dateTimeLocalInputLabel">
          <div>
            <div id={selectOption} className="dateTimeLocalInputText">
              {labelTitle}
            </div>
          </div>
        </label>

        <input
          className="dateTimeLocalFieldInput"
          type="datetime-local"
          name={selectOption}
          onChange={handleInputValue}
          value={inputValue}
          onFocus={(e) => {
            handleFocus();
          }}
          onBlur={handleOnBlur}
        />

        {contextFormValidateTask.errors[selectOption] && (
          <div className="validateInputMessage">
            {contextFormValidateTask.errors[selectOption]}
          </div>
        )}
      </div>
    </>
  );
};
