import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";

const SinginSchema = Yup.object().shape({
    email: Yup.string()
        .required("This field is required!")
        .email("Must be a valid email"),
    password: Yup.string()
        .required("This field is required!")
        .min(8, "Must be at least 8 characters!")
});

const FormWithFormik: React.FC = () => {
    const handleSubmit = (values: any) => {
        console.log(`Email: ${values.email}. Password: ${values.password}`);
        
    }
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={SinginSchema}
            >
                {({handleReset, isValid, dirty}) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <Field autoComplete="off" name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label htmlFor="passwrod">Password: </label>
                            <Field autoComplete="off" name="password" />
                            <ErrorMessage name="password"/>
                        </div>
                        <button disabled={!isValid || !dirty} type="submit" >Submit</button>
                        <button onClick={handleReset} type="button">Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormWithFormik
