import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiPhone, FiArrowRight } from "react-icons/fi";
import { 
  FaBuilding, 
  FaHome, 
  FaCity, 
  FaHammer, 
  FaClipboardCheck 
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const projectItems = [
    { name: "Luxury Apartments", link: "/projects/1", icon: <FaBuilding /> },
    { name: "Premium Villas", link: "/projects/2", icon: <FaHome /> },
    { name: "Commercial Spaces", link: "/projects/3", icon: <FaCity /> },
    { name: "Ongoing Projects", link: "/projects/4", icon: <FaHammer /> },
    { name: "Completed Projects", link: "/projects/5", icon: <FaClipboardCheck /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LOGO */}
            <div className="flex-shrink-0 cursor-pointer">
              <Link to="/" className="flex items-center gap-3">
                {/* Replace with your actual Logo */}
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  HH
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-[#1E293B] leading-none">HEAVEN HILLS</h1>
                  <span className="text-xs text-[#6C7CFF] font-semibold tracking-widest uppercase">Properties</span>
                </div>
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <Link to="/" className="text-sm font-semibold text-[#334155] hover:text-[#6C7CFF] transition-colors">
                  HOME
                </Link>
              </li>
              
              <li>
                <Link to="/about" className="text-sm font-semibold text-[#334155] hover:text-[#6C7CFF] transition-colors">
                  ABOUT US
                </Link>
              </li>

              {/* PROJECTS DROPDOWN (Mega Menu Style) */}
              <li className="relative group py-2">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[#334155] hover:text-[#6C7CFF] transition-colors">
                   <Link to="/projects">PROJECTS</Link> 
                  <FiChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Content */}
                <div className="
                  absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px]
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                ">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-1 gap-1">
                    {projectItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="
                          flex items-center gap-4 p-3 rounded-xl
                          text-gray-600 hover:bg-indigo-50 hover:text-[#6C7CFF]
                          transition-all duration-200 group/item
                        "
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover/item:bg-[#6C7CFF] group-hover/item:text-white transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm">{item.name}</span>
                        <FiArrowRight className="ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-xs" />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link to="/services" className="text-sm font-semibold text-[#334155] hover:text-[#6C7CFF] transition-colors">
                  SERVICES
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-sm font-semibold text-[#334155] hover:text-[#6C7CFF] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* RIGHT ACTIONS (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 text-[#1E293B]">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <FiPhone />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Call Us Now</span>
                  <span className="text-sm font-bold leading-none"><a href="tel:+917569588477">+917569588477</a></span>
                </div>
              </div>

              <Link
                to="/contact"
                className="
                  px-6 py-3 bg-[#1E293B] text-white rounded-full
                  font-semibold text-sm
                  shadow-lg shadow-[#6C7CFF]/20
                  hover:bg-[#6C7CFF] hover:shadow-[#6C7CFF]/40
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Get a Quote
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#6C7CFF] transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <FiMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER (Slide Over) */}
      {/* Backdrop */}
      <div 
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer Panel */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-white z-50 shadow-2xl 
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-[#1E293B] rounded-md flex items-center justify-center text-white font-bold text-sm">
                  HH
                </div>
                <span className="font-bold text-[#1E293B]">Heaven Hills</span>
            </div>
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 space-y-6 flex-1">
            <Link 
              to="/" 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-[#1E293B] hover:text-[#6C7CFF] flex items-center justify-between group"
            >
              Home <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sm" />
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-[#1E293B] hover:text-[#6C7CFF] flex items-center justify-between group"
            >
              About Us <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sm" />
            </Link>

            {/* Mobile Accordion for Projects */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Explore Projects</p>
              <div className="space-y-2">
                {projectItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="
                      flex items-center gap-4 p-3 rounded-xl border border-gray-50
                      hover:bg-indigo-50 hover:border-indigo-100
                      transition-all
                    "
                  >
                    <div className="text-[#6C7CFF]">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/services" 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-[#1E293B] hover:text-[#6C7CFF] flex items-center justify-between group"
            >
              Services <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sm" />
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-[#1E293B] hover:text-[#6C7CFF] flex items-center justify-between group"
            >
              Contact <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sm" />
            </Link>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <a href="tel:+919000000000" className="flex items-center justify-center gap-3 text-[#1E293B] font-bold mb-4">
              <FiPhone className="text-[#6C7CFF]" />
              +91 90000 00000
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-4 bg-[#6C7CFF] text-white rounded-xl font-bold shadow-lg hover:bg-[#5A67D8] transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;