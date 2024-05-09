import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <>
      <h1>Context API</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
