import React from "react";
import validate from "../SIGNUP/validateInfo";
import useForm from "../SIGNUP/useForm";

const FormSignIn = ({ submitForm,login }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    {
      email: "",
      password: "",
    }
  );
    console.log(errors)
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
      <h1 className='SignUpInTitle'>Sign In</h1>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        {/* If You want to add User Name */}
        {/* <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* If You Want to add confirm password */}
        {/* <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <button className="form-input-btn" type="submit">
          Sign In
        </button>
        <span className="form-input-login">
          Don't have an account? Register <span style={{color: '#27cdff'}} onClick={login}>here</span>
        </span>
      </form>
    </div>
  );
};

export default FormSignIn;