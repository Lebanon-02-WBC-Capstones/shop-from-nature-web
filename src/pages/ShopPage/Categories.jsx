import React, { useState, useEffect } from "react";
import Select from "react-select";
import API from "../../API";

const MyCategories = () => {
  const [catg, setCategories] = useState([]);
  useEffect(() => {
    API.getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  let array = [];
  if (catg.length != 0) {
    console.log(catg);
    for (let i = 0; i < catg.length; i++) {
      console.log(catg[i]);
      array.push({ value: catg[i].value, label: catg[i].value });
    }
  }

  return (
    <>
      {array.length != 0 && (
        <div className="w-32 mr-12">
          <Select options={array} />
        </div>
      )}
    </>
  );
};

export default MyCategories;
