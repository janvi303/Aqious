import React, { useState } from "react";
// import './Form.css';
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import SighUpSideImg from "images/SighUp/SighUpSideImg.png"
import FormSignIn from "pages/SIGNIN/FormSignIn";
const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogin, setLogin] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const loginForm = () => {
    setLogin(!isLogin);
  };
  return (
    <>
      <div  className="form-container">
        <span className="close-btn" onClick={props.onClose}>
          ×
        </span>
        <div className="form-content-left">
          <img className="form-img" src={SighUpSideImg} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <>
          {!isLogin && (
            <FormSignup submitForm={submitForm} login={loginForm} />
          )}
          {isLogin && (
            <FormSignIn submitForm={submitForm} login={loginForm} />
          )}
          </>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
