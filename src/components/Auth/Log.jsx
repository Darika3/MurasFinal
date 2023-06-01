import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "../Auth/auth.css";
import { useNavigate } from "react-router";

const Log = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error } = useAuth();
  const navigate = useNavigate();
  function handleSave() {
    if (!username.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();

      formData.append("username", username);
      formData.append("password", password);
      handleLogin(formData, username);
    }
  }
  return (
    <div className="authBox">
      <div className="cont">
        <h2>Login</h2>
        {error ? <h3 style={{ color: "white" }}>{error}</h3> : null}
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            handleSave();
            navigate("/");
          }}
        >
          log in
        </button>
        <p onClick={() => navigate("/register")}>
          Don't have an account? Register Now
        </p>
      </div>
    </div>
  );
};

export default Log;
