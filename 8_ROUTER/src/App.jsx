import "./App.css";

// 1 - config react-router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Info from "./pages/Info.jsx";
import NotFound from "./pages/NotFound.jsx";
import Search from "./pages/Search.jsx";

//Components
import Navbar from "./components/Navbar.jsx";
import SearchForm from "./components/SearchForm.jsx";

function App() {
  return (
    <>
      <h1>React router</h1>
      {/* 2 - links com react-router */}
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}/>
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/*9 - Search */}
          <Route path="/search" element={<Search/>}/>
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
