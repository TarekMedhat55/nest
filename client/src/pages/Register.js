import React, { useEffect } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "password should be minimum 6 characters")
        .required("Password Required"),
      firstName: Yup.string().required("first Name is Required"),
      lastName: Yup.string().required("last Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
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
          <h2>Welcome!</h2>
          <p>
            Already have an account?
            <Link to="/login"> login</Link>
          </p>
        </div>
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first-name">first name</label>
              <input
                type="text"
                placeholder="enter your first name"
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "form-control form-control-error"
                    : "form-control "
                }
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="last-name">last name</label>
              <input
                type="text"
                placeholder="enter your last name"
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? "form-control form-control-error"
                    : "form-control "
                }
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-danger">{formik.errors.lastName}</div>
              ) : null}
            </div>
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
            <div className="button-submit">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
