import React, { useState } from "react";
import Header from "../Header/Header";
import "./Join.css";
import img1 from "../Login/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { signInWithEmail, loginAPI } from "../../Actions/userActions";
import { useNavigate, Link } from "react-router-dom";

function JoinNow() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  console.log("*****>>", user);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIN = (e) => {
    dispatch(signInWithEmail(email, password));
    reset();
  };

  const handleLogin = (e) => {
    dispatch(loginAPI(email, password));
    reset();
  };

  return (
    <div className="join">
      {user && navigate("/home")}
      <div
        className="header"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div class="logo">
          <Link to="/">
            <img src={img1} alt="" />
          </Link>
        </div>
      </div>

      <h1 style={{ marginTop: "50px" }}>
        Make the most out of your proffetional life
      </h1>

      <div className="loginCard">
        <div className="login-email">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-email">
          <label htmlFor="">Password(more that 6 char)</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-buttons">
          <button className="signUp" onClick={handleSignIN}>
            Sign Up
          </button>

          <button className="button login" onClick={handleLogin}>
            Login In
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinNow;
