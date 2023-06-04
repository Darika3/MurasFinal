import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import { FAV } from "../helpers/const";
import { calcTotalPrice, getCountProductsInFavs } from "../helpers/function";
export const favoriteContext = createContext();
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
  favLength: getCountProductsInFavs(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV:
      return { ...state, favorite: action.payload };
    case FAV.GET_FAV_LENGTH:
      return { ...state, favLength: action.payload };
    default:
      return state;
  }
}
// стягиваем данные
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFav = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({
          products: [],
        })
      );
      favorite = {
        products: [],
      };
    }
    dispatch({
      type: FAV.GET_FAV,
      payload: favorite,
    });
  };
  //  добавляем
  const addProductToFav = (product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = { products: [] };
    }
    let newProduct = {
      item: product,
    };
    // проверка продукта
    let productToFind = favorite.products.filter(
      (elem) => elem.item.id === product.id
    );
    // add if not be
    if (productToFind.length === 0) {
      favorite.products.push(newProduct);
      //   delete if be
    } else {
      favorite.products = favorite.products.filter(
        (elem) => elem.item.id != product.id
      );
    }
    // помещаем в Local
    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({ type: FAV.GET_FAV, payload: favorite });
  };
  const checkProductInFav = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      let newFav = favorite.products.filter((elem) => elem.item.id == id);
      return newFav.length > 0 ? true : false;
    }
  };

  // удаление товара из корзины
  const deleteFavProduct = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    // перебираем массив  в итоге останутся только те продукты, у которых id не совпадает с переданным id при вызове
    favorite.products = favorite.products.filter((elem) => elem.item.id !== id);

    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({
      type: FAV.GET_FAV,
      payload: favorite,
    });
  };
  const values = {
    getFav,
    addProductToFav,
    checkProductInFav,
    favorite: state.favorite,
    deleteFavProduct,
  };
  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
