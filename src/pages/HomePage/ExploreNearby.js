import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Explore1 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear1.png";
import Explore2 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear2.png";
import Explore3 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear3.png";
import Explore4 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear4.png";
import Explore5 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear5.png";
import Explore6 from "images/HOMEPAGEIMG/ExploreNearbyIMG/Exnear6.png";


export class ExploreNearby extends Component {
  render() {
    return (
      <>
        <div className="ExploreNearby">
          <div className="container  ">
            <div className="text-center ">
              <h1 className="titlefont">Explore Nearby</h1>
            </div>
            <Row className="MainExploreCard">
              
              <Col xl={4} lg={4} md={4} sm={4} xs={6} data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block  ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore1} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>Dubai</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore2} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>India</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6}  data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore3} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>Canada</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
            

           
              <Col xl={4} lg={4} md={4} sm={4} xs={6} data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore4} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>Abu-Dhabi</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6}data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore5} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>Spain</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} data-aos="zoom-in" className=" exporefont">
                <ul className="list-unstyled list-inline exploreimg">
                  <li className="d-inline-block ">
                    {" "}
                    <img className="ENBInnerIMG" alt="footer1" src={Explore6} />
                  </li>
                  <li className="d-inline-block">
                    <span>
                      <h3>Italy</h3>

                      <h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h6>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default ExploreNearby;
