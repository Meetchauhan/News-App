import { useState } from "react";
import Select from "react-select";

function Category(props) {
  const [category, setCategory] = useState("");
  const options = [
    { value: "top", label: "Top" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "environment", label: "Environment" },
    { value: "food", label: "Food" },
    { value: "health", label: "Health" },
    { value: "politics", label: "Politics" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "tourism", label: "Tourism" },
  ];

  function categoryFilter(e) {
    setCategory(e.value);
  }
//   console.log(category);

  return (
    <div className="category-filter filter">
      <Select options={options} onChange={categoryFilter} placeholder="Select Catagory" />
      {props.onChangeCategory(category)}
    </div>
  );
}
export default Category;
