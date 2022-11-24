import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addNewAddress } from "../features/UserSlice";

const AddNewAddress = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: "",
      street: "",
      postcode: "",
      alias: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("E-mail is required"),
      city: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("City is Required"),
      phone: Yup.string().required("Phone number is required"),
      street: Yup.string().required("Street is required"),
      postcode: Yup.string().required("postcode is required"),
      alias: Yup.string().required("alias is required"),
    }),
    onSubmit: (values) => {
      dispatch(addNewAddress(values));
    },
  });

  return (
    <form className="add-new" onSubmit={formik.handleSubmit}>
      <div className="name">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                first name
              </label>
              <input
                id="firstName"
                placeholder="first name"
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "form-control form-control-error"
                    : "form-control "
                }
                type="text"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="last name"
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
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          id="email"
          className={
            formik.touched.email && formik.errors.email
              ? "form-control form-control-error"
              : "form-control"
          }
          type="email"
          placeholder="name@example.com"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="alias" className="form-label">
          alias
        </label>
        <input
          id="alias"
          className={
            formik.touched.alias && formik.errors.alias
              ? "form-control form-control-error"
              : "form-control"
          }
          type="text"
          placeholder="Home,Company"
          {...formik.getFieldProps("alias")}
        />
        {formik.touched.alias && formik.errors.alias ? (
          <div className="text-danger">{formik.errors.alias}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          phone
        </label>
        <input
          id="phone"
          type="text"
          className={
            formik.touched.phone && formik.errors.phone
              ? "form-control phone form-control-error"
              : "form-control phone"
          }
          placeholder="01017096223"
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-danger">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          Town / City
        </label>
        <input
          id="city"
          className={
            formik.touched.city && formik.errors.city
              ? "form-control form-control-error"
              : "form-control"
          }
          type="text"
          placeholder="mansoura"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-danger">{formik.errors.city}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">
          Street address
        </label>
        <input
          id="street"
          className={
            formik.touched.street && formik.errors.street
              ? "form-control form-control-error"
              : "form-control"
          }
          type="text"
          placeholder="House street"
          {...formik.getFieldProps("street")}
        />
        {formik.touched.street && formik.errors.street ? (
          <div className="text-danger">{formik.errors.street}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="postcode" className="form-label">
          Postcode / ZIP
        </label>
        <input
          id="postcode"
          className={
            formik.touched.postcode && formik.errors.postcode
              ? "form-control form-control-error"
              : "form-control"
          }
          type="text"
          {...formik.getFieldProps("postcode")}
        />
        {formik.touched.postcode && formik.errors.postcode ? (
          <div className="text-danger">{formik.errors.postcode}</div>
        ) : null}
      </div>
      <button type="submit" className="submit">
        add
      </button>
    </form>
  );
};

export default AddNewAddress;
