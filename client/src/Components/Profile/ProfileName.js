import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateInfo } from "../../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
const ProfileName = ({ firstName, lastName }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("first Name is Required"),
      lastName: Yup.string().required("last Name is Required"),
    }),
    onSubmit: (values) => {
      dispatch(updateInfo(values));
    },
  });
  return (
    <div className="profile-info">
      <h5>general info</h5>
      <div className="profile-info-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <label htmlFor="last-name">first name</label>
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
          </div>
          <div className="button-submit">
            <button type="submit">update info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileName;
