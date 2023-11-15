import * as Yup from "yup";

export const RegisterFormValidationSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .matches(/^\S+$/, "username cant have spaces")
    .min(6, "username should be atleast 6 characters long")
    .max(15, "username cant be more than 15 characters long"),
  email: Yup.string()
    .required("email is required")
    .email("invalid email address"),
  password: Yup.string()
    .required("password is required")
    .min(6, "password should be atleast 6 characters long")
    .max(15, "password cant be more than 15 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const LoginFormValidationSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .matches(/^\S+$/, "username cant have spaces"),
  password: Yup.string().required("please enter your password"),
});