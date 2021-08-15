import React, { useState, useEffect } from "react";
import Select from "react-select";
import API from "../../API";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";

const MyCategories = ({products}) => {
  const [catg, setCategories] = useState([]);
  useEffect(() => {
    API.getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  let array = [];
  if (catg.length != 0) {
    //console.log(catg);
    for (let i = 0; i < catg.length; i++) {
     // console.log(catg[i]);
      array.push({ value: catg[i].value, label: catg[i].value });
    }
  }

  const [result, selectedCategory]= useState(array.label);
  const categoryPrds = products.filter((prod) => prod.Category == result);

// .map((filteredProduct)=>(
//   <ShopListItem
//           key={filteredProduct.id}
//           img={filteredProduct.img1}
//           title={filteredProduct.Name}
//           price={filteredProduct.Price}
//         />
// ));
  const catHandler =(e) => {
   selectedCategory(e.label);
   console.log (categoryPrds);
   }

  return (
    <>
      {array.length != 0 && (
        <div className="w-32 mr-12">
          <Select options={array} onChange={catHandler} />
          <p>{result}</p>
        </div>
      )}
    </>
  );
};

export default MyCategories;
