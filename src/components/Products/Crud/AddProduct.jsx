import React, { useEffect } from "react";
import { useState } from "react";
import { useProduct } from "../../../context/ProductContextProvider";
import "./AddProduct.css";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const { createProduct } = useProduct();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  // console.log(category);
  // console.log(title);

  function handleSave() {
    const newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("type", type);
    newProduct.append("image", image);
    newProduct.append("quantity", quantity);

    createProduct(newProduct);
    // if (category === "Meal" || category === "Snacks" || category === "Drinks") {
    //   navigate("/food");
    // }
  }

  return (
    <>
      <Navbar />
      <div className="addFood-container">
        <div id="inpCont">
          <h1 style={{ marginBottom: "20px" }}>Add Product</h1>
          <select
            style={{ color: "#A3B5BF", textShadow: "1px 1px black" }}
            defaultValue={""}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Outerwear</option>
            <option>Headdress</option>
            <option>Shoes</option>
            <option>Meal</option>
            <option>Drinks</option>
            <option>Snacks</option>
            <option>Jewellery</option>
            <option>Instruments</option>
            <option>other Souvenirs</option>
            <option>Trekking Tours</option>
            <option>Multidays Tours</option>
            <option>Horse Tours</option>
          </select>

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
          />

          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            id="fileInp"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/*"
          />
          <button onClick={handleSave}>Add Product</button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
