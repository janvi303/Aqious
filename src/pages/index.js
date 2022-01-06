import "assets/css/App.css";
import "assets/css/styles.css";
import Footer from "Layouts/UI/Footer";
import { Modal } from "react-bootstrap";
import { Route, Switch } from "react-router";
import Home from "../pages/HomePage/Home";
import MainHotelMerriot from "./HotelMerriot/MainHotelMerriot";
import MainHotelListting from "./HotelListting/MainHotelListting";
import ScrollToTop from "../Layouts/UI/ScrollToTop";
import Form from "../pages/SIGNUP/Form";
import Pop from "Layouts/UI/Pop";
import { useState } from "react";
import Gallery from "./Gallery/Gallery";
import AboutUs from "./AboutUs/AboutUs";
import DefultScrollToTop from "../../src/Layouts/UI/DefultScrollToTop";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainHeader from "./HomePage/MainHeader.js"
import SHeader from "Layouts/UI/SHeader";

import {Redirect} from 'react-router-dom';
const HomePage = () => {

  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/aboutus" ||
      location.pathname === "/gallery" ||
      location.pathname === "/roomssuits"
    ) {
     // console.log(location.pathname);
    } else {
     // console.log(location.pathname);
    }
    if (location.pathname === "/gallery") {
    }
  }, [location]);
  const [modalShow, setModalShow] = useState(false);
  const setMenu = () => {
    setModalShow(true);
  }
  return (
    <div className="App ">
      {/* {console.log(location.pathname)} */}
      {(location.pathname === '/' || location.pathname === '/home' || location.pathname === '/tours') && <MainHeader onShowMenu={setMenu} />}
      {(location.pathname === '/gallery' || location.pathname === '/roomssuits' || location.pathname === '/aboutus') && <SHeader onShowMenu={setMenu} />}


      <Switch>
        <Route path="/tours">
          <DefultScrollToTop />
          <MainHotelMerriot  onShowMenu={setMenu}/>
        </Route>

        <Route path="/roomssuits">
          <DefultScrollToTop />
          <MainHotelListting />
        </Route>

        <Route path="/gallery">
          <DefultScrollToTop />
          <Gallery />
        </Route>

        <Route path="/aboutus">
          <DefultScrollToTop />
          <AboutUs />
        </Route>

        <Route path="/Signin">
          <Pop />
        </Route>

        <Route path="/BookNow">
          <MainHotelListting />
        </Route>

        <Route path="/home">

          <DefultScrollToTop />
          <Home />

        </Route>

        <Route path="/">
          <Redirect to="/home" /> 
        </Route>
      </Switch>

      <ScrollToTop />

      <Footer></Footer>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form onClose={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}
export default HomePage;
