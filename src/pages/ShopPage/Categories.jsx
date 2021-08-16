import React from "react";
import Select from "react-select";
import { LanguageContext } from "../../App";
const options = [
  { value: "Wood", label: "Wood" },
  { value: "Glass", label: "Glass" },
  { value: "Recycled", label: "Recycled" },
];

const MyCategories = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="w-24 mr-12">
      <Select options={options} />
    </div>
  );
};

export default MyCategories;
