import { createSlice } from "@reduxjs/toolkit";
import Users from "../mockData/Users";

const initialState = { Users: Users, id: 0, fullname: "", todo: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      const newUser = action.payload;
      //state.Users = [...Users, newUser];
      state.Users.push(newUser);
    },
    logUser: (state, action) => {
      const user = action.payload;
      let userLogged = null;
      for (let i = 0; i < state.Users.length; i++) {
        if (
          user.username === state.Users[i].username &&
          user.password === state.Users[i].password
        ) {
          userLogged = state.Users[i];
          state.id = userLogged.id;
          state.fullname = userLogged.fullName;
          state.todo = userLogged.todo;
        }
      }
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todo.push({
        id: Math.floor(Math.random() * 1000000),
        todo: newTodo.todo,
      });
      const user = state.Users.find((u) => u.id === newTodo.id);

      if (user) {
        user.todo.push(newTodo.todo);
      }
    },
    deleteTodo: (state, action) => {
      const usertodo = action.payload;
      const updatedTodos = state.todo.filter(
        (item) => item.id !== usertodo.todoId
      );
      state.todo = updatedTodos;

      const user = state.Users.find((u) => u.id === usertodo.id);
      if (user) {
        user.todo.filter((u) => u.id !== usertodo.todoId);
      }
    },
  },
});

export const { signUpUser, logUser, addTodo, deleteTodo } = userSlice.actions;
export default userSlice.reducer;
