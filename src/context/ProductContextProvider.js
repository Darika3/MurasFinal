import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API, PRODUCTS } from "../helpers/const";

export const productsContext = createContext();
export const useProduct = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case PRODUCTS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case "ADD_COMMENTS":
      return { ...state, commentsState: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: PRODUCTS.GET_PRODUCTS, payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(`${API}`, newProduct);
    navigate("/products");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/products");
  };

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: PRODUCTS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const getFilterClothes = () => {
    return state.products.filter((elem) => elem.category === "clothes");
  };

  const getFilterSouvenirs = () => {
    return state.products.filter((elem) => elem.category === "souvenirs");
  };

  const getFilterFood = () => {
    return state.products.filter((elem) => elem.category === "food");
  };
  // filter
  const location = useLocation();

  const filterByType = async (query, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value === "") {
      searchParams.delete(query);
    } else {
      searchParams.set(query, value);
    }
    const url = `${location.pathname}?${searchParams.toString()}`;
    navigate(url);
  };
  // !Comments

  async function getComments(obj) {
    state.productDetails.comment.push(obj);
    const newObj = {
      ...state.productDetails,
      comment: state.productDetails.comment,
    };
    await axios.patch(`${API}/${state.productDetails.id}`, newObj);
  }

  function setCommentsState(a) {
    dispatch({
      type: "ADD_COMMENTS",
      payload: a,
    });
  }
  const values = {
    filterByType,
    getFilterFood,
    getFilterSouvenirs,
    getFilterClothes,
    getProducts,
    addProduct,
    products: state.products,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    productDetails: state.productDetails,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
