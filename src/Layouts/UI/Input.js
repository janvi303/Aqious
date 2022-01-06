import { Component } from "react";

export default class Input extends Component {
  
  render() {
    return (
      <label>
        <span>{this.props.details.name}</span>
        <input {...this.props.data} />
      </label>
    );
  }
}
