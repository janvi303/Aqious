import React from "react";
import Slider from "react-slick";
import Insta1 from "images/HOMEPAGEIMG/InstaImg/Insta1.png";
import Insta2 from "images/HOMEPAGEIMG/InstaImg/Insta2.png";
import Insta3 from "images/HOMEPAGEIMG/InstaImg/Insta3.png";
import Insta4 from "images/HOMEPAGEIMG/InstaImg/Insta4.png";
import Insta5 from "images/HOMEPAGEIMG/InstaImg/Insta5.png";
import Insta6 from "images/HOMEPAGEIMG/InstaImg/Insta6.png";
import { FaInstagram } from 'react-icons/fa';
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
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
const Insta = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className="titlefont"> Our Instagram</h1>
      </div>
      <div className="insta">
      <Slider {...settings}>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta1} className="img-fluid mx-auto" />
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta2} className="img-fluid mx-auto" />
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta3} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta4} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta5} className="img-fluid mx-auto" />
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta6} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta1} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta2} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta3} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta4} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta5} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="recent ">
            <img alt="Instagram" src={Insta6} className="img-fluid mx-auto"/>
              <div className="blog-post-hover">
                <div className="blog-icon">
                  <div className="instaicon ">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Insta;