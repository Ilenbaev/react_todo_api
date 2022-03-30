import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo/EditTodo";
import MainLayouts from "./layouts/MainLayouts";
import Add from "./pages/Add";
import List from "./pages/List";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<EditTodo />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
