import { Input } from "antd"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';


export default function Register() {
    const [initialValues, setInitialValues] = useState({
        userid: '',
        email: '',
        password: '',

    })
    const validationSchema = Yup.object({
        userid: Yup.string().required('userId is required'),
        email: Yup.string().required('email is required') .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Invalid email address'
          ),
        password: Yup.string().required('please enter your password')  .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
            'Password must have at least one uppercase letter, one special character, one number, and be at least 8 characters long'
          ),

    })
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>

            <div className="container-fluid">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        setFieldTouched,
                        isValid,
                    }) => (
                        <Form>
                            <div className="row" >
                                <div className='col-10'>
                                    <Input
                                        placeholder='userId'
                                        itemType="text"
                                        id='userid'
                                        value={values.userid}
                                        onChange={(event) => {
                                            setFieldValue('userid', event.target.value)
                                        }} />
                                </div>
                                {errors.userid?<p className="text-danger">{errors.userid}</p>: null}

                                

                            </div>
                            <div className="row" >
                                <div className='col-10'>
                                    <Input
                                        placeholder='email address'
                                        itemType="text"
                                        id='email'
                                        value={values.email}
                                        onChange={(event) => {
                                            setFieldValue('email', event.target.value)
                                        }} />
                                </div>
                                {errors.email?<p className="text-danger">{errors.email}</p>: null}


                            </div>
                            <div className="row">
                                <div className='col-10'>
                                    <Input type='password'
                                        id='password'
                                        placeholder='password'
                                        value={values.password}
                                        onChange={(event) => {
                                            setFieldValue('password', event.target.value)
                                        }} />
                                </div>
                                {errors.password?<p className="text-danger">{errors.password}</p>: null}
                            </div>
                            <div className="row d-flex flex-row align-items-center justify-content-center">
                                <div className='col-10'>
                                    <button className='btn btn-outline-primary' disabled={!isValid} type="submit" onChange={() => {
                                    }}>Register</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>

        </>
    )

}