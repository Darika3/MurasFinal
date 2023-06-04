import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API2, TOPICS } from "../helpers/const";
import axios from "axios";

export const forumContext = createContext();
export const useForum = () => useContext(forumContext);
const INIT_STATE = {
  topics: [],
  topicDetails: {},
};
// функция reducer
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOPICS.GET_TOPICS:
      return { ...state, topics: action.payload };
    case TOPICS.GET_TOPIC_DETAILS:
      return { ...state, topicDetails: action.payload };
    default:
      return state;
  }
};

const ForumContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // стягиваем данные
  const getTopics = async () => {
    const { data } = await axios(`${API2}`);
    dispatch({ type: TOPICS.GET_TOPICS, payload: data });
  };

  // добавление нового продукта
  const addTopic = async (newTopic) => {
    await axios.post(`${API2}`, newTopic);
    navigate("/forum");
  };

  // удаление
  const deleteTopic = async (id) => {
    await axios.delete(`${API2}/${id}`);
    getTopics();
  };
  // сохранение изм продукта
  const saveEditedTopics = async (newTopic) => {
    await axios.patch(`${API2}/${newTopic.id}`, newTopic);
    getTopics();
    navigate("/forum");
  };
  const getTopicDetails = async (id) => {
    const { data } = await axios(`${API2}/${id}`);
    dispatch({
      type: TOPICS.GET_TOPIC_DETAILS,
      payload: data,
    });
  };

  const values = {
    getTopics,
    addTopic,
    topics: state.topics,
    deleteTopic,
    saveEditedTopics,
    getTopicDetails,
    topicDetails: state.topicDetails,
  };
  return (
    <forumContext.Provider value={values}>{children}</forumContext.Provider>
  );
};

export default ForumContextProvider;
