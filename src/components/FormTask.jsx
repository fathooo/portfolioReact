import {useFormik} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string().required('Requerido'),
    description: Yup.string().required('Requerido'),
    priority: Yup.string().required('Requerido'),
    assignee: Yup.string().required('Requerido'),
    timeExpiration: Yup.date().required('Requerido'),
    status: Yup.string().required('Requerido')
});

export const FormTask = () => {
    const submitForm = (values) => {};

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

    console.log(handleSubmit)
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={values.title} onChange={handleChange} />
            {errors.title && <div>{errors.title}</div>}
            <input type="text" name="description" value={values.description} onChange={handleChange} />
            {errors.description && <div>{errors.description}</div>}
            <input type="text" name="priority" value={values.priority} onChange={handleChange} />
            {errors.priority && <div>{errors.priority}</div>}
            <input type="text" name="assignee" value={values.assignee} onChange={handleChange} />
            {errors.assignee && <div>{errors.assignee}</div>}
            <input type="text" name="timeExpiration" value={values.timeExpiration} onChange={handleChange} />
            {errors.timeExpiration && <div>{errors.timeExpiration}</div>}
            <input type="text" name="status" value={values.status} onChange={handleChange} />
            {errors.status && <div>{errors.status}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}
