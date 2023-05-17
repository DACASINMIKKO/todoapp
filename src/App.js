import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Todo from "./views/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/" Component={Todo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
