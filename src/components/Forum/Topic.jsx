import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../Tours/ToursDetails.css";
import { useAuth } from "../../context/AuthContextProvider";
import Navbar from "../Navbar/Navbar";
import emptyHeart from "../../assets/image/Vector.png";
import fullHeart from "../../assets/image/Vector-1.png";
import { useForum } from "../../context/ForumContextProvider";

function Topic() {
  const { getTopicDetails, topicDetails } = useForum();
  const { email } = useAuth();
  const { id } = useParams();

  const [discussionText, setdiscussionText] = useState("");
  const [discussion, setdiscussion] = useState([]);

  const handlediscussionChange = (event) => {
    setdiscussionText(event.target.value);
  };

  const handleAdddiscussion = () => {
    const newdiscussion = {
      id: discussion.length + 1,
      user: email,
      text: discussionText,
    };
    setdiscussion([...discussion, newdiscussion]);
    setdiscussionText("");

    localStorage.setItem(
      "discussion",
      JSON.stringify([...discussion, newdiscussion])
    );
  };

  useEffect(() => {
    getTopicDetails(id);

    const storeddiscussion = localStorage.getItem("discussion");
    if (storeddiscussion) {
      setdiscussion(JSON.parse(storeddiscussion));
    }
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{ marginTop: "400px", marginLeft: "100px" }}
        className="discussion-container"
      >
        <h1>{topicDetails.title}</h1>
        <form action="" className="discussion-form">
          <textarea
            type="text"
            placeholder="discussion"
            value={discussionText}
            onChange={(e) => handlediscussionChange(e)}
          />
          <button onClick={handleAdddiscussion} className="add-discussion-btn">
            Add discussion
          </button>
        </form>
        <div className="discussion-container">
          {discussion &&
            discussion.map((discussion) => (
              <div key={discussion.id} className="discussion-block">
                <p className="discussion-user">{discussion.user}</p>
                <p className="discussion">{discussion.text}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Topic;
