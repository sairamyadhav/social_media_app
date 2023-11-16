import { Input } from "antd";
import { Formik, Form } from "formik";
import { LoginFormValidationSchema } from "../base/FormValidationSchemas";
import AxiosService from "../services/AxiousService";
import UserService from "../services/UserServices";
import { useDispatch } from 'react-redux';
import { login } from '../slices/AuthSlice'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Space } from 'antd';

export default function LoginComp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  };
  const [error, setError] = useState(false)
  const [errormessage, setErrorMessage] = useState('')
  const validationSchema = LoginFormValidationSchema;
  const onSubmit = (values) => {
    console.log(values);
    const res = AxiosService(UserService.UserLogin, 'post', values)
    res.then((res) => {
      console.log(res)
      localStorage.setItem('access_token', res.data.access)
      localStorage.setItem('refresh_token', res.data.refresh)
      dispatch(login(res.data))
      navigate('/profile')
    })
      .catch((err) => {
        setError(true)
        console.log(err)
        setErrorMessage(err.response?.data?.detail != undefined ? err.response?.data?.detail : 'login failed')
      })
  };

  return (
    <>
      <div className="container-fluid">
        {error ? <div className="text-danger">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert
              message={errormessage}
              type="error"
              closable
              onClose={() => {
                setError(!error)
              }}
            />
          </Space>
        </div> : null}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, getFieldProps, isValid }) => (
            <Form>
              <div className="row">
                <div className="col-10">
                  <Input
                    placeholder="userId"
                    itemType="text"
                    id="userid"
                    {...getFieldProps("username")}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <Input
                    type="password"
                    id="password"
                    placeholder="password"
                    {...getFieldProps("password")}
                  />
                </div>
              </div>
              <div className="row d-flex flex-row align-items-center justify-content-center">
                <div className="col-8">
                  <button
                    className="btn btn-primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
