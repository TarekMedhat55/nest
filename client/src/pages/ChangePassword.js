import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { passwordChangedSuccessfully } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "password should be minimum 6 characters")
        .required("password is Required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      dispatch(changePassword(values));
    },
  });
  useEffect(() => {
    if (passwordChangedSuccessfully) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [passwordChangedSuccessfully]);
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="nest" />
          </div>
          <div className="login-header">
            <h2>Reset password</h2>
            <p>Please enter a new password to use for your Nest account</p>
          </div>
          <div className="login-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  placeholder="enter your new Password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control form-control-error"
                      : "form-control "
                  }
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password">confirm Password</label>
                <input
                  type="password"
                  placeholder="enter your confirm Password"
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "form-control form-control-error"
                      : "form-control "
                  }
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="button-submit">
                <button type="submit"> Change Password </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
