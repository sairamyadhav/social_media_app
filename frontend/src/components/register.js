import { Input } from "antd";
import { Formik, Form } from "formik";
import { RegisterFormValidationSchema } from "../base/FormValidationSchemas";
import AxiosService from "../services/AxiousService";
import UserService from "../services/UserServices";
import { useDispatch } from 'react-redux'; import { login } from '../slices/AuthSlice'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Space } from 'antd';

export default function Register() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [error, setError] = useState(false);
  const [errormessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const validationSchema = RegisterFormValidationSchema;
  const onSubmit = (values) => {
    const res = AxiosService(UserService.UserRegister, 'post', values)
    res.then((res) => {
      console.log(res)
      localStorage.setItem('access_token', res.data.access)
      localStorage.setItem('refresh_token', res.data.refresh)
      dispatch(login(res.data))
      navigate('/profile')
      setError(false)
    })
      .catch(error => {
        console.log(error)
        setError(true);
        setErrorMessage(error?.response?.data)
      });
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
          {({
            errors,
            touched,
            getFieldProps,
            isValid,
          }) => (
            <Form>
              <div className="row">
                <div className="col-10">
                  <Input
                    placeholder="username"
                    itemType="text"
                    id="username"
                    {...getFieldProps('username')}
                  />
                </div>
                {touched.username && errors.username ? (
                  <p className="text-danger">{errors.username}</p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-10">
                  <Input
                    placeholder="email address"
                    itemType="text"
                    id="email"
                    {...getFieldProps('email')}
                  />
                </div>
                {(errors.email && touched.email) ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-10">
                  <Input
                    type="password"
                    id="password"
                    placeholder="password"
                    {...getFieldProps('password')}
                  />
                </div>
                {(errors.password && touched.password) ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-10">
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    {...getFieldProps('confirmPassword')}
                  />
                </div>
                {(errors.confirmPassword && touched.confirmPassword) ? (
                  <p className="text-danger">{errors.confirmPassword}</p>
                ) : null}
              </div>
              <div className="row d-flex flex-row align-items-center justify-content-center">
                <div className="col-10">
                  <button
                    className="btn btn-primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    Register
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
