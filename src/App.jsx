import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/Aboutus";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetails";
import Services from "./Pages/Services";
import Contact from "./Pages/Contactus";
import Footer from "./Components/Footer";
import { FiChevronsUp } from "react-icons/fi";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 border-2 border-[#5a76ff] text-[#5a76ff] w-12 h-12
                     rounded-full flex items-center justify-center shadow-lg
                     hover:scale-110 transition-transform duration-200 z-50"
        >
          <FiChevronsUp className="text-3xl" />
        </button>
      )}



      <a
        href="https://wa.me/917569588477"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full
             flex items-center justify-center shadow-lg hover:scale-110
             transition-transform duration-200 z-50 float-animation"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WhatsApp"
        />
      </a>

            <Footer/>

    </>
  );
}

export default App;
