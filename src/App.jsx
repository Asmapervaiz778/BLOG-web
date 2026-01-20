// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navcom from "./pages/Navcom";
import Categories from "./pages/Categories";
import BlogDetail from "./pages/BlogDetail";
import CategoryPosts from "./pages/CategoryPosts";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Navcom /> {/* <-- must be here to show on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/category/:userId/posts" element={<CategoryPosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
