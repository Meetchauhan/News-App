import { useState } from "react";
import "./filter.css";
import Select from "react-select";
function Country(props) {
  const [country, setCountry] = useState("in");

  const option = [
    { value: "in", label: "India" },
    { value: "af", label: "Afghanistan" },
    { value: "ar", label: "Argentina" },
    { value: "au", label: "Australia" },
    { value: "bd", label: "Bangladesh" },
    { value: "kh", label: "Cambodia" },
    { value: "ca", label: "Canada" },
    { value: "cn", label: "China" },
    { value: "co", label: "Colombia" },
    { value: "eg", label: "Egypt" },
    { value: "fi", label: "Finland" },
    { value: "fr", label: "France" },
    { value: "dc", label: "Germany" },
    { value: "hk", label: "Hong kong" },
    { value: "hu", label: "Hungary" },
    { value: "is", label: "Iceland" },
    { value: "id", label: "Indonesia" },
    { value: "iq", label: "Iraq" },
    { value: "ie", label: "Ireland" },
    { value: "il", label: "Israel" },
    { value: "it", label: "Italy" },
    { value: "jp", label: "Japan" },
    { value: "jo", label: "Jordan" },
    { value: "ke", label: "Kenya" },
    { value: "kw", label: "Kuwait" },
    { value: "my", label: "Malaysia" },
    { value: "mx", label: "Mexico" },
    { value: "mm", label: "Myanmar" },
    { value: "np", label: "Nepal" },
    { value: "nl", label: "Netherland" },
    { value: "nz", label: "New zealand" },
    { value: "kp", label: "North korea" },
    { value: "no", label: "Norway" },
    { value: "pk", label: "Pakistan" },
    { value: "ph", label: "Philippines" },
    { value: "pl", label: "Poland" },
    { value: "pt", label: "Portugal" },
    { value: "ru", label: "Russia" },
    { value: "sa", label: "Saudi arabia" },
    { value: "sg", label: "Singapore" },
    { value: "za", label: "South africa" },
    { value: "kr", label: "South korea" },
    { value: "es", label: "Spain" },
    { value: "lk", label: "Sri Lanka" },
    { value: "sd", label: "Sudan" },
    { value: "se", label: "Sweden" },
    { value: "ch", label: "Switzerland" },
    { value: "tw", label: "Taiwan" },
    { value: "th", label: "Thailand" },
    { value: "tr", label: "Turkey" },
    { value: "ua", label: "Ukraine" },
    { value: "gb", label: "United kingdom" },
    { value: "us", label: "United states of america" },
    { value: "vi", label: "Vietnam" },
    { value: "zm", label: "Zambia" },
    { value: "zw", label: "Zimbabwe" },
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
      <Select
        onChange={countryFilter}
        options={option}
        placeholder="Select Country"
      />
      {props.onChangeCountry(country)}
    </div>
  );
}
export default Country;
