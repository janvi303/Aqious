import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import Headerbox from "pages/HomePage/Headerbox";

function HotelLisstingHeader() {
  return (
    <>
      <div className="ListingMain">
        <div className="container"> 
          <div className="HotelListtingHeader">
            <span className="HotelListtingPathF">Home </span>
            <RiArrowDropRightLine size="2em"color="red" />
            <RiArrowDropRightLine size="2em"color="red" className="HotelListingPathIcon"/>
            <span className="HotelListtingPathS">Hotels and More</span>
            <h3>Hotels, Merriot, in Dubai</h3>
          </div>
        </div>
        <Headerbox/>
        </div>
        <div className="HotelListtingAlert">
          <div className="">
            <div className="AlertIcon">
            <FiAlertTriangle size="1.5em" />
            </div>
            
            <p className="d-inline">
              Please check the travel advisory issued by the concerned state
              government/local authorities before booking, as some places may
              have COVID-19 related travel/lodging restrictions.
            </p>
          </div>
        </div>
    </>
  );
}

export default HotelLisstingHeader;
