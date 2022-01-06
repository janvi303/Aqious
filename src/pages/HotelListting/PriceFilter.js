import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import React from 'react';

const PriceFilter = () => {
  
  // Our States
 const [value, setValue] =  React.useState([1,100]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <div className="FilterText">
      <Typography id="range-slider" gutterBottom>
        Price
      </Typography>
      </div>
      <Slider
        value={value}
        
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      <p className="RangeFont">Your range of Price is between {value[0]} /- and {value[1]} /-</p>
    </div>
  );
}
  
export default PriceFilter;