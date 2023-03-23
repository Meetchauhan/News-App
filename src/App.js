import { useState } from "react";
import "./App.css";
import Category from "./Filter/Category";
import Country from "./Filter/Country";
import Language from "./Filter/Language";
import News from "./News";

function App() {
  let heading = "News";

  const [countryFilter, setCountryFilter] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [languageFilter, setLanguageFilter] = useState();

  // console.log(countryFilter);
  return (
    <div className="container">
      <header>
        <h1 className="heading">{heading}</h1>
      </header>
      <div className="filter-section">
        <Country onChangeCountry={setCountryFilter} />
        <Category onChangeCategory={setCategoryFilter} />
        <Language onChangeLanguage={setLanguageFilter} />
      </div>
      <News
        country={countryFilter}
        category={categoryFilter}
        language={languageFilter}
      />
    </div>
  );
}

export default App;
