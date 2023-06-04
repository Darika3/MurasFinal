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

  const [discussionText, setDiscussionText] = useState("");
  const [discussion, setDiscussion] = useState([]);

  const handleDiscussionChange = (event) => {
    setDiscussionText(event.target.value);
  };

  const handleAddDiscussion = () => {
    const newDiscussion = {
      id: discussion.length + 1,
      user: email,
      text: discussionText,
      topic: topicDetails.title, // Добавляем название топика к элементу обсуждения
    };
    setDiscussion([...discussion, newDiscussion]);
    setDiscussionText("");

    localStorage.setItem(
      "discussion",
      JSON.stringify([...discussion, newDiscussion])
    );
  };

  useEffect(() => {
    getTopicDetails(id);

    const storedDiscussion = localStorage.getItem("discussion");
    if (storedDiscussion) {
      setDiscussion(JSON.parse(storedDiscussion));
    }
  }, [id, getTopicDetails]);

  return (
    <>
      <Navbar />
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
            onChange={(e) => handleDiscussionChange(e)}
          />
          <button onClick={handleAddDiscussion} className="add-discussion-btn">
            Add discussion
          </button>
        </form>
        <div className="discussion-container">
          {discussion &&
            discussion.map((comment) => {
              if (comment.topic === topicDetails.title) {
                // Исправлено: проверяем поле "topic" у каждого комментария
                return (
                  <div key={comment.id} className="comment-block">
                    <p className="comment-user">{comment.user}</p>
                    <p className="comment">{comment.text}</p>
                  </div>
                );
              } else {
                return null; // Исправлено: добавлено возвращение null, если комментарий не относится к текущей теме
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Topic;
