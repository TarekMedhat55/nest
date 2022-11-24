import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { forgetUser, resetCodeUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const ResetCode = () => {
  const { resetCodeSuccess } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: Yup.object({
      resetCode: Yup.string().required("reset Code is Required"),
    }),
    onSubmit: (values) => {
      dispatch(resetCodeUser(values));
    },
  });
  useEffect(() => {
    if (resetCodeSuccess) {
      setTimeout(() => {
        navigate("/change-password");
      }, 1000);
    }
  }, [resetCodeSuccess]);
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="nest" />
          </div>
          <div className="login-header">
            <h2>Reset Code</h2>
            <p>We have sent the code to your email address</p>
          </div>
          <div className="login-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="resetCode">Reset Code</label>
                <input
                  type="text"
                  placeholder="enter your Reset Code"
                  className={
                    formik.touched.resetCode && formik.errors.resetCode
                      ? "form-control form-control-error"
                      : "form-control "
                  }
                  {...formik.getFieldProps("resetCode")}
                />
                {formik.touched.resetCode && formik.errors.resetCode ? (
                  <div className="text-danger">{formik.errors.resetCode}</div>
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

export default ResetCode;
