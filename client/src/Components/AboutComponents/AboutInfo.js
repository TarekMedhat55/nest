import React from "react";
import Slider from "react-slick";
import aboutImage from "../../images/about-1.png";
import about2 from "../../images/about-2.png";
import about3 from "../../images/about-3.png";
import about4 from "../../images/about-4.png";
const AboutInfo = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return <div className={className} onClick={onClick} />;
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="about-info">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-info-img">
              <img src={aboutImage} alt="about us" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-info-content">
              <h1>Welcome to Nest</h1>
              <p className="first-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <p className="second-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <div className="about-info-slider">
                <Slider {...settings}>
                  <div className="about-slider-img">
                    <img src={about2} alt="" />
                  </div>
                  <div className="about-slider-img">
                    <img src={about3} alt="" />
                  </div>
                  <div className="about-slider-img">
                    <img src={about4} alt="" />
                  </div>
                  <div className="about-slider-img">
                    <img src={about3} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
