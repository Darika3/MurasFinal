import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContextProvider';
import "../Tours/ToursDetails.css"
function ToursDeatails() {
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  const {getProductDetails, productDetails} = useProduct()

  const toggleDetail1 = () => {
    setShowDetail1(!showDetail1);
  };
  const toggleDetail2 = () => {
    setShowDetail2(!showDetail2);
  };
  const toggleDetail3 = () => {
   
    setShowDetail3(!showDetail3);
  };
  const {id}= useParams();


  useEffect(()=>{
    getProductDetails(id)
  },[id])

  return (
    <>
    <div className="tors-detail_container">
        <div className="tDet-left">
            <img src={productDetails.image} alt="picture" />
        </div>
        <div className="tDet-right">
            <div className='textDetails'>Did you know about it? <button className="toggle-button" onClick={toggleDetail1}>{showDetail1 ? "-" : "+"}</button>
            {showDetail1 && (<div>{productDetails.description}</div>)}
            </div>
        <div className='textDetails'>
            Did you know about it? <button className="toggle-button" onClick={toggleDetail2}>{showDetail2 ? "-" : "+"}</button>
            {showDetail2 && (<div>{productDetails.description}</div>)}
            </div>

        <div className='textDetails'>
            Did you know about it? <button className="toggle-button" onClick={toggleDetail3}>{showDetail3 ? "-" : "+"}</button>
            {showDetail3 && (<div>{productDetails.description}</div>)}
            </div>
            </div>
            </div>
            </>
  );
}
export default ToursDeatails;
