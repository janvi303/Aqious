// import { Component } from "react";
import {  NavLink } from "react-router-dom";
// export default class Links extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <NavLink
//           to={this.props.to}
//           className="nav-link"
//           activeClassName="active"
//           onClick={()=>{this.props.handleClick()}}
//         >
//           {this.props.children}
//         </NavLink>
//       </>
//     );
//   }
// }

const Links = (props)=>{
  return (
    <>
      <NavLink
        to={props.to}
        className="nav-link"
        activeClassName="active"
        onClick={props.onClick}
      >
        {props.children}
      </NavLink>
    </>
  );
}
export default Links;