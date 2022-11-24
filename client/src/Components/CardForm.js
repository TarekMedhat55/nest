import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const CardForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
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
      phone: Yup.number()
        .max(11, "Must be 20 characters or less")
        .required("Phone number is required"),
      street: Yup.string()
        .max(11, "Must be 11 numbers")
        .required("Street is required"),
      postcode: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("postcode is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="credit-form">
      <div class="mb-3">
        <label for="firstName" className="form-label">
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
    </form>
  );
};

export default CardForm;
