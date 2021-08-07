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

  static getBlogs = () => {
    return new Promise((resolve, reject) => {
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
