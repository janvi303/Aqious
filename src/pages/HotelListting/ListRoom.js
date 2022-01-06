import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import FirstCard from "../HotelListting/FirstCard";
import SecondCard from "../HotelListting/SecondCard";
import Iframe from "react-iframe";

const Combo = (props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="ListRoomTitlePart">
        <Row className="ListRoom">
          <Col md={6} sm={12} xs={12}>
            <h3 className="Listtitle">Hotels, Merriot, in Dubai</h3>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="MapView">
              <h3 className="Listmap d-inline"> Map view</h3>
              <label className="switch ">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    setActive(!active);
                  }}
                ></span>
              </label>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="selectdiv ">
              <select>
                <option defaultValue="Short By"> Sort By </option>
                <option>Guest Ratings</option>
                <option>Price Low to High</option>
                <option> Price High to Low</option>
                <option> Show Closest OYO</option>
              </select>
            </div>
          </Col>
        </Row>
      </div>
      <div className="row">
        <div
          className={"col-12 " + (active ? "col-sm-6 mapview" : "col-sm-12")}
        >
          <div className="MainCardDiv">
            <FirstCard active={active} />
            <hr className="CardMap" />
            <SecondCard active={active} />
            <hr className="CardMap" />
            <FirstCard active={active} />
            <hr className="CardMap" />
            <SecondCard active={active} />
            <hr className="CardMap" />
            <FirstCard active={active} />
            <hr className="CardMap" />
            <SecondCard active={active} />
          </div>
        </div>

        {active && (
          <div className="col-sm-6 col-xs-12">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 1 }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Combo;

// function ListRoom() {
//   return (
//     <>
//       <div className="ListRoomTitlePart">
//         <h3>Hotels, Merriot, in Dubai</h3>

//         <Dropdown className="dropdownListRoom">
//           <Dropdown.Toggle variant="success">Short by</Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item href="#">Guest Ratings</Dropdown.Item>
//             <Dropdown.Item href="#">Price Low to High</Dropdown.Item>
//             <Dropdown.Item href="#">Price High to Low</Dropdown.Item>
//             <Dropdown.Item href="#">Show Closest OYO</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//       <FirstCard />
//       <hr />
//       <SecondCard />
//       <hr />
//       <FirstCard />
//       <hr />
//       <SecondCard />
//       <hr />
//       <FirstCard />
//       <hr />
//       <SecondCard />
//       <hr />
//     </>
//   );
// }

// export default ListRoom;
