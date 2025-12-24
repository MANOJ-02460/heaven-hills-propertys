import {useEffect} from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  FaHandshake,
  FaChartPie,
  FaShieldAlt,
  FaUsers,
  FaFileContract,
  FaPaintRoller,
  FaPlane,
  FaSearch,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
   useEffect(()=>{
     window.scrollTo(0, 0);
     document.title="Services | Heaven Hills Properties";
  },[])
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#6C7CFF]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-[#6C7CFF] text-xs font-bold uppercase tracking-wider mb-4">
                Our Expertise
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1E293B] leading-tight mb-6">
                Premium Real Estate <br />
                <span className="text-[#6C7CFF]">Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
                Whether you are buying your dream home, seeking a commercial
                space, or looking for high-yield investments, Heaven Hills
                Properties offers end-to-end services tailored to your unique
                needs.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-[#1E293B] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#6C7CFF] transition shadow-lg shadow-[#1E293B]/10"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/projects"
                  className="bg-white text-[#1E293B] border border-gray-200 px-8 py-3 rounded-xl font-medium hover:border-[#6C7CFF] hover:text-[#6C7CFF] transition"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C7CFF]/20 to-blue-200/20 rounded-[3rem] rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Real Estate Services"
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

           {/* CORE SERVICES GRID */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Subtle Background Blobs for Depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              Comprehensive Services
            </h2>
            <p className="mt-4 text-slate-600">
              From acquisition to management, we cover every aspect of your
              property journey with precision and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome />,
                title: "Residential Sales",
                desc: "Find your perfect home from our curated list of luxury apartments, villas, and plots.",
                features: ["Site Visits", "Negotiation Support", "Home Loans"],
              },
              {
                icon: <FaBuilding />,
                title: "Commercial Leasing",
                desc: "Premium office spaces and retail outlets in Hyderabad's most strategic business hubs.",
                features: ["Office Space", "Retail Shops", "Warehousing"],
              },
              {
                icon: <FaKey />,
                title: "Property Management",
                desc: "Hassle-free management of your assets including rent collection and maintenance.",
                features: ["Tenant Screening", "Maintenance", "Legal Compliance"],
              },
              {
                icon: <FaChartPie />,
                title: "Investment Advisory",
                desc: "Data-driven insights to help you invest in properties with high appreciation potential.",
                features: ["ROI Analysis", "Market Trends", "Portfolio Review"],
              },
              {
                icon: <FaShieldAlt />,
                title: "Legal Assistance",
                desc: "Complete legal support including title verification, documentation, and RERA compliance.",
                features: ["Title Check", "Sale Deed", "RERA Registration"],
              },
              {
                icon: <FaPlane />, // Make sure to import FaPlane from react-icons/fa
                title: "NRI Services",
                desc: "Dedicated services for Non-Resident Indians looking to invest back home.",
                features: ["Remote Documentation", "Power of Attorney", "Property Management"],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative bg-white rounded-3xl p-8 border border-slate-100
                  shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10
                  transition-all duration-300 flex flex-col h-full
                  hover:-translate-y-2
                "
              >
                {/* Top Accent Line (Reveals on Hover) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Icon Container with Gradient */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Feature List */}
                <div className="space-y-3 border-t border-slate-50 pt-4 mt-auto">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      <FaCheckCircle className="mr-2 text-emerald-500" />
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR & DESIGN (New Section) */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
                alt="Interior"
              />
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                alt="Design"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
              Interior Design & Furnishing
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our in-house design team transforms empty spaces into stunning
              living environments. We offer modular kitchens, interior fit-outs,
              and turnkey furnishing solutions.
            </p>

            <ul className="space-y-4">
              {[
                "Space Planning & Vastu Compliance",
                "Modern Modular Kitchens",
                "Custom Furniture Design",
                "Turnkey Project Execution",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-[#6C7CFF] flex items-center justify-center text-xs">
                    <FaPaintRoller />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT ADVISORY SPOTLIGHT */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-[#6C7CFF]/5 rounded-[3rem]" />
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Investment"
                className="rounded-[2rem] w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm text-gray-500">Average Annual Returns</p>
                <p className="text-2xl font-bold text-[#1E293B]">12% - 18%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              Smart Investment Advisory
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Real estate is one of the safest vehicles for wealth creation. Our
              advisors use proprietary market data to identify high-growth
              corridors before they peak.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Location Analysis", icon: <FaMapMarkedAlt /> }, // Assuming FaMapMarkedAlt is imported or using a replacement
                { label: "Risk Assessment", icon: <FaShieldAlt /> },
                { label: "Exit Strategy", icon: <FaKey /> },
                { label: "Tax Planning", icon: <FaFileContract /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition"
                >
                  <div className="text-[#6C7CFF] text-xl">{item.icon}</div>
                  <span className="font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#1E293B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#6C7CFF] transition shadow-lg">
             <Link to="/contact"> Schedule an Investment Call</Link>
            </button>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS (Process) */}
      <section className="bg-[#1E293B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-4 text-gray-400">
              A transparent, 4-step process designed to put your mind at ease.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700 z-0"></div>

            {[
              { num: "01", title: "Consultation", desc: "We understand your budget & preferences." },
              { num: "02", title: "Selection", desc: "Shortlist properties that match your criteria." },
              { num: "03", title: "Documentation", desc: "Legal checks, paperwork, and agreements." },
              { num: "04", title: "Handover", desc: "Site visit, registration, and key handover." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-[#6C7CFF] rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(108,124,255,0.5)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[#EEF2FF] to-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1E293B]"
          >
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are buying, selling, or investing, our dedicated team
            of experts is here to assist you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#6C7CFF] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#6C7CFF]/30 transition transform hover:-translate-y-1"
            >
              Contact Us Now
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white text-[#1E293B] border border-gray-200 rounded-xl font-semibold hover:border-[#6C7CFF] hover:text-[#6C7CFF] transition"
            >
              Browse Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;