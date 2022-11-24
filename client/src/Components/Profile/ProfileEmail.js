import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateEmail } from "../../features/UserSlice";
const ProfileEmail = ({ email }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: email,
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      dispatch(updateEmail(values));
    },
  });
  return (
    <div className="profile-info">
      <h5>E-mail address</h5>
      <div className="profile-info-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
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
          </div>
          <div className="button-submit">
            <button type="submit">update email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEmail;
