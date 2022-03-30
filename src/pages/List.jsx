import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../contexts/TodoContextProvaider";

const List = () => {
  const { todos, getTodos, deleteTodo, editTodo } = useContext(todoContext);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>List page</h1>
      <div style={{ display: "flex" }}>
        {todos.map((item) => (
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              width: "200px",
              height: "100px",
              border: "1px solid black",
              margin: "20px",
            }}
            key={item.id}
          >
            <li>{item.name}</li>
            <li>{item.surname}</li>
            <li>{item.phone}</li>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>

            <Link to="/edit">
              <button onClick={() => editTodo(item.id)}>Edit</button>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default List;
