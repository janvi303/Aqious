import React from "react";
// import "./Room.css";
// import { useState } from "react";
// import { Dropdown } from "react-bootstrap";


class  Adlutnumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      show: true,
      max: 5,
      min: 0
    };
  }

  IncrementItem = () => {
      this.setState(prevState => {
        if(prevState.quantity < 9) {
          return {
            quantity: prevState.quantity + 1
          }
        } else {
          return null;
        }
      });
  }
  DecreaseItem = () => {
    this.setState(prevState => {
      if(prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }
  ToggleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange = (event) => {
    this.setState({quantity: event.target.value});
  }

  render() {

    return ( 
    <div className="adult">
      
      <button onClick={this.IncrementItem}>+</button>
      <input className="HotelCardAdultRoom" value={this.state.quantity} onChange={this.handleChange} placeholder="Adult"/>
      <button onClick = {this.DecreaseItem}>-</button>
    </div>
    );
  }
}


export default Adlutnumber;
