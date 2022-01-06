import { useState } from "react";
import { Row ,Button,Collapse} from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "images/HOMEPAGEIMG/FOOTER/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail, GrSend } from "react-icons/gr";
export  const Footer = () => { 
    function mail() {
      alert("Sucessfully Send Your Email");
    }  
    const [Useopen, UsesetOpen] = useState(false);
    const [Copen, CsetOpen] = useState(false);
    return (
      <>
        <footer className="Footer">
          <div className="container foot">
            <Row  className="footertoggle">
            <Col className=" footer1 "  xl={5} lg={5} sm={12} xs={12} md={5} >
                <img
                  className="img-fluid mx-auto"
                  alt="footer1"
                  src={logo}
                  
                  tabIndex={0}
                />
                 <div className="Footerclick">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy the industry’s standard dummy{" "}
                </p>
                <div className="Socialicon">
                  <div className="footericon">
                    <FaFacebookF size="18px" />
                  </div>
                </div>

                <div className="Socialicon ">
                  <div className="footericon">
                    <FaInstagram size="18px" />
                  </div>
                </div>

                <div className="Socialicon ">
                  <div className="footericon">
                    <FaTwitter size="18px"/>
                  </div>
                </div>

                <div className="Socialicon  ">
                  <div className="footericon">
                    <FaLinkedinIn size="18px" />
                  </div>
                </div>
              </div>
              </Col>
              <Col className="vl" xl={3} lg={3} sm={12} xs={12} md={3}>
                <div className="FooterVertical">
                <h5 className="text-uppercase footerLinkHeading" >
                    Useful links
                    <Button  className="Footer-button" onClick={() => UsesetOpen(!Useopen)} 
                    aria-controls="example-collapse-text"
                    aria-expanded={Useopen}></Button>
                  </h5>
                  <Collapse in={Useopen}>
                  <ul className="list-unstyled footerlinkfont">
                    <li>
                      <a href="#!">Home</a>
                    </li>
                    <li>
                      <a href="#!">About us</a>
                    </li>
                    <li>
                      <a href="#!">Gallery</a>
                    </li>
                    <li>
                      <a href="#!">ROOMS & SUITS</a>
                    </li>
                    <li>
                      <a href="#!">Tours</a>
                    </li>
                    <li>
                      <a href="#!">Demos</a>
                    </li>
                  </ul>
                  </Collapse>
                </div>
              </Col>

              <Col className="vl" xl={4} lg={4} sm={12}xs={12} md={4}>
                <div className="FooterVertical">
                <h5 className="text-uppercase footerLinkHeading"  tabIndex={0}>
                    Contact us
                    <Button  className="Footer-button" onClick={() => CsetOpen(!Copen)} 
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}></Button>
                  </h5>
                  <Collapse in={Copen}>
                  <div className="Footerclick">
                  <div className="fooicon">
                    <div className="footer-icon inline" width={10} height={10}>
                      <i>
                        {" "}
                        <FaPhoneAlt />
                      </i>
                    </div>
                    <p className="inline" id="name">
                      +91 11223 34455
                    </p>
                  </div>
                  <div className="fooicon">
                    <div className="footer-icon inline">
                      <i>
                        {" "}
                        <GrMail />
                      </i>
                    </div>
                    <p className="inline" id="name">
                    demo@demo.com
                    </p>
                  </div>
                  <div className="FEmail">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                    ></input>
                    <button
                    onClick={mail}
                    >
                      <i>
                        <GrSend size="1.4em" />
                      </i>
                    </button>
                  </div>
                  <span className="NewsDes">
                    We’ll reach out over email to set up a call.
                  </span>
                  </div>
                  </Collapse>
                  </div>
              </Col>
            </Row>
            <h3 className="FBtmText">Copyright© 2021, All Rights Reserved</h3>
          </div>
        </footer>
      </>
    );
}
export default Footer;
