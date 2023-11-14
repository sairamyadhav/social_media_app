import { Input } from "antd";

export const MyInput = (props) => {
    console.log(meta);
    return (
        <div className="row">
                <div className="col-10">
                    {label ? (<label>{label}</label>) : null}
                  <Input
                    {...props}
                  />
                </div>
                {(errors.password && touched.password) ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}
              </div>
    )
}