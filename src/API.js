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

static getProduct = () => {
  return new Promise((resolve) => {
    db.collection("Product").onSnapshot((snapchot) => {
      const allProduct = snapchot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      resolve(allProduct);
    });
  });
};
}
export default API;
