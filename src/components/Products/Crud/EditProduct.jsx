

import { useEffect, useState } from "react";
import "./AddProduct.css";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../context/ProductContextProvider";

const EditProduct = () => {
    const [category, setCategory] = useState("");
  const {saveEditedProduct, getProductDetails, productDetails} = useProduct();
  const [product, setProduct] = useState(productDetails)
const {id} = useParams();

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: category,
    }));
  }, [category]);

  useEffect(() => {
    getProductDetails(id);
  }, []);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  return (
    <>
      <Navbar />
      <div className="addFood-container">
        <div id="inpCont">
          <h1 style={{ marginBottom: "20px" }}>Edit Product</h1>
          <select
            style={{ color: "#A3B5BF", textShadow: "1px 1px black" }}
            name="category"
            onChange={handleCategoryChange}
            defaultValue="All"
            // value={product.category || ""}
          >
            <option value="All">Choose category</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="souvenirs">Souvenirs</option>
            <option value="tours">Tours</option>
          </select>

          {category === "tours" && (
            <>
              <input
                onChange={handleInp}
                type="text"
                placeholder="Title"
                name="name"
                value={product.name || ""}
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
                value={product.description || ""}
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
                value={product.price || ""}
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Distance"
                name="distance"
                value={product.distance || ""}
              />
            </>
          )}
          {category === "food" && (
            <>
              <input
                onChange={handleInp}
                type="text"
                placeholder="Title"
                name="name"
                value={product.name || ""}
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
                value={product.description || ""}
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
                value={product.price|| ""}

              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Preparation Time"
                name="preparationTime"
                value={product.preparationTime|| ""}
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={product.ingredients || ""}
              />
            </>
          )}
          {category === "clothes" && (
            <>
              <input
                onChange={handleInp}
                type="text"
                placeholder="Title"
                name="name"
                value={product.name || ""}

              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
                value={product.description || ""}
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
                value={product.price || ""}
              />
            </>
          )}
          {category === "souvenirs" && (
            <>
              <input
                onChange={handleInp}
                type="text"
                placeholder="Title"
                name="name"
                value={product.name || ""}
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
                value={product.description || ""}
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
                value={product.name || ""}
              />
            </>
          )}
<select
          style={{ color: "#A3B5BF" }}
          onChange={handleInp}
          name='type'
          id="none"
          value={product.type || ""}
        >
          {category === "All" && (
            <>
         
              {/* <option>Choose type</option> */}
              {/* <option>Headdress</option>
              <option>Shoes</option>
              <option>Meal</option>
              <option>Drinks</option>
              <option>Snacks</option>
              <option>Jewellery</option>
              <option>Instruments</option>
              <option>other Souvenirs</option>
              <option>Trekking Tours</option>
              <option>Multidays Tours</option>
              <option>Horse Tours</option> */}
            </>
          )}
          {category === "clothes" && (
            <>
           <option>Choose type</option>

              <option>Outerwear</option>
              <option>Headdress</option>
              <option>Shoes</option>
            </>
          )}
          {category === "food" && (
            <>
           <option>Choose type</option>

              <option>Meal</option>
              <option>Drinks</option>
              <option>Snacks</option>
            </>
          )}
          {category === "souvenirs" && (
            <>
           <option>Choose type</option>

              <option>Jewellery</option>
              <option>Instruments</option>
              <option>other Souvenirs</option>
            </>
          )}
          {category === "tours" && (
            <>
           <option>Choose type</option>

              <option>Trekking Tours</option>
              <option>Multidays Tours</option>
              <option>Horse Tours</option>
            </>
          )}
        </select>
          <input
            id="fileInp"
            onChange={handleInp}
            type="url"
            placeholder="Picture"
            name="image"
            value={product.image || ""}
          />
          <button onClick={() => saveEditedProduct(product)}>Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
