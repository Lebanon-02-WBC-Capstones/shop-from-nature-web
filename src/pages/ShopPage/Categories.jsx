
import React, { useState, useEffect } from "react";
import Select from "react-select";
import API from "../../API";


 const MyCategories = () => {
  const [catg, setCategories] = useState([]);
  useEffect(() => {
      API.getCategories().then((categories) => {
        console.log(categories);
        setCategories(categories);
      });
    }, []);
        
     //const catego = [];
    //catg.map((category)=> catego.push(category));
   //<Select  options={catg}/>

  return (
    <div className="w-24 mr-12">
     <Select
            {...catg.map((category) => (
              <option key={category.id} value={category.value}>{category.label}</option>
            ))} />
    </div>
  );
};
 
 
export default MyCategories;
