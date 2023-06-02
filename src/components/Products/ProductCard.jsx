import React from "react";
import "../Products/ProductCard.css";
import CardImg from "../../assets/image/CardIcon.png"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";



const ProductCard = ({ item }) => {
  const {deleteProduct}= useProduct();
  const navigate = useNavigate();
  return (
    <>
      <div className="card-container">
        <div className="card">
        <img className='cardIcon' src={CardImg} alt="CardImg" />
          <div className="card-front">
            <div className="mainImg-card">
              <img
                style={{ width: "100%", height: "380px",border: "3px solid darkorange", borderRadius: "10px" }}
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
            <img className="cardIcon" src={item.image} alt="CardImg" />
            <p>Description:{item.description}</p>
            <p>Ingredients: {item.ingredients}</p>
            <p>PreparationTime: {item.preparationTime}</p>
            <p>Category:{item.category}</p>
            <div className="card-btn">
              <button className="addCard-btn">
                <AddShoppingCartIcon />
                Add to Cart
              </button>
              <br />
              <button className="updCard-btn" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              <button className="updCard-btn"  onClick={() => deleteProduct(item.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
