import React, { useEffect, useState } from "react";
import "../Products/ProductFood.css";
import "../Products/Products.css";
import souvenirsimg from "../Products/assetsProducts/traditionalSouvenirs.jpg";
import Navbar from "../Navbar/Navbar";
import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import ProductCard from "../Products/ProductCard";
import { useProduct } from "../../context/ProductContextProvider";
const Souvenirs = () => {
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
  console.log(products);
  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);
  return (
    <>
      <Navbar />
      <div id="souvenirsMainContainer">
        <div id="souvenirsMainLeft">
          <h2 id="souvenirsMainLeftHeader">
            Capturing the Spirit of Kyrgyzstan: Souvenirs That Tell a Tale!
          </h2>
          <p id="souvenirsMainLeftParag">
            Discover the essence of Kyrgyzstan through our captivating
            souvenirs. Each item tells a unique tale, weaving together the rich
            heritage, vibrant traditions, and breathtaking landscapes of this
            enchanting country. From intricately handcrafted textiles to
            traditional jewelry and soul-stirring musical instruments, our
            souvenirs encapsulate the spirit of Kyrgyzstan, allowing you to
            carry a piece of its beauty and culture wherever you go.
          </p>
          <button id="souvenirsMainLeftButton">Order Now</button>
        </div>
        <img id="souvenirsImage" src={souvenirsimg} alt="" />
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

      <div className="product__food_card-container">
        <div className="item_filter-btn">
          <button>Jewellery</button>
          <button>Instruments</button>
          <button>other Souvenirs</button>
        </div>
        <div>
          <h1>PRODUCT LIST</h1>
          {products.map((item) =>
            item.category === "Jewellery" ||
            item.category === "Instruments" ||
            item.category === "other Souvenirs" ? (
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

export default Souvenirs;
