import React from "react";
import Gallery1 from "images/Gallery/Gallery1.png";
import Gallery2 from "images/Gallery/Gallery2.png";
import Gallery3 from "images/Gallery/Gallery3.png";
import Gallery4 from "images/Gallery/Gallery4.png";
import Gallery5 from "images/Gallery/Gallery5.png";
import Gallery6 from "images/Gallery/Gallery6.png";
import Gallery7 from "images/Gallery/Gallery7.png";
import Gallery8 from "images/Gallery/Gallery8.png";
import Gallery9 from "images/Gallery/Gallery9.png";
import { Col, Row } from "react-bootstrap";
import { RiArrowDropRightLine } from "react-icons/ri";
function Gallery() {
  return (
    <>
    <div className="container">
    <div className="AllPagesPath">
          <span className="HotelListtingPathF">Home </span>
          <RiArrowDropRightLine size="2em" color="red" />
          <RiArrowDropRightLine
            size="2em"
            color="red"
            className="HotelListingPathIcon"
          />
          <span className="HotelListtingPathS">Gallery</span>
        </div>
      <div className="text-center ">
        <h1 className="titlefont OtherPageTitle"> Gallery</h1>
      </div>
     
        <div className="">
          <div className="HeaderGalleryImg">
          
            <ul>
            <Row className="GalleryBox">
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery1}
                      alt="Gallery" />
                    <h3>Mountains and volcanos</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6}  className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery2}
                      alt="Gallery" />
                    <h3>Adventure getaways</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery3}
                      alt="Gallery" />
                    <h3>Forest escapes</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery4}
                      alt="Gallery" />
                    <h3>Hiking trails</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery5}
                      alt="Gallery" />
                    <h3>Street scenes</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery6}
                      alt="Gallery" />
                    <h3>Trending</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery7}
                      alt="Gallery" />
                    <h3>Trending</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery8}
                      alt="Gallery" />
                    <h3>Trending</h3>
                  </div>
                </a>
              </li>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={6} className="Gallery-Col">
              <li>
                <a href="/#">
                  <div>
                    <img
                      className="img-fluid mx-auto"
                      src={Gallery9}
                      alt="Gallery" />
                    <h3>Trending</h3>
                  </div>
                </a>
              </li>
              </Col>
            </Row>
            </ul>
          </div>
        </div>
        </div>
        <div className="GalleryBottomBgImg"></div> 
    </>
  );
}

export default Gallery;