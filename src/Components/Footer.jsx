import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaCogs,
  FaPhoneAlt,
  FaAngleRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100 text-slate-600">
      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* BRAND COLUMN */}
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Heaven Hills Propertys
            </span>
          </Link>

          <p className="text-sm leading-relaxed max-w-xs">
            Premium residential & commercial properties designed for modern
            living and long-term value.
          </p>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                     bg-slate-100 text-slate-600
                     hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                     bg-slate-100 text-slate-600
                     hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                     bg-slate-100 text-slate-600
                     hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>
            
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                     bg-slate-100 text-slate-600
                     hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h3>

          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
              >
                <FaHome className="text-[#6C7CFF]" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-3 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
              >
                <FaInfoCircle className="text-[#6C7CFF]" />
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center gap-3 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
              >
                <FaBuilding className="text-[#6C7CFF]" />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex items-center gap-3 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
              >
                <FaCogs className="text-[#6C7CFF]" />
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-3 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
              >
                <FaPhoneAlt className="text-[#6C7CFF]" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* PROPERTIES COLUMN */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">Properties</h3>
          
          <ul className="space-y-4 text-sm font-medium">
            {[
              { name: "Luxury Apartments", link: "/projects/1" },
              { name: "Villas", link: "/projects/2" },
              { name: "Commercial", link: "/projects/3" },
              { name: "Ongoing Projects", link: "/projects/4" },
              { name: "Completed Projects", link: "/projects/5" },
            ].map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-slate-600 hover:text-[#6C7CFF] transition-colors group"
                >
                  <span className="text-[#6C7CFF] group-hover:translate-x-1 transition-transform duration-300">
                    <FaAngleRight className="text-sm" />
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Us</h3>

          <div className="space-y-5 text-sm">
            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#6C7CFF] shrink-0">
                  <FaMapMarkerAlt />
              </div>
              <p className="leading-relaxed text-slate-600">
                Plot No. 21, Financial District,<br />
                Gachibowli, Hyderabad,<br />
                Telangana – 500032
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="text-[#6C7CFF] shrink-0">
                  <FaPhoneAlt />
              </div>
              <span className="text-slate-600">
                <span className="mr-1">Phone:</span>
                <a
                  href="tel:+917569588477"
                  className="text-slate-900 font-semibold hover:text-[#6C7CFF] transition-colors"
                >
                  +91 7569588477
                </a>
              </span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="text-[#6C7CFF] shrink-0">
                  <FaEnvelope />
              </div>
              <span className="text-slate-600">
                <span className="mr-1">Email:</span>
                <a
                  href="mailto:info@heavenhillspropertys.com"
                  className="text-slate-900 font-semibold hover:text-[#6C7CFF] transition-colors"
                >
                  info@heavenhillspropertys.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Heaven Hills Propertys. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;