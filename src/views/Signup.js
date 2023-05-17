import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../features/userSlice";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const Users = useSelector((state) => state.user.Users);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
    dispatch(
      signUpUser({
        id: Users.length + 1,
        username: username,
        password: password,
        fullName: fullName,
        todo: [],
      })
    );
    navigate("/login");
    console.log(Users);
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSignup} className={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
