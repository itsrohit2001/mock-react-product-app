import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Pages" element={<Pages/>} />
          <Route path="/Shop" element={<Shop/>} />
        </Routes>
      </Router>
      <Hero/>
      <main>
        <ProductList/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
