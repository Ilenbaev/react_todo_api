import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContextProvaider";
import "./EditTodo.css";

const EditTodo = () => {
  const { todoEdit, saveTask } = useContext(todoContext);
  const [editItem, setEditItem] = useState(todoEdit);

  useEffect(() => {
    setEditItem(todoEdit);
  }, [todoEdit]);

  const handleEditInput = (e) => {
    let newTask = {
      ...editItem,
      [e.target.name]: e.target.value,
    };
    setEditItem(newTask);
  };

  return (
    <div className="box">
      <div className="modal">
        {editItem ? (
          <>
            <h2 style={{ margin: "0" }}>Edit Todo</h2>
            <input
              onChange={(e) => handleEditInput(e)}
              type="text"
              value={editItem.name}
              name="name"
            />
            <br />
            <input
              onChange={(e) => handleEditInput(e)}
              type="text"
              value={editItem.surname}
              name="surname"
            />
            <br />
            <input
              onChange={(e) => handleEditInput(e)}
              type="text"
              value={editItem.phone}
              name="phone"
            />
            <br />
            <Link to="/">
              <button onClick={() => saveTask(editItem)}>Save</button>
            </Link>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default EditTodo;
