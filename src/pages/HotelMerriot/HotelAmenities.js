import React from "react";
import Slider from "react-slick";
import HAme1 from "images/HOTELMERRIOT/HotelAmenities/HAme1.png";
import HAme2 from "images/HOTELMERRIOT/HotelAmenities/HAme2.png";
import HAme3 from "images/HOTELMERRIOT/HotelAmenities/HAme3.png";
import HAme4 from "images/HOTELMERRIOT/HotelAmenities/HAme4.png";
import HAme5 from "images/HOTELMERRIOT/HotelAmenities/HAme5.png";
import HAme6 from "images/HOTELMERRIOT/HotelAmenities/HAme6.png";
import HAme7 from "images/HOTELMERRIOT/HotelAmenities/HAme7.png";
import HAme8 from "images/HOTELMERRIOT/HotelAmenities/HAme8.png";
function HotelAmenities() {
  const settings = {
    arrows: false,
    slidesToShow: 8,
    autoplay: true,
    infinit: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <div className="text-center ">
        <h1 className="titlefont"> Hotel Amenities</h1>
      </div>
      <div className="container  ">
        <Slider {...settings}>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme1}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Ac</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme2}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Tv</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme3}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Bed</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme4}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Internet</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme5}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Bedsheet</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme6}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Gym</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme7}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText"> purifier</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme8}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Cocktail</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme1}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Ac</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme2}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Tv</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme3}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Bed</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme4}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Internet</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme5}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Bedsheet</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme6}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Gym</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme7}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">purifier</h5>
            </a>
          </div>
          <div className="HotelFacilitiesIcon">
            <a href="/#">
              <img
                alt="hotel_facilities"
                src={HAme8}
                className="mx-auto img-fluid"
              />
              <h5 className="HotelFacilitiesIconText">Cocktail</h5>
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HotelAmenities;
