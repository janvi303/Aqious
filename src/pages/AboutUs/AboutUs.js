import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AboutUs1 from "images/AboutUs/AboutUs1.png";
import AboutUs2 from "images/AboutUs/AboutUs2.png";
import AboutUs3 from "images/AboutUs/AboutUs3.png";
import { RiArrowDropRightLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="LiveAnyBgImg">
        <div
          data-aos="fade-up-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="live"
        ></div>

        <div
          data-aos="fade-down-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="live2"
        ></div>
      </div>

      <div className="container">
        <div className="AllPagesPath">
          <span className="HotelListtingPathF">Home </span>
          <RiArrowDropRightLine size="2em" color="red" />
          <RiArrowDropRightLine
            size="2em"
            color="red"
            className="HotelListingPathIcon"
          />
          <span className="HotelListtingPathS">About Us</span>
        </div>
        <div className="text-center ">
          <h1 className="titlefont OtherPageTitle"> About Us</h1>
        </div>
        <div className="AboutUsFirstMainPart">
          <Row>
            <Col xs={12} xl={4} lg={4} md={4}>
              <h3 className="AboutUsFirstTitle">
                <p>Everything. </p> Right where you need it.
              </h3>
            </Col>
            <Col xs={12} xl={4} lg={4} md={4}>
              <p className="AboutUsFirstText">
                {" "}
                A wonderful serenity has taken possession of my entire soul
                charm, like these so sweet mornings of spring which I enjoy with
                mines whole heart. I feel charm of existence in this spot, of
                souls like mine. I am so happy, dear.
              </p>
            </Col>
            <Col xs={12} xl={4} lg={4} md={4}>
              <p className="AboutUsFirstText">
                {" "}
                When, while the lovely valley teems with vapour around me, the
                upper surface of the <span>impenetrable foliage</span> of my
                trees, and but a few stray gleams steal into the inner sanctuar.
              </p>
            </Col>
          </Row>
        </div>
        <div className="AboutUs">
          <div>
            <Row className="MainPartMiddel ">
              <Col
                className="AboutUsImgMainDiv"
                xs={12}
                xl={6}
                lg={6}
                md={6}
                sm={6}
              >
                <img
                  className="img-fluid mx-auto"
                  src={AboutUs1}
                  alt="Fashionable-looking girl with blond hair and pink sunglasses"
                />
              </Col>
              <Col  xs={12} xl={6} lg={6} md={6} sm={6}>
                <div className="AboutUsText">
                <h3>Coffee in Malmö</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="MainPartMiddel">
              <Col xs={12} xl={6} lg={6} md={6} sm={6}>
                <div className="AboutUsText">
                  <h3>Relax Zone</h3>

                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. At vero eos et accusamus et
                    iusto odio dignissimos ducimus qui.
                  </p>
                </div>
              </Col>

              <Col
                className="AboutUsImgMainDiv"
                xs={12}
                xl={6}
                lg={6}
                md={6}
                sm={6}
              >
                <img
                  className="img-fluid mx-auto"
                  src={AboutUs2}
                  alt="Fashionable-looking girl with blond hair and pink sunglasses"
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row className="MainPartMiddel">
              <Col
                className="AboutUsImgMainDiv"
                xs={12}
                xl={6}
                lg={6}
                md={6}
                sm={6}
              >
                <img
                  className="img-fluid mx-auto"
                  src={AboutUs3}
                  alt="Fashionable-looking girl with blond hair and pink sunglasses"
                />
              </Col>

              <Col xs={12} xl={6} lg={6} md={6} sm={6}>
                <div className="AboutUsText">
                  <h3>Luxury Bath</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
