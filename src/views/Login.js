import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { logUser } from "../features/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    dispatch(logUser({ username: username, password: password }));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.form}>
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
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className={styles.button}
          style={{ width: 200, height: 50, margin: 20 }}
        >
          Signup
        </button>
        <button
          onClick={handleLogin}
          className={styles.button}
          style={{ width: 200, height: 50, marginBottom: 10 }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
