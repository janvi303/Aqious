import React from "react";
// import "./Room.css";
// import { useState } from "react";
// import { Dropdown } from "react-bootstrap";



  class RoomGuest extends React.Component {
    constructor() {
      super();
      this.state = {
        clicked: false,
        quantityroom: 1,
        quantityguest: 1,
        show: true,
        max: 5,
        min: 0,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
  
    componentWillMount() {
      document.addEventListener("click", this.handleOutsideClick, false);
    }
  
    componentWillUnmount() {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    handleClick() {
      this.setState({ clicked: !this.state.clicked });
    }
    handleOutsideClick(event) {
      if (!this.refs.megaMenu.contains(event.target)) {
        this.setState({
          clicked: false,
        });
      }
    }
  
    RoomIncrementItem = () => {
      this.setState((prevStateRoom) => {
        if (prevStateRoom.quantityroom < 20) {
          return {
            quantityroom: prevStateRoom.quantityroom + 1,
          };
        } else {
          return null;
        }
      });
    };
      
    
    RoomDecreaseItem = () => {
      this.setState((prevStateRoom) => {
        if (prevStateRoom.quantityroom > 0) {
          return {
            quantityroom: prevStateRoom.quantityroom - 1,
          };
        } else {
          return null;
        }
      });
    };

    GuestIncrementItem = () => {
      this.setState((prevStateGuest) => {
        if (prevStateGuest.quantityguest < 9) {
          return {
            quantityguest: prevStateGuest.quantityguest + 1,
          };
        } else {
          return null;
        }
      });
    };
    GuestDecreaseItem = () => {
      this.setState((prevStateGuest) => {
        if (prevStateGuest.quantityguest > 0) {
          return {
            quantityguest: prevStateGuest.quantityguest - 1,
          };
        } else {
          return null;
        }
      });
    };
    ToggleClick = () => {
      this.setState({
        show: !this.state.show,
      });
    };
    handleRoomChange = (event) => {
      this.setState({ quantityroom: event.target.value });
    };
    handleGuestChange = (event) => {
      this.setState({ quantityguest: event.target.value });
    };
  
    render() {
      return (
       
          <div className="Room-bar">
            {/* Menu*/}
            <div className="Room-bar-item" ref="megaMenu">
              <a className="Room-bar-link" href="#/"  onClick={this.handleClick}>
                Add guest and rooms
              </a>
             
               
              <div className={"mega-menu " +  this.state.clicked}>

                <div className="mega-menu-content">
                 
                  <div className="RoomButton">
                  <h4 className="d-inline">Room</h4>
                    <button onClick={this.RoomIncrementItem} className="d-inline">+</button>
                    <input
                      className="inputne"
                      value={this.state.quantityroom}
                      onChange={this.handleRoomChange}
                    />
                    <button onClick={this.RoomDecreaseItem} className="d-inline">-</button>
                  </div>
                  
                 
                  <div className="RoomButton">
                  <h4 className="d-inline">Guest</h4>
                    <button onClick={this.GuestIncrementItem} className="d-inline">+</button>
                    <input
                      className="inputne"
                      value={this.state.quantityguest}
                      onChange={this.handleGuestChange}
                    />
                    <button onClick={this.GuestDecreaseItem} className="d-inline">-</button>
                  </div>
                  
                </div>
              </div>
             
            </div>
          </div>
      );
    }
  }
  
  export default RoomGuest;