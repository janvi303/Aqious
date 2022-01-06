import React, { useState } from "react";
import Slider from "react-slick";
import HMBanner from "images/HOTELMERRIOT/HotelMBannerImg/hotelMBaner.png";
import HSlider from "images/HOTELMERRIOT/HotelMBannerImg/hotelSlider.png";
import HSideSlider from "images/HOTELMERRIOT/HotelMBannerImg/HotelSideSlider.png";
import { Card, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css/";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import Adlutnumber from "./Adlutnumber";
import { RiArrowDropRightLine } from "react-icons/ri";

function HotelMerriot(props) {
  console.log(props)
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setendDate] = useState(null);

  const handleCheckInDate = (date) => {
    setStartDate(date);
    setendDate(null);
  };
  const handleCheckOutDate = (date) => {
    setendDate(date);
  };

  return (
    <>
      <img className="mx-auto img-fluid" alt="Hotel" src={HMBanner} />

      <div className="container MainHotelMBannerTitle">
        <div className="PathOfTour">
          <span className="PathOfTourHome">Home </span>
          <RiArrowDropRightLine size="2em" color="red" />
          <RiArrowDropRightLine
            size="2em"
            color="red"
            className="HotelListingPathIcon"
          />
          <span className="PathOfPage">Tours</span>
        </div>
        <div>
          <h4 className="HotelMBannerTitle">Hotel Merriot</h4>
        </div>
        <Row>
          <Col md={6} xl={8} sm={6} lg={7}>
            <Slider {...settings}>
              <img
                className="HotelMSliderIMG HotelMSliderRightImg mx-auto img-fluid"
                alt="Hotel"
                src={HSlider}
              />
              <img
                className="HotelMSliderIMG HotelMSliderRightImg mx-auto img-fluid"
                alt="Hotel"
                src={HSlider}
              />
            </Slider>

            <div className="d-inline HotelName">
              <h4> Hotel Merriot </h4>
              <div className="Star">
                <BsStarFill className="StarSpace" size="2em" color="#ECB411" />
                <BsStarFill className="StarSpace" size="2em" color="#ECB411" />
                <BsStarFill className="StarSpace" size="2em" color="#ECB411" />
                <BsStarFill className="StarSpace" size="2em" color="#ECB411" />
                <BsStar className="StarSpace" size="2em" color="red" />
              </div>
            </div>
            <h6 className="HotelAdd">
              Mina Road, Bur Dubai, Dubai, United Arab Emirates
            </h6>
          </Col>
          <Col md={6} xl={4} sm={6} lg={5} xs={12}>
            <Card className="HotelMSliderIMG">
              <img
                variant="top"
                src={HSideSlider}
                alt="top-slider"
                className="mx-auto img-fluid"
              />
              <Card.Body className="MainSideCard">
                <Card.Title>
                  <div className="HotelMSideSliderText">
                    <span className="hotelMsideSliderF">Royal Room</span>
                    <div>
                      <span className="hotelMsideSliderS">$499.00</span>
                      <span className="hotelMsideSliderT">$399.00</span>
                    </div>
                  </div>
                  <div className="HotelRoomCapacity">
                    <span>Capacity - 1</span>
                    <span>Max Children - 4</span>
                  </div>
                </Card.Title>
                <Row className="HotelBookCal ">
                  <Col
                    md={6}
                    sm={6}
                    xs={6}
                    className="d-inline HotelMMainCardCalIcon"
                  >
                    {" "}
                    <DatePicker
                      selected={startDate}
                      minDate={new Date()}
                      onChange={handleCheckInDate}
                      selectsStart
                      dateFormat="dd/MM/yyyy"
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Check in"
                      className="datepickerinput"
                    />
                    <i
                      className="HotelCardCalicon"
                      onChange={handleCheckOutDate}
                    >
                      <BsCalendar3 size="22px" />
                    </i>
                  </Col>
                  <Col
                    md={6}
                    sm={6}
                    xs={6}
                    className="d-inline HotelMMainCardCalIcon"
                  >
                    <DatePicker
                      selected={endDate}
                      minDate={startDate}
                      onChange={handleCheckOutDate}
                      selectsEnd
                      dateFormat="dd/MM/yyyy"
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Check out"
                    />
                    <i className="HotelCardCalicon">
                      <BsCalendar3 size="22px" />
                    </i>
                  </Col>
                </Row>
                <Row className="AdultChildNumber">
                  <Col classname="AdultCol " md={6} sm={6} xs={6}>
                    <div className="Adlutinput">
                      <h6>Adult</h6>
                      <Adlutnumber />
                    </div>
                  </Col>
                  <Col classname="AdultCol " md={6} sm={6} xs={6}>
                    <div className="Adlutinput">
                      <h6>Child</h6>
                      <Adlutnumber />
                    </div>
                  </Col>
                </Row>

                <div className="RoomType ">
                  <select>
                    <option defaultValue="room"> Room type </option>
                    <option> Deluxe Room</option>
                    <option>Stanard Economic Room</option>
                    <option> Deluxe Dark Room</option>
                  </select>
                </div>
                <Button className="BookNowHotelRoom" onClick={() => props.onShow(true)}>Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HotelMerriot;
