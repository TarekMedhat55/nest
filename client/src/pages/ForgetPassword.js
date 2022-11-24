import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { forgetUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetPasswordSuccess } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      dispatch(forgetUser(values));
    },
  });
  useEffect(() => {
    if (forgetPasswordSuccess) {
      setTimeout(() => {
        navigate("/reset-code");
      }, 1000);
    }
  }, [forgetPasswordSuccess]);
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="nest" />
          </div>
          <div className="login-header">
            <h2>Forgot your password?</h2>
            <p>
              Enter your email address and we'll
              <br /> send you a number to reset your password
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
              <div className="button-submit">
                <button type="submit"> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
