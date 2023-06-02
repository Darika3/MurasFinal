import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API, PRODUCTS } from "../helpers/const";

export const productsContext = createContext();
export const useProduct = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};
// функция reducer
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case PRODUCTS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // стягиваем данные
  const getProducts = async () => {
    const { data } = await axios(`${API}`);
    dispatch({ type: PRODUCTS.GET_PRODUCTS, payload: data });
  };

  // добавление нового продукта
  const addProduct = async (newProduct) => {
    await axios.post(`${API}`, newProduct);
    navigate("/products");
  };

  // удаление
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  // сохранение изм продукта
  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/products");
  };
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: PRODUCTS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const values = {
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
