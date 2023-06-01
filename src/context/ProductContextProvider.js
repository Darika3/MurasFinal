import axios from "axios";
import React, { useReducer } from "react";
import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);
export const API = "http://34.125.229.224";

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
      };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.refresh}`;
    const config = {
      headers: {
        Authorization: `Bearer ${tokens.access}`,
      },
    };
    console.log(config);
    return config;
  }

  async function createProduct(newProduct) {
    try {
      const res = await axios.post(`${API}/products/`, newProduct, getConfig());
      console.log(res);
      navigate("/products");
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const res = await axios(`${API}/products/`, getConfig());
      console.log(res);
      navigate("/products");
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/products/${id}/`, getConfig());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/products/${id}/`, editedProduct, getConfig());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(state.products);
  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    updateProduct,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
