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
  const { getProducts, products, pages, getFilterSouvenirs } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const {filterByTtype} = useProduct()

const souvenirs = getFilterSouvenirs();

useEffect(() => {
    getProducts();
  }, []);

   //  !pagination 
const [page, setPage] = useState(1)
const itemsPerPage = 3;
const count = Math.ceil(souvenirs?.length/itemsPerPage);
useEffect(() => {
  getProducts();
  setPage(1);
}, [searchParams]);

useEffect(()=>{
    getProducts()
    getFilterSouvenirs()
  },[])

  const handChange = (e, p)=>{      //event, page(значение кнопки)
    setPage(p);
  }
  function currentSouvenirsData(){
    const begin = (page-1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return souvenirs.slice(begin, end)       //вазвращает массив сосотоящий из фиксированного кол-во элемента
   }
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
          <a href="#jewerly"><button id="souvenirsMainLeftButton">Order Now</button>
</a>        </div>
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

      <div id="jewerly" className="product__food_card-container">
        <div className="item_filter-btn">
          <button onClick={(e)=>filterByTtype("type", "Jewellery")} value={"Jewellery"}>Jewellery</button>
          <button onClick={(e)=>filterByTtype("type", "Instruments")} value={"Instruments"}>Instruments</button>
          <button onClick={(e)=>filterByTtype("type", "other Souvenirs")} value={"Meal"}>other Souvenirs</button>
        </div>
        <div style= {{display: "flex", flexDirection: "column",}}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        { currentSouvenirsData().map((item) =>
          item.category === "souvenirs" ? (
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
    </>
  );
};

export default Souvenirs;
