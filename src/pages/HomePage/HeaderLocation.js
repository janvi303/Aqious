import React, { useState, useEffect } from "react";
import "assets/css/select-search.css";
import SelectSearch, { fuzzySearch } from "react-select-search";

import "assets/css/styles.css";
const Combo = (props) => {
  const [multipleValues, setMultipleValues] = useState([]);
  const [values, setValues] = useState([]);
  

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        const api_data = [];
        api_data.push(
          
        );
        setValues(data.data.map((ind) => {
          return {
            name: ind.city + " " + ind.country,
            value: ind.city + " " + ind.country,
          };
        }));
      
      });
  }, []);
  

  return (
    <div>
      <div className="HeaderLocation">
        <SelectSearch
          multiple={false}
          printOptions={"on-focus"}
          closeOnSelect={true}
          options={values}
          value={multipleValues}
          onChange={setMultipleValues}
          search
          filterOptions={fuzzySearch}
          placeholder="Where are you going?"
        />
      </div>
    </div>
  );
};

export default Combo;
