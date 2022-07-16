import { createContext, useEffect, useState } from "react";

const API_URL = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;

function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState([]);
  const [active, setActive] = useState(0);
  const getData = async () => {
    const response = await fetch(API_URL);
    const res = await response.json();
    setProducts(res);
    setValues(res);
  };
  useEffect(() => {
    getData();
  }, []);

  const WholeRes = () => {
    setProducts(values);
    console.log(products);
  };

  const filterItems = () => {
    const updatedItems = products.filter((items) => items.gender === "Men");
    setProducts(updatedItems);
    console.log(updatedItems);
  };
  const filterItemsWomen = () => {
    const updatedItems = products.filter((items) => items.gender === "Women");
    setProducts(updatedItems);
    console.log(updatedItems);
  };

  return (
    <Cart.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        values,
        setValues,
        active,
        setActive,
        filterItems,
        filterItemsWomen,
        WholeRes
      }}
    >
      {children}
    </Cart.Provider>
  );
}

export const Cart = createContext();
export default Context;
