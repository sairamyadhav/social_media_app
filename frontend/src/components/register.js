import { Input } from "antd";
import { Formik, Form } from "formik";
import { RegisterFormValidationSchema } from "../base/FormValidationSchemas";

export default function Register() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
const validationSchema = RegisterFormValidationSchema;
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container-fluid">
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
