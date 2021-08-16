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


  static getCategories = () => {
    return new Promise((resolve) => {
      db.collection("Categories").onSnapshot((snapchot) => {
        const Categories = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(Categories);
      });
    });
  };

  static getFacts = () => {
    return new Promise((resolve) => {
      db.collection("Facts").onSnapshot((snapchot) => {
        const Facts = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(Facts);
      });
    });
  };

  static setContactData = (data) => {
    db.collection("Contact-us").add(data);
  };

  static setCart = (data) => {
    db.collection("Cart").add(data);
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

  static getCart = () => {
    return new Promise((resolve) => {
      db.collection("Cart").onSnapshot((snapchot) => {
        const Items = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(Items);
      });
    });
  };

  static deleteProduct = async (id) => {
    db.collection("Cart").doc(id).delete();
  };

}
export default API;
