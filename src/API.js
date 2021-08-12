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

  static getBlogs = () => {
    return new Promise((resolve) => {
      db.collection("Blogs").onSnapshot((snapchot) => {
        const allBlogs = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(allBlogs);
      });
    });
  };
}
export default API;


  

<<<<<<< HEAD
=======
export default API;
>>>>>>> 691701cba16bad125638357e5771f30ea43858e5
