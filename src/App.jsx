import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted/GetStarted";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RiskWarning from "./pages/RiskWarning";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#eaffd0] via-[#f7fff6] to-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/products" element={<Products />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/riskwarning" element={<RiskWarning />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
