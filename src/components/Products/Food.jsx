import React, { useEffect, useState } from "react";
import "../Products/ProductFood.css";
import "../Products/Products.css";
import foodMainPic from "../Products/assetsProducts/product-food.png";

import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";

import { useSearchParams } from "react-router-dom";
import { Box, Grid, Pagination } from "@mui/material";

import ProductCard from "../Products/ProductCard";
import { useProduct } from "../../context/ProductContextProvider";
import Navbar from "../Navbar/Navbar";

const ProductFood = () => {



  const { getProducts, products, pages} = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const {filterByType} = useProduct()

 useEffect(() => {
    getProducts();
  }, []);

//  !pagination 
const [page, setPage] = useState(1)
const itemsPerPage = 6;
const count = Math.ceil(products?.length/itemsPerPage);

useEffect(() => {
  getProducts();
  setPage(1);
}, [searchParams]);
// меняем тек стр
 const handleChange = (e, p)=>{      //event, page(значение кнопки)
  setPage(p);
}
 function currentData(){
  const begin = (page-1)*  itemsPerPage;
  const end = begin+ itemsPerPage;
  return products.slice(begin, end)       //вазвращает массив сосотоящий из фиксированного кол-во элемента
 }
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
            <a href="#food"><button>Order Now</button></a>
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
      <div id="food" className="product__food_card-container">
        <div  className="item_filter-btn">
          <button onClick={(e)=>filterByType("type", "Meal")} value={"Meal"}>Meal</button>
          <button onClick={(e)=>filterByType("type", "Drinks")} value={"Drinks"}>Drinks</button>
          <button onClick={(e)=>filterByType("type", "Snacks")} value={"Snacks"}>Snacks</button>
        </div>
        <div style= {{display: "flex", flexWrap:"wrap"}}>
        {/* <div 
        style= {{display: "flex"}}> */}
          {currentData().map((item) =>
         item.category === "food"? (
              <ProductCard key={item.id} item={item} />
            ) : null
          )}
        </div>
        <div style={{margin: "0 auto", marginBottom:"20px"}}>
            <Pagination
         
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
        />
        </div>
        {/* </div> */}
      </div>
    </>
    
  );
};

export default ProductFood;
