import axios from "axios";
import React, { createContext, useReducer } from "react";

const API = "http://localhost:8001/todos";

export const todoContext = createContext();

const INIT_STATE = {
  todos: [],
  todoEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    case "EDIT_TODO":
      return { ...state, todoEdit: action.payload };
    default:
      return state;
  }
}

const TodoContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getTodos() {
    try {
      let { data } = await axios(API);

      dispatch({
        type: "GET_TODOS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const addTask = async (obj) => {
    axios.post(API, obj);
    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8001/todos/${id}`);
    getTodos();
  };

  const editTodo = async (id) => {
    let { data } = await axios(`http://localhost:8001/todos/${id}`);
    dispatch({
      type: "EDIT_TODO",
      payload: data,
    });
  };

  const saveTask = async (newTask) => {
    axios.patch(`${API}/${newTask.id}`, newTask);
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        todoEdit: state.todoEdit,
        addTask,
        getTodos,
        deleteTodo,
        editTodo,
        saveTask,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvaider;
