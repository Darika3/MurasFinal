import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContextProvider';
import "../Tours/ToursDetails.css"

function ToursDeatails() {
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  const { getProductDetails, productDetails } = useProduct();

  const toggleDetail1 = () => {
    setShowDetail1(!showDetail1);
  };
  const toggleDetail2 = () => {
    setShowDetail2(!showDetail2);
  };
  const toggleDetail3 = () => {
    setShowDetail3(!showDetail3);
  };
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      <div sty className="tours-detail_container">
        <div className="tDet-left">
          <img style={{ width: "100%", height: "100%" }} src={productDetails.image} alt="picture" />
        </div>
        <div className="tDet-right">
          <div className='textDetails'>
            Details: <button className="toggle-button" onClick={toggleDetail1}>{showDetail1 ? "-" : "+"}</button>
          </div>
          {showDetail1 && (
            <div className='textDetails-content'>
              {productDetails.description}
            </div>
          )}

          <div className='textDetails'>
            Did you know about it? <button className="toggle-button" onClick={toggleDetail2}>{showDetail2 ? "-" : "+"}</button>
          </div>
          {showDetail2 && (
            <div style={{fontSize: "30px", margin:"0"}} className='textDetails-content'>
              {productDetails.time} <br/>{productDetails.distance}
            </div>
          )}

          <div className='textDetails'>Which type of tour is more popular!?
             <button className="toggle-button" onClick={toggleDetail3}>{showDetail3 ? "-" : "+"}</button>
          </div>
          {showDetail3 && (
            <div className='textDetails-content'>
                {productDetails.description}
              {productDetails.type}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ToursDeatails;
