import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { getBestSellProduct } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductSLider from "../ProductSLider";

const BestSell = () => {
  const { bestSellProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellProduct());
  }, [dispatch]);
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="best-sell">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>Daily Best Sells</h2>
          <div className="details d-flex align-items-center">
            <Link to="/shop">Explore More</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="best-sell-banner">
              <h3>
                Bring nature
                <br /> into your
                <br /> home
              </h3>
              <Link to="/shop">
                <span>shop now</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="best-sell-content">
              <Slider {...settings}>
                {bestSellProducts.map((product) => (
                  <ProductSLider
                    key={product._id}
                    ratingsAverage={product.ratingsAverage}
                    ratingsQuantity={product.ratingsQuantity}
                    name={product.name}
                    category={product.category.name}
                    price={product.price}
                    priceAfterDiscount={product.priceAfterDiscount}
                    img={product.images[0]}
                    productId={product._id}
                    productSize={product.size[0]}
                    sold={product.sold}
                    productQuantity={product.quantity}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
