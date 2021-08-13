import React, { useState, useEffect } from "react";
import Select from "react-select";
import API from "../../API";


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
//   const categoryItems = () => {
//    {
//     products
//     .filter((prod) => prod.Category == selectedCategory)
//     .map((filteredProduct) => (
//       <Link key ={filteredProduct.id} to={`productDetail/${filteredProduct.id}`}>
//         <ShopListItem
//           key={filteredProduct.id}
//           img={filteredProduct.img1}
//           title={filteredProduct.Name}
//           price={filteredProduct.Price}
//         />
//       </Link>
//     ))
//    }
  
//}

const [result, selectedCategory]= useState(array.label);
const catPrds = products.filter((prod) => prod.Category == result);
const catHandler =(e) => {
  selectedCategory(e.label);
  console.log (catPrds);
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
