import "assets/css/styles.css";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MainLogo from "images/HOMEPAGEIMG/BG/MainLogo.png";
// import { useState } from "react";

function SHeader(props) {
  // const [logoImg, setLogo] = useState("blackLogo");

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        expand="md"
        className="fixed-top "
      >
        <div className="container">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted SHeaderMainLogo">
              <img className="img-fluid mx-auto" alt="footer1" src={MainLogo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="Sheader justify-content-center">
            <Nav activeKey={window.location.pathname} className="nav-color">
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
}

export default SHeader;
