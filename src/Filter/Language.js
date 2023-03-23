import { useState } from "react";
import Select from "react-select";

function Language(props) {
  const [language, setLanguage] = useState("");
  const options = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
  ];

  function languageFilter(e) {
    setLanguage(e.value);
  }

  return (
    <div className="language-filter filter" >
      <Select options={options} onChange={languageFilter} placeholder="Select Language" />
      {props.onChangeLanguage(language)}
    </div>
  );
}
export default Language;
