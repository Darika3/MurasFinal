import React, { useEffect, useState } from "react";
import "../Products/ProductFood.css";
import "../Products/Products.css";
import foodMainPic from "../Products/assetsProducts/traditionalClothes.jpg";
import Navbar from "../Navbar/Navbar";
import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import ProductCard from "../Products/ProductCard";
import { useProduct } from "../../context/ProductContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
const Clothes = () => {
  const { products, getProducts } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();
  // !SEARCH
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // !PAGINATION

  //pagination
  const [page, setPage] = useState(1); // текущая страница
  const itemsPerPage = 3; // кол-во элементов на одной странице
  const count = Math.ceil(products?.length / itemsPerPage); // общее кол-во страниц пагинации

  // функция для изменения состояния текущей страницы
  const handleChange = (e, p) => {
    setPage(p);
  };

  // функция, которая возвращает только те элементы, которые должны отображаться на текущей странице
  function currentData() {
    // начальный индекс
    const begin = (page - 1) * itemsPerPage;
    // конечный индекс
    const end = begin + itemsPerPage;
    // возвращаем массив, состоящий из фиксированного кол-ва элементов
    return products.slice(begin, end);
  }
  return (
    <div>
      <Navbar />
      <div id="clothContainerMain">
        <div id="clothMainLeft">
          <p id="clothMainLeftParag">
            Traditional clothing in Kyrgyzstan reflects the rich cultural
            heritage and nomadic traditions of the Kyrgyz people. One iconic
            garment is the "chapan," a long, loose-fitting coat made from
            vibrant, handwoven fabric adorned with intricate patterns and
            embroidery.
          </p>
        </div>
        <img id="clothMainImage" src={foodMainPic} alt="" />
        <div id="clothMainRight">
          <p id="clothMainRightParag">
            The traditional clothing of Kyrgyzstan not only showcases the
            artistic skills and craftsmanship of the Kyrgyz people but also
            serves as a visual representation of their cultural identity and
            heritage.
          </p>
          <button id="clothMainRightButton">Order Now</button>
          <div className="homePage__item-socialIcon">
            <a href="#">
              <img className="social-icon" src={instagram} alt="instagram" />
            </a>

            <a href="#">
              <img className="social-icon" src={telegram} alt="telegram" />
            </a>

            <a href="#">
              <img className="social-icon" src={facebook} alt="facebook" />
            </a>

            <a href="#">
              <img className="social-icon" src={WhatsApp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="product__food_card-container">
        <div className="item_filter-btn">
          <button>Outerwear</button>
          <button>Headdress</button>
          <button>Shoes</button>
        </div>
        <div>
          <h1>PRODUCT LIST</h1>
          {products.map((item) =>
            item.category === "Outerwear" ||
            item.category === "Headdress" ||
            item.category === "Shoes" ? (
              <ProductCard key={item.id} item={item} />
            ) : null
          )}
          <Pagination
            sx={{ display: "flex", justifyContent: "center" }}
            count={count}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Clothes;
