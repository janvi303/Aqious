import React from "react";
import HotelMerriot from "../HotelMerriot/HotelMerriotBanner";
import HotelAmenities from "../HotelMerriot/HotelAmenities";
import HotelMBoxPrice from "../HotelMerriot/HotelMBoxPrice";
import DescriptionTab from "../HotelMerriot/DescriptionTab";
import HotelFacilities from "../HotelMerriot/HotelFacilities";
import RelatedRooms from "../HotelMerriot/RelatedRooms";
import CustomerReview from "../HotelMerriot/CustomerReview";

const MainHotelMerriot = (props) => {

  const showMenu=()=>{
    props.onShowMenu(true);
  }

  // onClick={() => props.onShowMenu(true)}
  return (
    <>
      <HotelMerriot  onShow={showMenu} />
      <HotelAmenities />
      <HotelMBoxPrice />
      <DescriptionTab />
      <HotelFacilities />
      <RelatedRooms />
      <CustomerReview />
    </>
  );
};

export default MainHotelMerriot;
