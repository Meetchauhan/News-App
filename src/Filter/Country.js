import { useState } from "react";
import "./filter.css";
import Select from "react-select";
function Country(props) {
  const [country, setCountry] = useState("in");

  const option = [
    { value: "in", label: "India" },
    { value: "au", label: "Australia" },
    { value: "ru", label: "Russia" },
    { value: "ch", label: "Switzerland" },
    { value: "il", label: "Israel" },
  ];

  function countryFilter(e) {
    setCountry(e.value);
  }
//   console.log(country);
  return (
    <div className="country-filter filter">
      {/* <select value={country} onChange={countryFilter}>
        <option value="in">India</option>
        <option value="au">Australia </option>
        <option value="ru">Russia </option>
        <option value="ch">Switzerland</option>
        <option value="is">Iceland</option>
        <option value="il">Israel</option>
      </select> */}
          <Select onChange={countryFilter} options={option} placeholder='Select Country' />
      {props.onChangeCountry(country)}
    </div>
  );
}
export default Country;
