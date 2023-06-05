import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForum } from "../../context/ForumContextProvider";
import Navbar from "../Navbar/Navbar";
import "../Forum/Forum.css";
const Forum = () => {
  const { getTopics, topics, addTopic, deleteTopic } = useForum();
  const [topic, setTopic] = useState({
    title: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getTopics();
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...topic,
      [e.target.name]: e.target.value,
    };
    setTopic(obj);
  };

  const handleAddTopic = () => {
    if (topic.title.trim() !== "") {
      addTopic(topic);
      window.location.reload(); // Перезагрузка страницы
    } else {
      alert("fill it");
    }
  };

  return (
    <div>
      <div style={{width:"100%", height:"100vh"}} className="forumContainer">
        <h1>FORUM</h1>
        {topics.map((item) => (
          <div className="forumTopic">
            <Grid
              key={item.id}
              variant="rounded"
              // sx={{ marginBottom: "20px" }}
              width={"80%"}
              height={60}
              onClick={() => navigate(`/topic/${item.id}`)}
            >
              {item.title}
            </Grid>
            <button onClick={() => deleteTopic(item.id)}>delete</button>
          </div>
        ))}
        <div id="inpForumAdd">
          <input
            onChange={handleInp}
            type="text"
            placeholder="New Topic"
            name="title"
          />
          <button onClick={handleAddTopic}>ADD TOPIC</button>
        </div>
      </div>
    </div>
  );
};

export default Forum;
