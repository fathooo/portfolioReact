import { createContext, useContext } from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Context_task} from './Context_provider';

import {status} from '../static/js/task';

export const ContextFormValidateTask = createContext();

const schema = Yup.object().shape({
    title: Yup.string().required('Requerido' + ' ' + 'title'),
    description: Yup.string().required('Requerido' + ' ' + 'description'),
    priority: Yup.string().required('Requerido' + ' ' + 'priority'),
    assignee: Yup.string().required('Requerido' + ' ' + 'assignee'),
    timeExpiration: Yup.date().required('Requerido' + ' ' + 'timeExpiration'),
    status: Yup.string()
});





export function Create_FormValidateTaskProvider(props){
  const context = useContext(Context_task)
  const status_ = status;
   
    const submitForm = (values) => {
      const task = {
        title: values.title,
        description: values.description,
        priority: values.priority,
        assignee: values.assignee,
        timeExpiration:  values.timeExpiration,
        status : status_[0].name
      };
      context.createTaskCard(task)
      
    };

    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            title: '',
            description: '',
            priority: '',
            assignee: '',
            timeExpiration: '',
            status: ''
        },
        validationSchema: schema,
        onSubmit: submitForm
    });


    return (
        <>
          <ContextFormValidateTask.Provider
            value={{
                handleSubmit,
                handleChange,
                values,
                errors
            }}
          >
            {props.children}
          </ContextFormValidateTask.Provider>
        </>
      );
}