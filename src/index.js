import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavoriteContextProvider from "./context/FavoriteContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import ForumContextProvider from "./context/ForumContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <ForumContextProvider>
            <FavoriteContextProvider>
              <App />
            </FavoriteContextProvider>
          </ForumContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
