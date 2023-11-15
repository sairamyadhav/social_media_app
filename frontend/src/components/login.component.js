import { Input } from "antd"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';
import UserService from "../services/UserServices";
import AxiosService from "../services/AxiousService";

export default function LoginComp() {
    const [initialValues, setInitialValues] =useState({
        userid :'',
        password :'',
    })
    const validationSchema = Yup.object({
        userid:Yup.string().required('userId is required'),
        password:Yup.string().required('please enter your password'),

    })
    const onSubmit = (values) => {
        console.log(values);
        console.log(UserService.UserLogin)
        const response = AxiosService(UserService.UserLogin, 'post', values)
        response.then((res) => {
            console.log(res)
        })
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
                                        onChange={(event)=>{
                                            console.log(event.target.value)
                                            setFieldValue('userid', event.target.value)
                                        }}/>
                                </div>
                                

                            </div>
                            <div className="row">
                                <div className='col-10'>
                                    <Input type='password'
                                    id='password'
                                        placeholder='password' 
                                        value={values.password}
                                        onChange={(event)=>{
                                            console.log(event.target.value)
                                            setFieldValue('password', event.target.value)
                                        }}/>
                                </div>
                            </div>
                            <div className="row d-flex flex-row align-items-center justify-content-center">
                                <div className='col-8'>
                                    <button className='btn btn-outline-primary'   disabled={!isValid}  type="submit" onChange={()=>{
                                        console.log(values)
                                    }}>Login</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>

        </>
    )
}