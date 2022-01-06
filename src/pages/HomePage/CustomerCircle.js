import React, { Component } from "react";

import CusIcon1 from "images/HOMEPAGEIMG/Customer/CusIcon1.png";
import CusIcon2 from "images/HOMEPAGEIMG/Customer/CusIcon2.png";
import CusIcon3 from "images/HOMEPAGEIMG/Customer/CusIcon3.png";

export class  CustomerCircle extends Component {
  render() {
    return (
      <>
        <div className="customerCircle CustomerCricle2">
          <div className="main">
            <div className="circle"></div>
            <div className="circle1"></div>

            <div className="CustBox1">
              <div className="custboxtext">
                <img alt="customer" src={CusIcon1} />
                {/* <Col><img alt="customer" src={Ctext1} /></Col> */}
                <h3>28+</h3>
                <p>COUNTRIES</p>
              </div>
            </div>

            <div className="CustBox2">
              <div className="custboxtext">
                <img alt="customer" src={CusIcon2} />
                <h3>200+</h3>
                <p>Our Team</p>
              </div>
            </div>

            <div className="CustBox3">
              <div className="custboxtext">
                <img alt="customer" src={CusIcon3} />
                <h3>300+</h3>
                <p>Travelling</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerCircle;
