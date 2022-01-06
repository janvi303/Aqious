import React from "react";
import Slider from "react-slick";
import HFacility1 from "images/HOTELMERRIOT/HotelFacility/HFacility1.png";
import HFacility2 from "images/HOTELMERRIOT/HotelFacility/HFacility2.png";
import HFacility3 from "images/HOTELMERRIOT/HotelFacility/HFacility3.png";
import HFacility4 from "images/HOTELMERRIOT/HotelFacility/HFacility4.png";
import HFacility5 from "images/HOTELMERRIOT/HotelFacility/HFacility5.png";
const settings = {

  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  infinit: true,
  speed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

function HotelFacilities() {
  return (
    <>
      <div className="text-center ">
        <h1 className="titlefont"> Hotel Facilities</h1>
      </div>
      <div className="container  ">
        <Slider {...settings}>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility1}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Fast wifi</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility2}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Free food</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility3}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Transportation</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility4}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Bath</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility5}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">coffee</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility1}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Gym</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility2}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Free food</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility3}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Transportation</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility4}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">Bath</h5>
          </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
            <img
              alt="hotel_facilities"
              src={HFacility5}
              className="mx-auto img-fluid"
            />
            <h5 className="HotelFacilitiesIconText">coffee</h5>
          </a>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HotelFacilities;
