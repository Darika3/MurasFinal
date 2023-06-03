import React, { useEffect, useState } from "react";
import "../Products/ProductFood.css";
import "../Products/Products.css";
import foodMainPic from "../Products/assetsProducts/traditionalClothes.jpg";
import Navbar from "../Navbar/Navbar";
import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";
import { Pagination } from "@mui/material";

import ProductCard from "../Products/ProductCard";
import { useProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
const Clothes = ({}) => {
  const { products, getProducts, getFilterClothes} = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const clothes = getFilterClothes()

  useEffect(() => {
    getProducts();
  }, []);
 

  //  !pagination 
const [page, setPage] = useState(1)
const itemsPerPage = 3;
const count = Math.ceil(clothes?.length/itemsPerPage);
useEffect(() => {
  getProducts();
  setPage(1);
}, [searchParams]);

useEffect(()=>{
  getProducts()
  getFilterClothes()
},[])

// меняем тек стр
const handChange = (e, p)=>{      //event, page(значение кнопки)
  setPage(p);
}
 function currentClothesData(){
  const begin = (page-1) * itemsPerPage;
  const end = begin + itemsPerPage;
  return clothes.slice(begin, end)       //вазвращает массив сосотоящий из фиксированного кол-во элемента
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
          <a href="#clothes">          <button id="clothMainRightButton">Order Now</button>
</a>
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
      <div id="clothes" className="product__food_card-container">
        <div className="item_filter-btn">
          <button>Outerwear</button>
          <button>Headdress</button>
          <button>Shoes</button>
        </div>
        <div style= {{display: "flex", flexDirection: "column",}}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentClothesData().map((item) =>
          item.category === "clothes" ? (
            <ProductCard key={item.id} item={item} />
          ) : null
        )}
      </div>
        <div style={{margin: "0 auto", marginBottom:"20px"}}>
            <Pagination
         
         count={count}
          page={page}
          onChange={handChange}
          variant="outlined"
        />
        </div>
        </div>
    </div>
    </div>
  );
};

export default Clothes;
