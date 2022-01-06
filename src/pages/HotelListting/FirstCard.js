import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import BR1 from "images/HOTELLISTTING/RoomImg/BR1.png";
import BR1_1 from "images/HOTELLISTTING/RoomImg/BR1_1.png";
import BR1_2 from "images/HOTELLISTTING/RoomImg/BR1_2.png";
import locationIcon from "images/HOTELLISTTING/CardAddLocation/locationIcon.png";
import FacilitiesImg1 from "images/HOTELLISTTING/CardAddLocation/FacilitiesImg1.png";
import FacilitiesImg2 from "images/HOTELLISTTING/CardAddLocation/FacilitiesImg2.png";
import FacilitiesImg3 from "images/HOTELLISTTING/CardAddLocation/FacilitiesImg3.png";
import FacilitiesImg4 from "images/HOTELLISTTING/CardAddLocation/FacilitiesImg4.png";
import Links from "Layouts/UI/common/Links";

import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
export class FirstCard extends Component {
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
        <div>
          <div className="row">
            <Col>
              <div>
                <div>
                  <Row>
                    <Col
                      className="list-img"
                      md={this.props.active ? "" : 6}
                      sm={this.props.active ? 12 : 6}
                    >
                      <Row>
                        <Col md={10} sm={12} xs={12} className="BigSliderImg">
                          <Slider
                            className="ListSlider"
                            vertical={false}
                            arrows={true}
                            autoplay={true}
                            infinit={true}
                            speed={300}
                            asNavFor={this.state.nav2}
                            ref={(slider) => (this.slider1 = slider)}
                          >
                            <div>
                              <Col>
                                {" "}
                                <img
                                  alt="FirstCard"
                                  className="img-fluid mx-auto"
                                  src={BR1}
                                />
                              </Col>
                            </div>
                            <div>
                              <Col>
                                <img
                                  alt="FirstCard"
                                  className="img-fluid mx-auto"
                                  src={BR1}
                                />
                              </Col>
                            </div>
                            <div>
                              <Col>
                                <img
                                  alt="FirstCard"
                                  className="img-fluid mx-auto"
                                  src={BR1}
                                />
                              </Col>
                            </div>
                            <div>
                              <Col>
                                <img
                                  alt="FirstCard"
                                  className="img-fluid mx-auto"
                                  src={BR1}
                                />
                              </Col>
                            </div>
                          </Slider>
                        </Col>

                        <Col md={2} className="SmallIconSlider">
                          <Slider
                            className="smalliconroom"
                            dots={false}
                            infinite={true}
                            centerMode={false}
                            arrows={false}
                            vertical={true}
                            verticalSwiping={true}
                            asNavFor={this.state.nav1}
                            gallary={true}
                            ref={(slider) => (this.slider2 = slider)}
                            slidesToShow={4}
                            // swipeToSlide={true}
                            focusOnSelect={true}
                          >
                            <img
                              alt="FirstCard"
                              className="img-fluid mx-auto"
                              src={BR1_1}
                            />
                            <img
                              alt="FirstCard"
                              className="img-fluid mx-auto"
                              src={BR1_1}
                            />
                            <img
                              alt="FirstCard"
                              className="img-fluid mx-auto"
                              src={BR1_2}
                            />
                            <img
                              alt="FirstCard"
                              className="img-fluid mx-auto"
                              src={BR1_1}
                            />
                            <img
                              alt="FirstCard"
                              className="img-fluid mx-auto"
                              src={BR1_1}
                            />
                          </Slider>
                        </Col>
                      </Row>
                    </Col>
                    <>
                      {" "}
                      <Col md={6} sm={6} xs={12}>
                        <div className="HotelListCardText">
                          <div className="HotelListCardHeadingText d-inline">
                            <h3>Hotels, Merriot, in Dubai</h3>
                            <Links id="headerfonteffect" to="/tours">
                              <span href="/#">View More</span>
                            </Links>
                          </div>
                          <div className="HotelListCardAddressText">
                            <h3>Lorem ipsum doller sit lorem ipsum</h3>
                            <img alt="FirstCard" src={locationIcon} />
                            <span>5.9 KM</span>
                          </div>
                          <div className="HotelListCardRatingText">
                            <div className="CardStar">
                              <BsStarFill
                                className="StarSpace"
                                size="1.5em"
                                color="#ECB411"
                              />
                              <BsStarFill
                                className="StarSpace"
                                size="1.5em"
                                color="#ECB411"
                              />
                              <BsStarFill
                                className="StarSpace"
                                size="1.5em"
                                color="#ECB411"
                              />
                              <BsStarFill
                                className="StarSpace"
                                size="1.5em"
                                color="#ECB411"
                              />
                              <BsStar
                                className="StarSpace"
                                size="1.5em"
                                color="red"
                              />
                            </div>
                            <span className="RatingNumber">(2999 Rating)</span>
                            <span>Excellent</span>
                          </div>
                          {!this.props.active && (
                            <div className="FacilitiesIcon">
                              <img alt="FirstCard" src={FacilitiesImg1} />
                              <img alt="FirstCard" src={FacilitiesImg2} />
                              <img alt="FirstCard" src={FacilitiesImg3} />
                              <img alt="FirstCard" src={FacilitiesImg4} />

                              <a href="/#">+5 More</a>
                            </div>
                          )}
                          <div className="CardPrice d-flex align-items-center">
                            <div>
                            <span className="hotelMsideSliderS">$449.00</span>
                            <span className="hotelMsideSliderT">$349.00</span>
                            <span className="RoomOffer">10% OFF</span><h6>Per room per night</h6>
                            </div>
                            <div>
                            {/* <Button className="headerbtn liquidbg"> */}
                              <Links id="headerfonteffect" to="/tours">
                                <Button className="CardBookNowBTN">Book Now</Button>
                              </Links>
                            {/* </Button> */}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </>
                  </Row>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </>
    );
  }
}

export default FirstCard;
