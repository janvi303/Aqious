import { Component } from "react";
// import  files or compont or modules here
import Framework from "framework/Framework";
import Input from "Layouts/UI/Input";

class Sample extends Component {
  firstName = {
    // value: "",
    required: true,
    type: "email",
    onChange: this.change,
    placeholder: "First name",
  };
  details={
      name:"Firstname"
  };
  constructor(props) {
    super(props);

    this.state = {
      yourStateVariable: false,
    };
  }
  change(event) {
    console.log(event.target.value);
  }

  customFunction = () => {
    this.setState({ yourStateVariable: true });
  };

  render() {
    return (
      <div>
        <Input data={this.firstName} details={this.details} />
        
        <Framework />
      </div>
    );
  }
}
export default Sample;
