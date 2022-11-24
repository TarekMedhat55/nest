import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePassword } from "../../features/UserSlice";
const ProfilePassword = ({ email }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password Required"),
      newPassword: Yup.string()
        .min(6, "password should be minimum 6 characters")
        .required("Password Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(updatePassword(values));
      resetForm();
    },
  });
  return (
    <div className="profile-info">
      <h5>password</h5>
      <div className="profile-info-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="enter your password"
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
            <div className="col-md-6">
              <label htmlFor="password">new password</label>
              <input
                type="password"
                placeholder="enter your new password"
                className={
                  formik.touched.newPassword && formik.errors.newPassword
                    ? "form-control form-control-error"
                    : "form-control "
                }
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-danger">{formik.errors.newPassword}</div>
              ) : null}
            </div>
          </div>
          <div className="button-submit">
            <button type="submit">update password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePassword;
