import React from "react";
import "../Products/ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const ProductCard = ({ item }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-front">
            <div className="mainImg-card">
              <img
                style={{ width: "100%", height: "160px", borderRadius: "10px" }}
                src={item.image}
                alt=""
              />
            </div>
            <div className="text-card">
              <p className="title_text-card">{item.name}</p>
              <p className="price_text-card">{item.price}</p>
            </div>
          </div>
          <div className="card-back">
            <img className="cardIcon" src={item.image} alt="CardImg" />
            <p>Description:{item.description}</p>

            <p>Category:{item.category}</p>
            <div className="card-btn">
              <button className="addCard-btn">
                <AddShoppingCartIcon />
                Add to Cart
              </button>
              <br />
              <button className="updCard-btn">Edit</button>
              <button className="updCard-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
