import { useState, useContext, useRef } from "react";
import { ContextFormValidateTask } from "../context/Context_validateTask.jsx";

export const TextField = ({ labelTitle = "", selectOption = "" }) => {
  const [inputValue, setInputValue] = useState("");
  const refText = useRef(null);

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
      <div className="textFieldInputContainer">
        <label className="TextFieldInputLabel">
          <div>
            <div id={selectOption} ref={refText} className="textFieldInputText">
              {labelTitle}
            </div>
          </div>
        </label>

        <input
          className="textFieldInput"
          type="text"
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
