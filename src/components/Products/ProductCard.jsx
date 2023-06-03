import React from "react";
import "../Products/ProductCard.css";
import CardImg from "../../assets/image/CardIcon.png"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import { useFavorite } from "../../context/FavoriteContextProvider";
import { useEffect } from "react";
import { IconButton } from "@mui/material";



const ProductCard = ({ item, category }) => {
  const {deleteProduct}= useProduct();
  const navigate = useNavigate();

  const {addProductToCart,
    checkProductInCart} = useCart();
    const {user:{email}} = useAuth()
    const { getFav,
      addProductToFav,
      checkProductInFav,
    }=useFavorite()

useEffect(()=>{getFav()},[]);
  return (
    <>
      <div className="card-container">
        <div className="card">
        <img className='cardIcon' src={CardImg} alt="CardImg" />
          <div className="card-front">
            <div className="mainImg-card">
              <img
                src={item.image}
                alt="image"
              />
            </div>
            <div className="text-card">
              <p className="title_text-card">{item.name}</p>
              <p className="price_text-card"> ${item.price}</p>
            </div>
          </div>
          <div className="card-back">
  <p>Description: <br/>{item.description}</p>
  {category === "food"  && (<>
    <p>Ingredients:  {item.ingredients}</p>
    <p>PreparationTime: {item.preparationTime} </p>

    </>
  )}
  <p>Type: {item.type}</p>
  <p>Category: {item.category}</p>
    <img onClick={()=> addProductToFav(item)}
     style={{width: "40px" , height:"40px"}} 
     src={ checkProductInFav(item.id) ? "https://w7.pngwing.com/pngs/430/166/png-transparent-bookmark-computer-icons-bookmark-angle-rectangle-black.png"  : "https://www.pngmart.com/files/8/Bookmark-PNG-Clipart.png "}  alt="Fav"/>

  
 

            <div className="card-btn">
              <button onClick={()=>addProductToCart(item)} className="addCard-btn" >
                <AddShoppingCartIcon color= {checkProductInCart(item.id)? "success" : ""} />
                Add to Cart
              </button>
              <br />
              {email === ADMIN ? (<>
                <button className="updCard-btn" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              <button className="updCard-btn"  onClick={() => deleteProduct(item.id)}>Delete</button>
              </>): null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
