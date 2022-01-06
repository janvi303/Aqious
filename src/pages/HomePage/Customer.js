import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import rightQuotes from "images/HOMEPAGEIMG/Customer/rightQuotes.png";
import CustomerCircle from "./CustomerCircle";
import Slider from "react-slick";
import CSimg1 from "images/HOMEPAGEIMG/Customer/R1.png";
import CSimg2 from "images/HOMEPAGEIMG/Customer/R2.png";
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
        <div className="customerMain container">
            <div className="text-center ">
              <h1 className="titlefont">Our Happy Customer</h1>
            </div>
            <Row className="Custsubmain">
              <Col lg={7} md={12}>
                <div className="customer"></div>
                <div className="customer1"></div>

                <div className=" text-block2">
                  <div className="CustReview">
                    <Row>
                      <Col md={10} xs={12}>
                          {" "}
                          <img
                            alt="customer"
                            className="rightQuotes img-fluid mx-auto   "
                            src={rightQuotes}
                          />

                        <Slider
                          className="profile"
                          vertical={true}
                          arrows={false}
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
                            <Col xl={8} md={12} className="cusmian" >
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
                            <Col xl={8} md={12}className="cusmian">
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
                            <Col xl={8} md={12}className="cusmian">
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

                      <Col md={2} className="rightslide">
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

              <Col lg={5}  >
                <CustomerCircle />
              </Col>
            </Row>
        </div>
      </>
    );
  }
}

export default Customer;
