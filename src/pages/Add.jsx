import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../contexts/TodoContextProvaider";

const Add = () => {
  const { addTask } = useContext(todoContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      alert("Заполните все поля");
      return;
    }
    let obj = {
      name,
      surname,
      phone,
    };
    addTask(obj);
    setName("");
    setSurname("");
    setPhone("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Todo</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <br />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />
      <br />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="phone"
        value={phone}
      />
      <br />
      <Link to="/">
        <button onClick={() => handleClick()}>Add Todo</button>
      </Link>
    </div>
  );
};

export default Add;
