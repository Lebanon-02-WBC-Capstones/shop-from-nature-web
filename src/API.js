import { db } from "./firebase";

class API {
  static getProducts = () => {
    return new Promise((resolve, reject) => {
      db.collection("Products").onSnapshot((snapchot) => {
        const allProducts = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(allProducts);
      });
    });
  };
}

export default API;
