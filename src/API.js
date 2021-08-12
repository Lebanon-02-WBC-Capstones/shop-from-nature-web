import { db } from "./firebase";

class API {
  static getProducts = () => {
    return new Promise((resolve) => {
      db.collection("Products").onSnapshot((snapchot) => {
        const allProducts = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(allProducts);
      });
    });
  };


   static getCategories = () => {
  return new Promise((resolve) => {
    db.collection("Categories").onSnapshot((snapchot) => {
      const allCategories = snapchot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      resolve(allCategories);
    });
  });
};

}
export default API;


  

