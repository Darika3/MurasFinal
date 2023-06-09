import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products/Products";

import AddProduct from "../components/Products/Crud/AddProduct";
import MainPage from "../components/MainPage/MainPage";
import HomePage from "../components/HomePage/HomePage";
import Clothes from "../components/Products/Clothes";
import Souvenirs from "../components/Products/Souvenirs";
import ProductFood from "../components/Products/Food";
import Culture from "../components/Culture/Culture";
import Tours from "../components/Tours/Tours";
import Cart from "../components/Cart/Cart";
import Auth from "../components/Auth/Auth";
import EditProduct from "../components/Products/Crud/EditProduct";

import MultidaysTour from "../components/Tours/MultidaysTour";
import HorseRiding from "../components/Tours/HorseRiding";
import FavPage from "../FavPage";
import TrekkingTours from "../components/Tours/TrekkingTours";
import BuyNow from "../components/Cart/BuyNow";
import Forum from "../components/Forum/Forum";

import ToursDeatails from "../components/Tours/ToursDetails";
import Topic from "../components/Forum/Topic";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/main", element: <MainPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/products", element: <Products />, id: 3 },
    { link: "/clothes", element: <Clothes />, id: 4 },
    { link: "/souvenirs", element: <Souvenirs />, id: 5 },

    { link: "/trek", element: <TrekkingTours />, id: 6 },
    { link: "/multidays", element: <MultidaysTour />, id: 7 },
    { link: "/horse", element: <HorseRiding />, id: 16 },
    { link: "/food", element: <ProductFood />, id: 8 },
    { link: "/culture", element: <Culture />, id: 9 },
    { link: "/tours", element: <Tours />, id: 10 },
    { link: "/cart", element: <Cart />, id: 11 },
    { link: "/admin", element: <AddProduct />, id: 12 },
    { link: "/authtor", element: <Auth />, id: 13 },
    { link: "/edit/:id", element: <EditProduct />, id: 14 },
    { link: "/fav", element: <FavPage />, id: 15 },
    { link: "/buy", element: <BuyNow />, id: 16 },
    { link: "/forum", element: <Forum />, id: 18 },
    { link: "/topic/:id", element: <Topic />, id: 19 },

    { link: "/tourDetails/:id", element: <ToursDeatails />, id: 17 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
