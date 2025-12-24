import {useEffect} from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHandshake,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaMapMarkedAlt,
  FaAward,
  FaCity,
  FaLeaf,
  FaGem,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
     useEffect(()=>{
       window.scrollTo(0, 0);
       document.title="About Us | Heaven Hills Properties";
  },[])
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100">
              <span className="text-sm font-semibold text-[#6C7CFF] tracking-wide uppercase">
                Welcome to Heaven Hills
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Building Dreams <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C7CFF] to-[#818CF8]">
                Brick by Brick
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Heaven Hills Properties is a trusted real estate brand committed
              to delivering thoughtfully designed residential and commercial
              spaces in prime urban locations.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed max-w-xl">
              With years of industry expertise, we focus on quality construction,
              transparent dealings, and customer satisfaction. Our developments
              are crafted to enhance lifestyles while offering long-term value.
            </p>

            {/* TRUST STATS BAR */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {[
                { label: "Years Experience", value: "12+" },
                { label: "Projects", value: "50+" },
                { label: "Happy Families", value: "500+" },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-[#6C7CFF]">{stat.value}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button className="px-8 py-3.5 bg-[#1E293B] text-white rounded-xl font-medium hover:bg-[#334155] transition-colors shadow-lg shadow-slate-900/20">
              <Link to="/projects">Our Projects </Link>
              </button>
              <button className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Decorative Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 blur-3xl rounded-full opacity-70" />
            
            {/* Image Container */}
            <div className="relative w-full h-full max-w-md lg:max-w-full mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6C7CFF] to-[#4F46E5] rounded-[2.5rem] opacity-10 blur-lg" />
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Architecture"
                className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <FaAward />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Award Winning</p>
                  <p className="text-sm font-bold text-slate-900">Construction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Heaven Hills
            </h2>
            <div className="w-16 h-1 bg-[#6C7CFF] mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">
              We combine experience, innovation, and integrity to deliver
              exceptional real estate solutions tailored to your lifestyle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake />,
                title: "Trust & Transparency",
                desc: "Clear communication and ethical business practices at every stage of the journey.",
                badge: "100% Honest"
              },
              {
                icon: <FaShieldAlt />,
                title: "RERA Approved",
                desc: "Legally compliant developments ensuring complete peace of mind for your investment.",
                badge: "Certified"
              },
              {
                icon: <FaBuilding />,
                title: "Superior Construction",
                desc: "High-quality materials and modern architectural standards built to last.",
                badge: "Premium Quality"
              },
              {
                icon: <FaMapMarkedAlt />,
                title: "Strategic Locations",
                desc: "Projects situated in fast-growing, well-connected urban hubs.",
                badge: "Prime Locations"
              },
              {
                icon: <FaUsers />,
                title: "Customer-Centric",
                desc: "Dedicated support from the initial booking to final possession and beyond.",
                badge: "Support 24/7"
              },
              {
                icon: <FaChartLine />,
                title: "High ROI Potential",
                desc: "Investments designed to appreciate over time, offering great returns.",
                badge: "Value Growth"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative bg-white p-8 rounded-2xl border border-slate-100
                  hover:border-indigo-100 hover:shadow-xl
                  transition-all duration-300 cursor-default flex flex-col items-start text-left overflow-hidden
                "
              >
                {/* Gradient Border Top (Reveals on Hover) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="
                  w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600
                  flex items-center justify-center text-2xl mb-6
                  group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300
                  shadow-sm
                ">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                  {item.desc}
                </p>
                
                <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {item.badge}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION (Light Theme) */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Subtle Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600">
              We strive to create spaces that are not just buildings, but foundations for a better life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGem />,
                title: "Quality First",
                desc: "We never compromise on the quality of materials or construction. Every home is built to withstand the test of time.",
              },
              {
                icon: <FaUsers />,
                title: "Community Focus",
                desc: "Our developments are designed to foster community living with shared spaces, parks, and safe environments for families.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainable Living",
                desc: "We incorporate green building practices and energy-efficient designs to reduce environmental impact and lower costs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6 mx-auto md:mx-0">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center md:text-left">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;