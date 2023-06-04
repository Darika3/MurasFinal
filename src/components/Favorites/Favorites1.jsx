import React from 'react'
import { useEffect } from 'react'
import { useFavorite } from '../../context/FavoriteContextProvider'
import "../Products/ProductCard.css";
import CardImg from "../../assets/image/CardIcon.png"
import { useNavigate } from "react-router-dom";
import "../Products/ProductCard.css"
import Navbar from '../Navbar/Navbar';


const Favorites1 = ({item, category}) => {
    const navigate = useNavigate();
    const {getFav,favorite, 
        deleteFavProduct,
        checkProductInFav,
        addProductToFav} = useFavorite()

        useEffect(()=>{
            getFav();
        },[])
  return (
    <>
    <div className="mainFavCont">
    <Navbar/>
         <div  className="favs">
         <h1>FAVORITES: </h1>
          <div id='cardCont' className="card-container">
            {favorite?.products.map((elem)=>(
              <div style={{width:"40%"}} className="card">
                <div id='frontCard' className="card-front">
                <img className='cardIcon' src={CardImg} alt="CardImg" />
                  <div className="mainImg-card">
                    <img
                      src={elem.item.image}
                      alt="image"
                    />
                  </div>
                  <div className="text-card">
                    <p className="title_text-card">{elem.item.name}</p>
                    <p className="price_text-card"> ${elem.item.price}</p>
                  </div>
                </div>
                <div id='backCard' className="card-back">
        <p>Description: <br/>{elem.item.description}</p>
        {category === "food"  && (<>
          <p>Ingredients:  {elem.item.ingredients}</p>
          <p>PreparationTime: {elem.item.preparationTime} </p>
      
          </>
        )}
        <p>Type: {elem.item.type}</p>
        <p>Category: {elem.item.category}</p>
          <img onClick={()=> addProductToFav(elem.item)}
           style={{width: "40px" , height:"40px"}} 
           src={ checkProductInFav(elem.item.id) ? "https://w7.pngwing.com/pngs/430/166/png-transparent-bookmark-computer-icons-bookmark-angle-rectangle-black.png"  : "https://www.pngmart.com/files/8/Bookmark-PNG-Clipart.png "}  alt="Fav"/>
        <div className="card-btn">
                    {/* <button onClick={()=>addProductToCart(elem.item)} className="addCard-btn" >
                      <AddShoppingCartIcon color= {checkProductInCart(elem.item.id)? "success" : ""} />
                      Add to Cart
                    </button> */}
                    <br />
                    {/* {email === ADMIN ? (<>
                      <button className="updCard-btn">Edit</button>
                    <button className="updCard-btn">Delete</button>
                    </>): null} */}
                  </div>
                </div>
                </div>
            ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Favorites1