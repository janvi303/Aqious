import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Modal } from "react-bootstrap"
import { Col } from "react-bootstrap";
import News1 from "images/HOMEPAGEIMG/newsEvent/News1.png";
import News2 from "images/HOMEPAGEIMG/newsEvent/News2.png";
import News3 from "images/HOMEPAGEIMG/newsEvent/News3.png";
import NewsBG from "images/HOMEPAGEIMG/newsEvent/NewsBG.png";
import Iframe from "react-iframe";
const NewsEvent = () => {
  const [show1, setShow1] = useState(false);
    return (
      <div>
        <div className="text-center ">
          <h1 className="titlefont"> News And Events</h1>
        </div>
        <div className="container">
          <Row>
            <Col xl={7} lg={12} className="VideoImg">
              <div className="video">
              <img alt="footer1" src={NewsBG} className="img-fluid mx-auto"/>
                <div className="Playbtn"onClick={() => setShow1(true)}>
                  <i>  
                  </i>
                </div>
                <Modal
                  show={show1}
                  onHide={() => setShow1(false)}
                  centered
                  className="NewsEventModel"
                >
                 <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                      <Iframe className="VideoIframe" src="https://player.vimeo.com/video/45998585?color=afddd2&title=0&byline=0" width={500} height={275}/>
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
            <Col xl={5} className="NewsEventSider">
              <Row className="NewsContainRow">
                <Col lg={6} md={6} sm={6} xs={6} className="NewsEventSiderImg">
                  <div className="text-block1">
                    <img
                      className="img-fluid mx-auto"
                      alt="footer1"
                      src={News1}
                    />
                    <span className="Newsdate">
                      <h4>01</h4>
                      <h6>oct</h6>
                    </span>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}className="newsfont ">
                  <h3>John Deo - 01.10.2021</h3>
                  <h4>Lorem Ipsum Doller</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Col>
              </Row>
              <Row className="newstext NewsContainRow">
                <Col lg={6} md={6}  sm={6} xs={6} className="NewsEventSiderImg">
                  <div className="text-block1">
                    <img
                      className="img-fluid mx-auto"
                      alt="footer1"
                      src={News2}
                    />
                    <span className="Newsdate">
                      <h4>09</h4>
                      <h6>oct</h6>
                    </span>
                  </div>
                </Col>
                <Col lg={6} md={6}  sm={6} xs={6} className="newsfont">
                  <h3>John Deo - 09.10.2021</h3>
                  <h4>Lorem Ipsum Doller</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Col>
              </Row>
              <Row className="NewsContainRow">
                <Col lg={6} md={6}  sm={6} xs={6} className="NewsEventSiderImg">
                  <div className="text-block1">
                    <img
                      className="img-fluid mx-auto"
                      alt="footer1"
                      src={News3}
                    />
                    <span className="Newsdate">
                      <h4>14</h4>
                      <h6>oct</h6>
                    </span>
                  </div>
                </Col>
                <Col lg={6} md={6}  sm={6}  xs={6} className="newsfont">
                  <h3>John Deo - 14.10.2021</h3>
                  <h4>Lorem Ipsum Doller</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default NewsEvent;
