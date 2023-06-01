import React, { useEffect, useState } from "react";
import "../Products/ProductFood.css";
import "../Products/Products.css";
import foodMainPic from "../Products/assetsProducts/product-food.png";

import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";

import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import ProductCard from "../Products/ProductCard";
import { useProduct } from "../../context/ProductContextProvider";
import Navbar from "../Navbar/Navbar";

const ProductFood = () => {
  const { getProducts, products, pages } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  function getPagesCount() {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }
  const [currentPage, setCurrentPage] = useState(1);
  getPagesCount();
  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log("products", products);
  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);
  return (
    <>
      <Navbar />
      <div className="product__food_main-container">
        <div className="product__food_img">
          <img src={foodMainPic} alt="ProducFoodmainImg" />
        </div>
        <div className="product__food-right">
          <div className="product__food_text">
            <h1>Feel the Taste of Kyrgyz Traditional Food</h1>
            <p>
              Indulge in the delectable flavors of Kyrgyz cuisine, a true feast
              for the senses. From the tender Beshbarmak to the savory Manty and
              the comforting Shorpo, Kyrgyz food offers a delightful blend of
              hearty meats, aromatic spices, and fresh herbs. Prepare to savor
              the rich cultural heritage and culinary traditions of this Central
              Asian gem with every bite.
            </p>
          </div>
          <div className="product__food-btn">
            <button>Order Now</button>
          </div>
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
          <button>Meal</button>
          <button>Drinks</button>
          <button>Snacks</button>
        </div>
        <div>
          <h1>PRODUCT LIST</h1>
          {products.map((item) =>
            item.category === "Meal" ||
            item.category === "Snacks" ||
            item.category === "Drinks" ? (
              <ProductCard key={item.id} item={item} />
            ) : null
          )}
          <Pagination>
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
            {getPagesCount().map((item) =>
              item === currentPage ? (
                <Pagination.Item
                  onClick={() => setCurrentPage(item)}
                  key={item}
                  active
                >
                  {item}
                </Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => setCurrentPage(item)}
                  key={item}
                >
                  {item}
                </Pagination.Item>
              )
            )}

            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ProductFood;
