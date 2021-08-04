import React from "react";
import Select from "react-select";


const options = [
    { value: "Wood", label: "Wood" },
    { value: "Glass", label: "Glass" },
    { value: "Recycled", label: "Recycled" }
  ];
  
  const MyCategories = () => {
      return (
          <div className="w-24 mr-5"> 
     <Select  options={options} />
     </div>
      );
    
      };

  export default MyCategories;