import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Messages from "../messages/Messages";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="messages" element={<Messages />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </main>
);

export default Main;
