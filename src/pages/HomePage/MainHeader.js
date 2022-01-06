import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import logo from "images/HOMEPAGEIMG/FOOTER/logo.png";
import MainLogo from "images/HOMEPAGEIMG/BG/MainLogo.png";
import Button from "@restart/ui/esm/Button";
const { useLocation } = require("react-router-dom");
const MainHeader = (props) => {
  var className = "inverted";
  const location = useLocation();
  const [addClass, setAddClass] = useState("");
  // const [logoImg, setLogo] = useState("blackLogo");
  var scrollTrigger = 20;

  window.onscroll = function () {
    
    setAddClass();
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("nav")[0].classList.add(className);
      // setLogo("blackLogo");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove(className);
      // setLogo("whiteLogo");
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        expand="md"
        className=" fixed-top"
      >
        <div className="container">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted headerMainLogo">
            <img
              className="BLogo img-fluid mx-auto"
              alt="MainHeader"
              src={
                location.pathname === "/home" || location.pathname === "/tours"
                  ? logo
                  : MainLogo
              }
            />
            <img className="WLogo" alt="MainHeader" src={MainLogo}/>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="MainHeader justify-content-center">
          <Nav activeKey={window.location.pathname} className={addClass}>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/tours">
              <Nav.Link>Tours</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/roomssuits">
              <Nav.Link>Rooms & Suits</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="#">
              <span
                onClick={() => props.onShowMenu(true)}
                style={{ color: "black !important" }}
              >
                <Nav.Link>Sign up</Nav.Link>
              </span>
            </LinkContainer>
           
          </Nav>
          
        </Navbar.Collapse>
        <LinkContainer to="/roomssuits">
              <Button
                className="headerbtn liquidbg"
                id="headerfonteffect"
                to="/BookNow"
              >
                Book Now
              </Button>
            </LinkContainer>
        </div>
      </Navbar>
    </>
  );
};
export default MainHeader;
