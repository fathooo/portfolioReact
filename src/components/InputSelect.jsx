import {useState, useContext} from 'react';

import {ContextFormValidateTask} from '../context/Context_validateTask.jsx'


export const InputSelect = ({labelTitle = "", selectOption = "", options = ""}) => {
  const [inputValue, setInputValue] = useState("");

  const contextFormValidateTask = useContext(ContextFormValidateTask);

  function handleInputValue(e) {
    contextFormValidateTask.handleChange(e)
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
      <div className="selectFieldInputContainer">
      <label className="selectFieldInputLabel">
          <div>
            <div id={selectOption} className="selectFieldInputText">{labelTitle}</div>
          </div>
        </label>
        
        <select name={selectOption} onChange={handleInputValue} className="selectFieldInput" onFocus={(e) => {handleFocus();}} onBlur={handleOnBlur}>
          <option value="">Selecciona una opción</option>
          {options.map((option, index) => ( <option key={index} value={option.name}> {option.name}</option> ))}
          </select>
          {contextFormValidateTask.values[selectOption] && <div>{contextFormValidateTask.errors[selectOption]}</div>}

          {contextFormValidateTask.errors[selectOption] && (
          <div className="validateInputMessage">
            {contextFormValidateTask.errors[selectOption]}
          </div>
        )}
      </div>
    </>
  );
};




