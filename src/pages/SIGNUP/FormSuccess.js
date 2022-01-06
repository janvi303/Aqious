import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
     <i className="SuccessIcon"> <BsCheck2Circle size="5em" color="white"/></i>
          </div>
  );
};

export default FormSuccess;