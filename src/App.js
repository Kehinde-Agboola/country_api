import React from "react";
import Home from "./component/Home/Home";
import Detail from "./component/Detail/Detail";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/:name" children={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
