import React from "react";
import Slider from "react-slick";
import { FiSend } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const HomeHeader = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
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
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="home-header">
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="first-home-slider">
            <div className="slider-content">
              <h2>
                Fresh Vegetables
                <br />
                Big discount
              </h2>
              <p>Save up to 50% off on your first order</p>
              <div className="slider-form">
                <form onSubmit={formik.handleSubmit}>
                  <span>
                    <FiSend />
                  </span>
                  <input
                    type="email"
                    placeholder="enter your email"
                    {...formik.getFieldProps("email")}
                  />
                  <button type="submit">subscribe</button>
                </form>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="second-home-slider">
            <div className="slider-content">
              <h2>
                Don’t miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
              <div className="slider-form">
                <form action="">
                  <span>
                    <FiSend />
                  </span>
                  <input type="email" placeholder="your email address" />
                  <button type="submit">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeHeader;
