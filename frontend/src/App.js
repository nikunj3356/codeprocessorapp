import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submission from "./Pages/Submission.js";
import Display from "./Pages/Display.js";
import NoPage from "./Pages/NoPage.js";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Submission />} />
          <Route path="/submit" element={<Submission />} />
          <Route path="/submissions" element={<Display />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
