import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "../Auth/auth.css";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { handleRegister, error, setError } = useAuth();

  const navigate = useNavigate();

  function handleSave() {
    if (
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);

      handleRegister(formData, email);
    }
  }

  return (
    <div className="authBox">
      <div className="cont">
        <h2>Register</h2>
        {error ? <h3 style={{ color: "white" }}>{error}</h3> : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="phone"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />

        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="password confirm"
        />
        <button onClick={() => handleSave()}>Register</button>
        <p onClick={() => navigate("/login")}>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Registration;
