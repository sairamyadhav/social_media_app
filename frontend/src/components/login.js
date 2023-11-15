import { Input } from "antd";
import { Formik, Form } from "formik";
import { LoginFormValidationSchema } from "../base/FormValidationSchemas";
import AxiosService from "../services/AxiousService";
import UserService from "../services/UserServices";

export default function LoginComp() {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = LoginFormValidationSchema;
  const onSubmit = (values) => {
    console.log(values);
    const res = AxiosService(UserService.UserLogin, 'post', values)
    res.then((res) => { console.log(res)})
  };

  return (
    <>
      <div className="container-fluid">
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
