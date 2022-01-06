import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BestR1 from "images/HOMEPAGEIMG/BestRoomIMG/BestR1.png";
import BestR2 from "images/HOMEPAGEIMG/BestRoomIMG/BestR2.png";
import BestR3 from "images/HOMEPAGEIMG/BestRoomIMG/BestR3.png";
import Button from "@restart/ui/esm/Button";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "BRCenterOpa",
      centerMode: true,
      centerPadding: "260px",
      slidesToShow: 3,
      speed: 500,
      infinite: true,
      gallary: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            centerPadding: "50px",
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "140px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "0px",
          }
        }
      ]
    };
    return (
      <div>
        <div className="text-center">
          <h1 className="titlefont"> Related Rooms </h1>
        </div>
        <div className="bestroomclass">
            <Slider {...settings}>
              <Card xs={12}>
                <div className="best-Room">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="footer1"
                    variant="top"
                    src={BestR2}
                  />
                  <Card.Body className="BestRoomCardText">
                    <Card.Title className="bestRoomCardTitle">
                      Super Delux Room
                    </Card.Title>
                    <Card.Text className="bestRoomFtext">
                      5 Adults And 6 Children
                    </Card.Text>
                    <Card.Text className="bestRoomStext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                    <Button className="BestRoomBtn">Book Now $ 499.00</Button>
                  </Card.Body>
                </div>
              </Card>
              <Card xs={12}>
                <div className="best-Room">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="footer1"
                    variant="top"
                    src={BestR3}
                  />
                  <Card.Body className="BestRoomCardText">
                    <Card.Title className="bestRoomCardTitle">
                      Super Delux Room
                    </Card.Title>
                    <Card.Text className="bestRoomFtext">
                      5 Adults And 6 Children
                    </Card.Text>
                    <Card.Text className="bestRoomStext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                    <Button className="BestRoomBtn">Book Now $ 499.00</Button>
                  </Card.Body>
                </div>
              </Card>
              <Card xs={12}>
                <div className="best-Room">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="footer1"
                    variant="top"
                    src={BestR1}
                  />
                  <Card.Body className="BestRoomCardText">
                    <Card.Title className="bestRoomCardTitle">
                      Super Delux Room
                    </Card.Title>
                    <Card.Text className="bestRoomFtext">
                      5 Adults And 6 Children
                    </Card.Text>
                    <Card.Text className="bestRoomStext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                    <Button className="BestRoomBtn">Book Now $ 499.00</Button>
                  </Card.Body>
                </div>
              </Card>
              <Card xs={12}>
                <div className="best-Room">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="footer1"
                    variant="top"
                    src={BestR3}
                  />
                  <Card.Body className="BestRoomCardText">
                    <Card.Title className="bestRoomCardTitle">
                      Super Delux Room
                    </Card.Title>
                    <Card.Text className="bestRoomFtext">
                      5 Adults And 6 Children
                    </Card.Text>
                    <Card.Text className="bestRoomStext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                    <Button className="BestRoomBtn">Book Now $ 499.00</Button>
                  </Card.Body>
                </div>
              </Card>
              <Card xs={12}>
                <div className="best-Room">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="footer1"
                    variant="top"
                    src={BestR1}
                  />
                  <Card.Body className="BestRoomCardText">
                    <Card.Title className="bestRoomCardTitle">
                      Super Delux Room
                    </Card.Title>
                    <Card.Text className="bestRoomFtext">
                      5 Adults And 6 Children
                    </Card.Text>
                    <Card.Text className="bestRoomStext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                    <Button className="BestRoomBtn">Book Now $ 499.00</Button>
                  </Card.Body>
                </div>
              </Card>
            </Slider>
        </div>
      </div>
    );
  }
}
