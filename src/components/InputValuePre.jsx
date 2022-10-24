import {useState, useContext} from 'react';
import {ContextFormValidateTask} from '../context/Context_validateTask.jsx'
import '../static/css/TextField.css';

export const InputValuePre = ({labelTitle = "", selectOption = "", valuePre = ""}) => {
  const [inputValue, setInputValue] = useState(valuePre);
  console.log(inputValue)
  const contextFormValidateTask = useContext(ContextFormValidateTask);

  function handleInputValue(e) {
    contextFormValidateTask.handleChange(e)
  }

  return (
    <>
      <div className="input-container">
        <input
          type="hidden"
          name={selectOption}
          onChange={handleInputValue}
          value={inputValue}
        />
      </div>
    </>
  );
};



