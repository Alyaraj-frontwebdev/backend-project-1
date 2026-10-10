import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { Posts } from "./pages/Posts";
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  )

}

export default App;