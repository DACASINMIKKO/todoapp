import React, { useState, useEffect } from "react";
import styles from "./Todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../features/userSlice";
import { useNavigate } from "react-router";

const Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo({ id: user.id, todo: newTodo }));
      setNewTodo("");
    }
    console.log(user);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: user.id, todoId: id }));
  };

  useEffect(() => {
    if (user.fullname === "") {
      navigate("login");
    }
  }, []);

  return (
    <div className={styles.todoPage}>
      <h1 className={styles.title}>{user.fullname} Todo List</h1>

      <div className={styles.todoInputContainer}>
        <input
          type="text"
          className={styles.todoInput}
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className={styles.addButton} onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul className={styles.todoList}>
        {user.todo.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            <span className={styles.todoText}>{todo.todo}</span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
