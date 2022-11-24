import React from "react";
import { subscribeFeature } from "../data";
import footerImage from "../images/banner-9.png";
import { FiSend } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("your email send successfully");
      resetForm();
    },
  });
  return (
    <div className="subscribe">
      <div className="container-fluid">
        <div className="subscribe-content">
          <div className="subscribe-content-right">
            <h4>Stay home & get your daily</h4>
            <h4>needs from our shop</h4>
            <p>
              Start You'r Daily Shopping with <span>Nest Mart</span>
            </p>
            <form onSubmit={formik.handleSubmit} className="form-subscribe">
              <FiSend />
              <div className="input-email">
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
              </div>
              <button type="submit">subscribe</button>
            </form>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="subscribe-content-left d-none d-lg-block">
            <img src={footerImage} alt="footer" />
          </div>
        </div>
        <div className="subscribe-feature">
          {subscribeFeature.map((feature) => {
            return (
              <div className="feature" key={feature.id}>
                <div className="feature-image">
                  <img src={feature.img} alt="" />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
