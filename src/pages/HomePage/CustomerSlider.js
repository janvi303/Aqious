// import React, { Component } from "react";
// import Slider from "react-slick";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import CSimg1 from 'images/Customer/R1.png'
// import CSimg2 from 'images/Customer/R2.png'
// export default class AsNavFor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nav1: null,
//             nav2: null
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             nav1: this.slider1,
//             nav2: this.slider2
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <h2>Slider Syncing (AsNavFor)</h2>
//                 <h4>First Slider</h4>
//               <Row>  
//                   <Col><Slider
//                   verticalHeight={300}
//                     asNavFor={this.state.nav2}
//                     ref={slider => (this.slider1 = slider)}
//                 >
//                     <div>
//                      <img src={CSimg1} />
//                     </div>
//                     <div>
//                      <img src={CSimg2} />
//                     </div>
//                     <div>
//                      <img src={CSimg1} />
//                     </div>
//                     <div>
//                      <img src={CSimg2} />
//                     </div>
//                     <div>
//                      <img src={CSimg1} />
//                     </div>
                    
//                 </Slider>
//                 </Col>
//                 <Col>
                
//                 <Slider 
//                 vertical={true}
//                     asNavFor={this.state.nav1}
//                     gallary={true}
//                     ref={slider => (this.slider2 = slider)}
//                     slidesToShow={3}
//                     swipeToSlide={true}
//                     focusOnSelect={true}
//                 >
                    
//                     <div className="">
//                     <img src={CSimg1} />
//                     </div>
//                     <div>
//                     <img src={CSimg2} />
//                     </div>
//                     <div>
//                     <img src={CSimg1} />
//                     </div>
//                     <div>
//                     <img src={CSimg2} />
//                     </div>
//                     <div>
//                     <img src={CSimg1} />
//                     </div>
                   
//                 </Slider>
//                 </Col>
//                 </Row>
//             </div>

//         );
//     }
// }