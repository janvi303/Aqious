import React, { Component } from "react";
import Form from "../../pages/SIGNUP/Form";
export default class PopUp extends Component {

  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <Form/>
    </div>
   </div>
  );
 }
}