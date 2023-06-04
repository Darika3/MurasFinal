import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForum } from "../../context/ForumContextProvider";

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
    addTopic(topic);
    window.location.reload(); // Перезагрузка страницы
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="forumContainer"
    >
      <h1>FORUM</h1>
      {topics.map((item) => (
        <div
          style={{
            width: "80%",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            key={item.id}
            variant="rounded"
            sx={{ marginBottom: "20px" }}
            width={"80%"}
            height={60}
            onClick={() => navigate(`topic/${item.id}`)}
          >
            {item.title}
          </Grid>

          <button onClick={() => deleteTopic(item.id)}>delete</button>
        </div>
      ))}
      <div>
        <input
          onChange={handleInp}
          type="text"
          placeholder="New Topic"
          name="title"
        />
        <button onClick={handleAddTopic}>ADD TOPIC</button>
      </div>
    </div>
  );
};

export default Forum;
