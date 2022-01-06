import Subscribe from "./Subscribe";
import React, { useEffect } from "react";
import ExploreNearby from "./ExploreNearby";
import MaskGroup from "./MaskGroup";
import LiveAny from "./LiveAny";
import Room from "./Room";
import Insta from "./Insta";
import BestRoom from "./BestRoom";
import NewsEvent from "./NewsEvent";
import Customer from "./Customer";
import Headerbox from "./Headerbox";
import HeaderBannerIcon from '../HomePage/HeaderBannerIcon';
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  
    return (
        <>
        
            <div className="bannerimg justify-content-center align-items-center">
                <div className="text-center">
                    
                    <h1 data-aos="fade-down" className="bannerFont">Welcome to Aqiuos</h1>
                    <h2 data-aos="fade-down" className="bannerFont1">Find Deals On Hotels </h2>
                </div>
                <div className="container">
               
                <Headerbox/>
                <HeaderBannerIcon/>
                </div>
            </div>
            <ExploreNearby />
            <MaskGroup />
            <LiveAny />
            <Room />
            <Insta />
            <BestRoom />
            <NewsEvent />
            <Customer />
            <Subscribe />
            {/* <CustomerCircle /> */}
        </>
    );
};
export default Home;