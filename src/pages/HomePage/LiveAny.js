import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import live1 from "images/HOMEPAGEIMG/LiveAny/Live1.png";
import live2 from "images/HOMEPAGEIMG/LiveAny/Live2.png";
import live3 from "images/HOMEPAGEIMG/LiveAny/Live3.png";
import live4 from "images/HOMEPAGEIMG/LiveAny/Live4.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";

const LiveAny = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="LiveAnyMain">
        <div className="text-center ">
          <h1 className="titlefont"> Live Anywhere</h1>
        </div>
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
          <Row>
          <Slider {...settings}>
            {/* <div className="livecard"> */}
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live1} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live1}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Outdoor Getaways </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live2} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live2}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Unique Stays </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live3} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live3}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Entire Homes </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live4} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live4}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Pets Allowed </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live1} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live1}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Outdoor Getaways </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live2} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live2}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Unique Stays </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live3} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live3}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Entire Homes </h1>
            </div>
            </Col>
            <Col>
            <div className="LiveAnyImg">
              <div className="LiveAnyPost ">
                <img alt="footer1" src={live4} className="img-fluid mx-auto" />
                <div className="LiveAnyPosthover">
                  <div className="LiveAnyPostIcon">
                    <div className="LiveAnyIcon ">
                      <a
                        className="Liveicon zoom"
                        title="LiveAny "
                        href={live4}
                        data-lightbox="example-set"
                      >
                        {" "}
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="Liveanyfont"> Pets Allowed </h1>
            </div>
            </Col>
            {/* </div> */}
          </Slider>
          </Row>
        </div>
      </div>
    </>
  );
};
export default LiveAny;
