import React, { useEffect } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [user]);
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-logo">
          <img src={logo} alt="nest" />
        </div>
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>
            Don't have an account?
            <Link to="/register"> create account</Link>
          </p>
        </div>
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">email</label>
              <input
                type="email"
                placeholder="enter your email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control form-control-error"
                    : "form-control "
                }
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="form-control"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <p className="forget-password">
              <Link to="/forget-password">Forget Your Password?</Link>
            </p>
            <div className="button-submit">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
