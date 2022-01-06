import React from "react";
import { Col, Row } from "react-bootstrap";
import PriceFilter from "../HotelListting/PriceFilter";
  function Filters() {
  return (
    <>
      <div>
      <div className="HotelLisstingFilterPart">
          <Row className="Hotellisting"> 
            <Col md={6}>
              <h4 className="HotelLisstingFilterTextF">Filters</h4>
            </Col>
            <Col md={6}>
              <h4 className="HotelLisstingFilterTextS">Clear All</h4>
            </Col>
          </Row>
        </div>
      
        <PriceFilter />
        <div className="checkbox">
         
          <h3>Collections</h3>
          <div className="CheckBoxSpacing">
          <input className="checkboxsize"   type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > sanitised b4 ur eyes</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Vaccinated Staff</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label > Local IDs accepted</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Free Breakfast</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Free Cancellation</label>
          </div>
          <hr />
          <h3>Locality</h3>
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > Dubai</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Canada</label>
          </div>
          <br />

          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > London</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Usa</label>
          </div>
          <hr />
          <h3>Star Category</h3>
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > 5 Star</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > 3 Star</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Other</label>
          </div>
          <hr />
          <h3>Hotel Facilities</h3>
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > Seating Area</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Ac</label>
          </div>
          <br />

          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Outdoor Sports</label>
          </div>
          <br />
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label > Full Size Bed</label>
          </div>
          <hr />
          <h3>Check-in features</h3>
          <div className="CheckBoxSpacing">
          <input className="checkboxsize" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > Pay at Hotel</label>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Filters;