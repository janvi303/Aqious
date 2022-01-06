import React, { Component } from "react";
import RoomBg from "images/HOMEPAGEIMG/Rooms/RoomBg.png";
import Ricon1 from "images/HOMEPAGEIMG/Rooms/Ricon1.png";
import Ricon2 from "images/HOMEPAGEIMG/Rooms/Ricon2.png";
import Ricon3 from "images/HOMEPAGEIMG/Rooms/Ricon3.png";
import Ricon4 from "images/HOMEPAGEIMG/Rooms/Ricon4.png";
import RoomVimg from "images/HOMEPAGEIMG/Rooms/RoomVimg.png";
import { Col, Row } from "react-bootstrap";
import Links from "Layouts/UI/common/Links";

class Room extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center room">
            <h1 className="titlefont">Rooms & Suits</h1>
          </div>
          <Row>
            <Col lg={7} md={7} xs={12} sm={6}>
              <img className="img-fluid mx-auto" alt="RoomsSuits" src={RoomBg} />

              <div className="text-block">
                <Row className="text-block-center">
                  <Col md={10} sm={12}>
                    <div className="roominnerfont">
                      <div className="d-inline-block">
                        <span className="roomInnerPrice">$450 </span>
                        <span className="roomInnerPricePerNight">
                          {" "}
                          / Per Night{" "}
                        </span>
                      </div>
                      <h2>Family Rooms 5</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>

                      <Links id="headerfonteffect" to="/roomssuits">
                        <button className="roombtn">Book Now</button>
                      </Links>                      
                    </div>
                  </Col>
                  <Col md={2} className="RoomVimg">
                    <img alt="Rooms&suits"  className="img-fluid mx-auto" src={RoomVimg} />
                  </Col>
                </Row>
              </div>
            </Col>
            
            <Col lg={5} md={5} sm={6} className="iconSet">
              <div className="ser">
                <Row > 
                  <Col lg={6} md={6}sm={6} xs={6} >
                    <div data-aos="zoom-in" data-aos-duration="500" id="rcorners1">
                      <div className="roomIconFont">
                        <img className="img-fluid mx-auto" alt="Rooms&suits" src={Ricon1} />
                        <h6>Fast wifi</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}  md={6} sm={6} xs={6} >
                    <div data-aos="zoom-in" data-aos-duration="500" id="rcorners2">
                      <div className="roomIconFont">
                        <img className="img-fluid mx-auto" alt="Rooms&suits" src={Ricon2} />
                        <h6>Free food</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row> 
                  <Col lg={6}  md={6} sm={6} xs={6} >
                    <div data-aos="zoom-in" data-aos-duration="500" id="rcorners3">
                      <div className="roomIconFont">
                        <img className="img-fluid mx-auto" alt="Rooms&suits" src={Ricon3} />
                        <h6>Bath</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}  md={6} sm={6} xs={6} >
                    <div data-aos="zoom-in" data-aos-duration="500" id="rcorners4">
                      <div className="roomIconFont">
                        <img className="img-fluid mx-auto" alt="Rooms&suits" src={Ricon4} />
                        <h6>Coffee</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Room;
