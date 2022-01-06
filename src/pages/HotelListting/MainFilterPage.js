import React from "react";
import { Row, Col } from "react-bootstrap";
import Filters from "../HotelListting/Filters";
import ListRoom from "../HotelListting/ListRoom";

function MainFilterPage() {
  return (
    <>
      <div className="container">
        <Row>
          <Col className="FilterPartWidth" xl={3} lg={3} md={3}>
            <Filters />
          </Col>
          <Col xl={9} lg={9} md={9}>
            <ListRoom />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MainFilterPage;
