import React from "react";
import { Row, Col } from "react-bootstrap";
import hicon1 from "images/HOMEPAGEIMG/icon/hicon1.png";
import hicon2 from "images/HOMEPAGEIMG/icon/hicon2.png";
import hicon3 from "images/HOMEPAGEIMG/icon/hicon3.png";
import hicon4 from "images/HOMEPAGEIMG/icon/hicon4.png";
function HeaderBannerIcon() {
  return (
    <>
    <div className="MainHeaderIcon">
        <Row>
          <Col className="icon" md={3} sm={3} xs={6}>
            <ul className="list-unstyled list-inline">
              <li className="d-inline-block">
                {" "}
                <img alt="footer1" src={hicon1} className="img-fluid mx-auto" />
              </li>
              <li className="d-inline-block HeaderIconText">
                <h4>No Credit Card</h4>
                <h3>Must Required</h3>
              </li>
            </ul>
          </Col>
          <Col className="icon" md={3} sm={3} xs={6}>
            <div className="HeaderVertical">
              <ul className="list-unstyled list-inline">
                <li className="d-inline-block">
                  {" "}
                  <img
                    alt="footer1"
                    src={hicon2}
                    className="img-fluid mx-auto"
                  />
                </li>
                <li className="d-inline-block HeaderIconText">
                  <h4>Money Back</h4>
                  <h3>100% Guarantee </h3>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="icon" md={3} sm={3} xs={6}>
            <div className="HeaderVertical">
              <ul className="list-unstyled list-inline">
                <li className="d-inline-block">
                  {" "}
                  <img
                    alt="footer1"
                    src={hicon3}
                    className="img-fluid mx-auto"
                  />
                </li>
                <li className="d-inline-block HeaderIconText">
                  <h4>Best price</h4>
                  <h3>Good Discount</h3>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="icon" md={3} sm={3} xs={6}>
            <div className="HeaderVertical">
              <ul className="list-unstyled list-inline">
                <li className="d-inline-block">
                  {" "}
                  <img
                    alt="footer1"
                    src={hicon4}
                    className="img-fluid mx-auto"
                  />
                </li>
                <li className="d-inline-block HeaderIconText">
                  <h4>Customer Care</h4>
                  <h3>24/7 Free support</h3>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
    </div>
    </>
  );
}

export default HeaderBannerIcon;
