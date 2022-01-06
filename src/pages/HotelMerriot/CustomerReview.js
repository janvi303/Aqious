import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import rightQuotes from "images/HOMEPAGEIMG/Customer/rightQuotes.png";
import Slider from "react-slick";
import CSimg1 from "images/HOMEPAGEIMG/Customer/R1.png";
import CSimg2 from "images/HOMEPAGEIMG/Customer/R2.png";
import { BiStar } from "react-icons/bi";

const settings = {
  speed: 500,
  arrows: false,

  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    return (
      <>
        <div className="customerMain container ">
          <div className="">
            <div className="text-center ">
              <h1 className="titlefont">Customer’s Review</h1>
            </div>
            <Row className="Custsubmain ">
              <Col md={7} sm={7} xs={12}>
                <div className=" CustomerReviewBgImg ">
                  <div className="CustReview">
                    <Row>
                      <Col md={10} sm={12}>
                        {" "}
                        <img
                          alt="customer"
                          className="rightQuotes img-fluid mx-auto   "
                          src={rightQuotes}
                        />
                        <Slider
                          {...settings}
                          className="profile"
                          vertical={true}
                          arrows={false}
                          // verticalHeight={500}
                          asNavFor={this.state.nav2}
                          ref={(slider) => (this.slider1 = slider)}
                        >
                          <Row>
                            <Col xl={4} md={12}>
                              {" "}
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg1}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <h1 className="cusfonttitle"> John Deo </h1>
                              <h6 className="cussubfont"> Lorem ipsum </h6>
                              <p className="cusp">
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been
                                the industry’s standard dummy text Lorem Ipsum
                                is simply dummy text of the printing and
                                typesetting industry.Lorem Ipsum has been the
                                industry’s standard dummy text{" "}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4} md={12}>
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg2}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <h1 className="cusfonttitle"> John Deo </h1>
                              <h6 className="cussubfont"> Lorem ipsum </h6>
                              <p className="cusp">
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been
                                the industry’s standard dummy text Lorem Ipsum
                                is simply dummy text of the printing and
                                typesetting industry.Lorem Ipsum has been the
                                industry’s standard dummy text{" "}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4} md={12}>
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg1}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <div className="divpdetail">
                                <h1 className="cusfonttitle"> John Deo </h1>
                                <h6 className="cussubfont"> Lorem ipsum </h6>
                                <p className="cusp">
                                  {" "}
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.Lorem Ipsum
                                  has been the industry’s standard dummy text
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.Lorem Ipsum
                                  has been the industry’s standard dummy text{" "}
                                </p>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4} md={12}>
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg2}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <h1 className="cusfonttitle"> John Deo </h1>
                              <h6 className="cussubfont"> Lorem ipsum </h6>
                              <p className="cusp">
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been
                                the industry’s standard dummy text Lorem Ipsum
                                is simply dummy text of the printing and
                                typesetting industry.Lorem Ipsum has been the
                                industry’s standard dummy text{" "}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4} md={12}>
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg1}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <h1 className="cusfonttitle"> John Deo </h1>
                              <h6 className="cussubfont"> Lorem ipsum </h6>
                              <p className="cusp">
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been
                                the industry’s standard dummy text Lorem Ipsum
                                is simply dummy text of the printing and
                                typesetting industry.Lorem Ipsum has been the
                                industry’s standard dummy text{" "}
                              </p>
                            </Col>
                          </Row>

                          <Row className="">
                            <Col xl={4} md={12}>
                              <img
                                alt="customer"
                                className="img-fluid mx-auto"
                                src={CSimg1}
                              />
                            </Col>
                            <Col xl={8} md={12} className="cusmian">
                              <h1 className="cusfonttitle"> John Deo </h1>
                              <h6 className="cussubfont"> Lorem ipsum </h6>
                              <p className="cusp">
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been
                                the industry’s standard dummy text Lorem Ipsum
                                is simply dummy text of the printing and
                                typesetting industry.Lorem Ipsum has been the
                                industry’s standard dummy text{" "}
                              </p>
                            </Col>
                          </Row>
                        </Slider>
                      </Col>

                      <Col md={2} sm={2}>
                        <Slider
                          className="smallicon"
                          dots={false}
                          infinite={true}
                          centerMode={true}
                          arrows={false}
                          vertical={true}
                          verticalSwiping={true}
                          asNavFor={this.state.nav1}
                          gallary={true}
                          ref={(slider) => (this.slider2 = slider)}
                          slidesToShow={5}
                          // swipeToSlide={true}
                          focusOnSelect={true}
                        >
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg1}
                          />
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg2}
                          />
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg1}
                          />
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg2}
                          />
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg1}
                          />
                          <img
                            alt="customer"
                            className="img-fluid mx-auto"
                            src={CSimg1}
                          />
                        </Slider>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col md={5} sm={5} xs={12}>
                <div className="ratingbox">
                  <h3>Add a Review</h3>
                  <div className="form-inputs ">
                    <h5 className="form-label inputlabel">Username</h5>
                    <input
                      className="form-input"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <h5>Your Rating</h5>
                  <textarea placeholder="Your Review..."></textarea>
                  <div className="RatingboxIcon">
                    <BiStar size="2em" color="red" />
                    <BiStar size="2em" color="red" />
                    <BiStar size="2em" color="red" />
                    <BiStar size="2em" color="red" />
                    <BiStar size="2em" color="red" />
                  </div>
                  <div className="ReviewBtnCenter">
                    <button className="ReviewBtn ">submit</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
//  <CustomerSlider />

export default Customer;
