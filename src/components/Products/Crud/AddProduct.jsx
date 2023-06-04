import { useEffect, useState } from "react";
import "./AddProduct.css";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/ProductContextProvider";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    type: "",
    category: category,
    distance: "",
    ingredients: "",
    preparationTime: "",
    raiting: 0,
    altitude: "",
    season: "",
    route: "",
    time: "",
  });

  const navigate = useNavigate();
  const { addProduct } = useProduct();

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

  return (
    <>
      <Navbar />
      <div className="addFood-container">
        <div id="inpCont">
          <h1 style={{ marginBottom: "20px" }}>Add Product</h1>
          <select
            style={{ color: "#A3B5BF", textShadow: "1px 1px black" }}
            name="category"
            onChange={handleCategoryChange}
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
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Total time"
                name="time"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Season"
                name="season"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Altitude"
                name="altitude"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Distance"
                name="distance"
              />

              <input
                onChange={handleInp}
                type="text"
                placeholder="Route"
                name="route"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Raiting"
                name="raiting"
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
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Preparation Time"
                name="preparationTime"
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Ingredients"
                name="ingredients"
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
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
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
              />
              <input
                onChange={handleInp}
                type="text"
                placeholder="Description"
                name="description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={handleInp}
                name="price"
              />
            </>
          )}
          <select
            style={{ color: "#A3B5BF" }}
            onChange={handleInp}
            name="type"
            id="none"
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
                <option value="trekking">Trekking Tours</option>
                <option value="multidays">Multidays Tours</option>
                <option value="horse">Horse Tours</option>
              </>
            )}
          </select>
          <input
            id="fileInp"
            onChange={handleInp}
            type="url"
            placeholder="Picture"
            name="image"
          />
          <button onClick={() => addProduct(product)}>Add Product</button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
