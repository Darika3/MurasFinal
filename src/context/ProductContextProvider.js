import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API, PRODUCTS } from "../helpers/const";

export const productsContext = createContext();
export const useProduct = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
  productDetails: [],
  commentsState: {},
};
// функция reducer
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

  // стягиваем данные
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
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
  // !tourDetails
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}${window.location.search}/${id}`);
    dispatch({
      type: PRODUCTS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  function getFilterClothes() {
    return state.products.filter((elem) => elem.category === "clothes");
  }
  function getFilterSouvenirs() {
    return state.products.filter((elem) => elem.category === "souvenirs");
  }
  function getFilterFood() {
    return state.products.filter((elem) => elem.category === "food");
  }
  // !filer
  const location = useLocation();
  // console.log(location.pathname);

  const filterByTtype = async (query, value) => {
    const filter = new URLSearchParams(window.location.filter);
    if (value === "") {
      filter.delete(query);
    } else {
      filter.set(query, value);
    }
    const url = `${location.pathname}?${filter.toString()}`;
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
    getComments,
    setCommentsState,
    filterByTtype,
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
