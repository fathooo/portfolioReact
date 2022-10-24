import {useFormik} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email:Yup.string().email('Invalid email address').required('Requerido'),
    password: Yup.string().required('Requerido')
});


export const FormLogin = () => {
    const submitForm = (values) => {};

    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: submitForm
    });

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <div>{errors.email}</div>}
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            {errors.password && <div>{errors.password}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}


