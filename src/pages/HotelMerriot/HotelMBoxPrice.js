import React from "react";
import { Row, Col } from "react-bootstrap";
import PriceIcon1 from "images/HOTELMERRIOT/PriceBox/PriceIcon1.png";
import PriceIcon2 from "images/HOTELMERRIOT/PriceBox/PriceIcon2.png";
import PriceIcon3 from "images/HOTELMERRIOT/PriceBox/PriceIcon3.png";

const Price = () => {
  return (
    <>
      <div className="container">
          <div className="HotelMBoxPrice">
          <Row className="HotelMBoxPriceRow" >
            <Col className="HotelMBoxPriceWhite" md={3} sm={4} lg={3} xs={4}>
            <div className="HotelMBoxPriceIcon">
              <img
                alt="HotelMBox"
                src={PriceIcon1}
                className="img-fluid mx-auto"
              />
             
              <span>199 Sq.ft</span>
              </div>
           
            </Col>
            <Col className=" HotelMBoxPriceV HotelMBoxPriceWhite " md={3} sm={4} xs={4}>
              <div className="HotelMBoxPriceVertical">
              <img
                alt="HotelMBox"
                src={PriceIcon3}
                className="img-fluid mx-auto"
              />
              
              <span>2 Bedrooms</span>
              </div>
              
            </Col>

            <Col className=" HotelMBoxPriceV HotelMBoxPriceWhite" md={3} sm={4} xs={4}>
            <div className="HotelMBoxPriceVertical">
              <img
                alt="HotelMBox"
                src={PriceIcon2}
                className="img-fluid mx-auto"
              />
             
              <span>2 Bathrooms</span>
            </div>
            </Col>
            <Col className="HotelMBoxPriceRed" md={3} sm={12} xs={12}>
            <div>
                <h6>price</h6>
                <div className="HotelMBoxPriceRedNight">
                  <span>$599.00</span>
                  <p className="HotelMBoxPriceRedText">Night</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Price;
