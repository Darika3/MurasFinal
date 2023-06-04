import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";
import "../Tours/ToursDetails.css";
import { useAuth } from "../../context/AuthContextProvider";
import Navbar from "../Navbar/Navbar";
import emptyHeart from "../../assets/image/Vector.png";
import fullHeart from "../../assets/image/Vector-1.png";

function ToursDetails() {
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  const { getProductDetails, productDetails } = useProduct();
  const { email } = useAuth();
  const { id } = useParams();

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDetail1 = () => {
    setShowDetail1(!showDetail1);
  };

  const toggleDetail2 = () => {
    setShowDetail2(!showDetail2);
  };

  const toggleDetail3 = () => {
    setShowDetail3(!showDetail3);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    const newComment = {
      id: comments.length + 1,
      user: email,
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText("");

    // Save comments to local storage
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  };

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);

      // Save likes count and liked status to local storage
      localStorage.setItem("likes", likes + 1);
      localStorage.setItem("isLiked", "true");
    }
  };

  useEffect(() => {
    getProductDetails(id);

    // Load comments from local storage
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }

    // Load likes count and liked status from local storage
    const storedLikes = localStorage.getItem("likes");
    const storedIsLiked = localStorage.getItem("isLiked");
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
    if (storedIsLiked === "true") {
      setIsLiked(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="tours-detail_container">
        <div className="tDet-left">
          <img
            style={{ width: "100%", height: "100%" }}
            src={productDetails.image}
            alt="picture"
          />
        </div>
        <div className="tDet-right">
          <div className="textDetails">
            Details:
            <button className="toggle-button" onClick={toggleDetail1}>
              {showDetail1 ? "-" : "+"}
            </button>
          </div>
          {showDetail1 && (
            <div className="textDetails-content">
              {productDetails.description}
            </div>
          )}

          <div className="textDetails">
            Did you know about it?
            <button className="toggle-button" onClick={toggleDetail2}>
              {showDetail2 ? "-" : "+"}
            </button>
          </div>
          {showDetail2 && (
            <div
              style={{ fontSize: "30px", margin: "0" }}
              className="textDetails-content"
            >
              {productDetails.time} <br />
              {productDetails.distance}
            </div>
          )}

          <div className="textDetails">
            Which type of tour is more popular!?
            <button className="toggle-button" onClick={toggleDetail3}>
              {showDetail3 ? "-" : "+"}
            </button>
          </div>
          {showDetail3 && (
            <div className="textDetails-content">
              {productDetails.description}
              {productDetails.type}
            </div>
          )}
        </div>
        <form action="" className="comment-form">
          <textarea
            type="text"
            placeholder="comment"
            value={commentText}
            onChange={handleCommentChange}
          />
          <button onClick={handleAddComment} className="add-comment-btn">
            Add comment
          </button>
        </form>
        <div className="comments-container">
          {comments &&
            comments.map((comment) => (
              <div key={comment.id} className="comment-block">
                <p className="comment-user">{comment.user}</p>
                <p className="comment">{comment.text}</p>
              </div>
            ))}
        </div>
        <div id="likes">
          <img
            src={isLiked ? fullHeart : emptyHeart}
            alt=""
            onClick={handleLikeClick}
          />
          <h3 id="likesCount">{likes}</h3>
        </div>
      </div>
    </>
  );
}

export default ToursDetails;
