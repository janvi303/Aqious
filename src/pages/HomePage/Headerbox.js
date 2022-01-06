import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import DatePicker from "react-datepicker";
import HeaderLocation from "./HeaderLocation";
import "react-datepicker/dist/react-datepicker.css/";
import RoomGuest from "./RoomGuest";
import Links from "Layouts/UI/common/Links";

function Headerbox() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setendDate] = useState(null);

  const handleCheckInDate = (date) => {
    setStartDate(date);
    setendDate(null);
  };
  const handleCheckOutDate = (date) => {
    setendDate(date);
  };

  return (
    <>
      <div className="text-center">
        <div className="rounded-pill" alt="">
          <Row className="HeaderBox">
            <Col md={4} sm={4} xs={12}>
              <div className="HeaderBoxTitle HederBoxTitleMargin">
                <h4> Loacation</h4>
                <HeaderLocation />
              </div>
            </Col>
            <Col md={2} sm={4} xs={12} className="Headercol">
              <div className="HeaderboxVertical">
                <div className="HeaderBoxTitle">
                  <h4>Check in</h4>
                  <DatePicker
                    className="HeaderBoxInputDate"
                    selected={startDate}
                    minDate={new Date()}
                    onChange={handleCheckInDate}
                    selectsStart
                    dateFormat="dd/MM/yyyy"
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Add dates"
                  />
                </div>
              </div>
            </Col>
            <Col md={2} sm={4} xs={12} className="Headercol">
              <div className="HeaderboxVertical">
                <div className="HeaderBoxTitle">
                  <h4> Check out</h4>
                  <DatePicker
                     className="HeaderBoxInputDate"
                    selected={endDate}
                    minDate={startDate}
                    onChange={handleCheckOutDate}
                    selectsEnd
                    dateFormat="dd/MM/yyyy"
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Add dates"
                  />
                </div>
              </div>
            </Col>
            <Col md={4} sm={12} xs={12} className="Headercol">
              <div className="HeaderboxVertical">
                <Row className="HeaderboxGuestRoom">
                  <Col xl={10} lg={10} md={10}sm={9} xs={9}className="HeaderBoxTitle">
                    <h4> Guest & Room</h4>
                    <RoomGuest />
                  </Col>

                  <Col xl={2} lg={2} md={2} sm={3} xs={2} className="SearchIcon">
                    <Links id="headerfonteffect" to="/roomssuits">
                      
                      <i>
                        <BsSearch size="22px" color="#FFFFFF" />
                      </i>
                    </Links>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Headerbox;
