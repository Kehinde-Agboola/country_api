import React from "react";
import Home from "./component/Home/Home";
import Detail from "./component/Detail/Detail";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
