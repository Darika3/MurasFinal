// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContextProvider';
// import { useProduct } from '../../context/ProductContextProvider';
// import "../Tours/ToursDetails.css"

// function ToursDeatails() {
//   const [showDetail1, setShowDetail1] = useState(false);
//   const [showDetail2, setShowDetail2] = useState(false);
//   const [showDetail3, setShowDetail3] = useState(false);
//   const [inputCom, setInputCom] = useState("");
//   const { getProductDetails, productDetails,  getComments,
//     getCommentState, } = useProduct();
//   const { 
//     user : {email} 
//   } = useAuth();



//   const toggleDetail1 = () => {
//     setShowDetail1(!showDetail1);
//   };
//   const toggleDetail2 = () => {
//     setShowDetail2(!showDetail2);
//   };
//   const toggleDetail3 = () => {
//     setShowDetail3(!showDetail3);
//   };
//   const { id } = useParams();

//   useEffect(() => {
//     getProductDetails(id);
//   }, []);

//   return (
//     <>
    
//       <div  className="tours-detail_container">
//       <div style={{marginTop: "50px"}} className="tours-detail_container-m" >
//         <div className="tDet-left">
//           <img style={{ width: "100%", height: "100%" }} src={productDetails.image} alt="picture" />
//         </div>
//         <div className="tDet-right">
//           <div className='textDetails'>
//             Details: <button className="toggle-button" onClick={toggleDetail1}>{showDetail1 ? "-" : "+"}</button>
//           </div>
//           {showDetail1 && (
//             <div className='textDetails-content'>
//               {productDetails.description}
//             </div>
//           )}

//           <div className='textDetails'>
//             Did you know about it? <button className="toggle-button" onClick={toggleDetail2}>{showDetail2 ? "-" : "+"}</button>
//           </div>
//           {showDetail2 && (
//             <div style={{fontSize: "30px", margin:"0"}} className='textDetails-content'>
//               {productDetails.time} <br/>{productDetails.distance}
//             </div>
//           )}

//           <div className='textDetails'>Which type of tour is more popular!?
//              <button className="toggle-button" onClick={toggleDetail3}>{showDetail3 ? "-" : "+"}</button>
//           </div>
//           {showDetail3 && (
//             <div className='textDetails-content'>
//                 {productDetails.description}
//               {productDetails.type}
//             </div>
//           )}
//         </div>
//       </div>
//       <h4>Оставьте свой комментарии!</h4>
//       {email ? (<>
//       <form  className='comment-form'>
//     <textarea type="text" placeholder='comment' onChange={(e) => {
//                 setInputCom(e.target.value);
//               }}/>
//     <button onClick={(e) => {
//               // e.preventDefault();
//               const newObj = {
//                 ...getCommentState,
//                 comment: inputCom,
//                 user: email,
//               };

//               getComments(newObj)}} className='add-comment-btn'>Add comment</button>
//               </form>
//     </>):<><div onClick={()=>('/auth')}>Register!</div></>}
    
              
                
// {productDetails.comments
//   ? (productDetails.comments.map((a) => {
//     console.log(a);
//       return (
//         <div className='comment-block'>
//           <p className='comment-user'>{a.user[0]}</p>
//           <p className='comment'>{a.comment}</p>
//         </div>
//       );
//     }))
//   : null}
//       </div>
//     </>
//   );
// }

// export default ToursDeatails;
