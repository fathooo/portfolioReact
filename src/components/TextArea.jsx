import {useState, useContext} from 'react';
import {ContextFormValidateTask} from '../context/Context_validateTask.jsx'



export const TextArea = ({labelTitle = "", selectOption = ""}) => {
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
      <div className="textAreaInputContainer">
        {/* text area */}
        <label className="textAreaInputLabel" >
            <div>
              <div id={selectOption}className="textAreaInputText">{labelTitle}</div>
            </div>
          </label>

        <textarea
          className="textAreaFieldInput"
          type="text"
          name={selectOption}
          onChange={handleInputValue}
          value={inputValue}
          onFocus={(e) => {handleFocus();}} onBlur={handleOnBlur}
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
