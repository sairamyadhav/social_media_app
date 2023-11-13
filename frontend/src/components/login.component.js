import { Input } from "antd"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';

export default function Login() {
    const [initialValues, setInitialValues] =useState({
        userid : '',
        password : '',
    })
    const validationSchema = Yup.object({
        userid:Yup.string().required('userId is required'),
        password:Yup.string().required('please enter your password'),

    })
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
                                <div className='col-6'>
                                    <Input
                                        placeholder='userId' 
                                        value={values.userid}/>
                                </div>

                            </div>
                            <div className="row">
                                <div className='col-6'>
                                    <Input type='password'
                                        placeholder='password' 
                                        value={values.password}/>
                                </div>
                            </div>
                            <div className="row d-flex flex-row align-items-center justify-content-center">
                                <div className='col-8'>
                                    <button className='btn btn-success' disabled={isValid}>Login</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>

        </>
    )
}