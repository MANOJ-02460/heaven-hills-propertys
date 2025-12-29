import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaHandshake,
  FaKey,
  FaRegBuilding,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAngleDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCalendarCheck,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { title } from "framer-motion/client";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Heaven Hills Properties";
  }, []);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const nightOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35], [0.2, 0.6]);

  return (
    // Added overflow-x-hidden to prevent horizontal scroll on mobile
    <div className="overflow-x-hidden">
      <section className="relative min-h-[100vh]">
        {/* Fixed height to handle mobile address bar issues */}
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
              scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            }}
          />

          {/* GRADIENT OVERLAY - FIX: Changed bg-linear-to-t to bg-gradient-to-t */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />

          {/* FLOATING GEOMETRIC SHAPES */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              // Added animate prop to ensure visibility immediately on reload
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-blue-300 tracking-[0.2em] text-sm font-bold mb-4 uppercase">Welcome to</h2>
              <motion.h1
                className="text-white text-5xl md:text-8xl font-bold mb-6 leading-tight"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
              >
                HEAVEN <br /> HILLS
              </motion.h1>
              <div className="h-1 w-24 bg-white mx-auto mb-8" />
              <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto mb-10">
                Redefining the skyline with luxury that transcends expectations.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all"
              >
                Discover Lifestyle
              </motion.button>
            </motion.div>
          </div>

          {/* DOWN ARROW ANIMATION */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Discover Homes Built for <br />
              <span className="text-blue-600">Better Living</span>
            </h2>

            <p className="mt-6 text-lg text-slate-700 max-w-xl leading-relaxed">
              Premium residential and commercial properties crafted with
              thoughtful design, prime locations, and long-term value. We
              redefine the standards of modern living.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-800 transition shadow-xl shadow-blue-900/20">
               <Link to="/projects">View Projects</Link> 
              </button>

              <button className="border border-blue-200 text-blue-800 px-8 py-4 rounded-xl hover:bg-blue-100 transition">
               <Link to="/contact">Contact Us</Link>  
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-full h-full bg-blue-200/50 rounded-[3rem]" />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Property"
              className="relative rounded-[3rem] shadow-2xl border-4 border-white w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS / WHY CHOOSE US */}
      <section className="bg-slate-50 py-15 md:py-10 overflow-hidden relative">
        {/* DECORATIVE BACKGROUND GLOWS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10 px-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-bold tracking-wider uppercase text-xs mb-4">
            Our Strengths
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Heaven Hills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are committed to delivering thoughtfully designed residential and
            commercial spaces that combine quality, comfort, and value.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: <FaHome />,
              title: "500+ Homes Delivered",
              badge: "Top Rated",
              desc: "Happy families living in our properties across the city.",
              features: ["Timely Possession", "Premium Finishing", "Zero Hidden Costs"],
            },
            {
              icon: <FaBuilding />,
              title: "Prime Locations",
              badge: "High Demand",
              desc: "Projects situated in high-growth urban zones.",
              features: ["IT Corridors", "Near Metro", "Schools & Hospitals"],
            },
            {
              icon: <FaHandshake />,
              title: "Trusted Developer",
              badge: "10+ Years",
              desc: "Transparent & customer-first approach.",
              features: ["100% Transparency", "Customer Centric", "Ethical Practices"],
            },
            {
              icon: <FaKey />,
              title: "Ready to Move Homes",
              badge: "Immediate",
              desc: "Immediate possession available for selected projects.",
              features: ["Key Handover Ready", "No Construction Delay", "Fully Finished"],
            },
            {
              icon: <FaRegBuilding />,
              title: "Modern Architecture",
              badge: "Vaastu",
              desc: "Designed with contemporary aesthetics and comfort.",
              features: ["Vaastu Compliant", "Earthquake Resistant", "Modern Design"],
            },
            {
              icon: <FaShieldAlt />,
              title: "RERA Approved",
              badge: "Verified",
              desc: "Legally compliant & verified projects for safety.",
              features: ["Govt Registered", "Bank Loan Approved", "Safe Investment"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative bg-white p-0 md:p-10 rounded-[2rem]
                border border-slate-100
                hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]
                hover:-translate-y-2
                transition-all duration-300 ease-out
                flex flex-col h-full overflow-hidden
              "
            >
              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              {/* CARD HEADER */}
              <div className="p-8 pb-4 md:pb-6">
                <div className="flex justify-between items-start mb-6">
                  {/* ICON CONTAINER */}
                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600
                    flex items-center justify-center text-2xl
                    group-hover:scale-110
                    group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white
                    transition-all duration-300 shadow-sm
                  ">
                    {item.icon}
                  </div>

                  {/* BADGE */}
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* UI PANEL FOR FEATURES */}
              <div className="bg-slate-50/50 mx-4 mb-6 p-4 rounded-xl border border-slate-100 flex-grow">
                 <ul className="space-y-3">
                   {item.features.map((feat, idx) => (
                     <li key={idx} className="flex items-start text-xs font-medium text-slate-600">
                       <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M5 13l4 4L19 7" />
                       </svg>
                       {feat}
                     </li>
                   ))}
                 </ul>
              </div>

              {/* CARD FOOTER ACTION */}
              <div className="mt-auto px-8 pb-8 pt-2">
                <div className="flex items-center text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Signature Living Spaces
            </h2>
            <p className="mt-4 text-slate-500">
              Experience luxury living with 12+ premium amenities across a 2-acre
              Grand Farm Resort.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* FIX: Changed bg-linear-to-tr to bg-gradient-to-tr */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-20 blur-2xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                Upcoming Project
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Heaven Hills Grand Villa
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                Each project reflects architectural excellence, modern amenities,
                and thoughtful planning to create vibrant communities. Located
                in the heart of the financial district.
              </p>

              <ul className="space-y-4 mb-8">
                {["2 Acre Grand Clubhouse", "24/7 Security", "Children Play Area"].map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-700">
                     <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">✓</div>
                     {feature}
                   </li>
                ))}
              </ul>

              <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-800 transition shadow-lg">
               <Link to="/projects"> View Plans</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROPERTY CARDS */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Featured Properties</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Apartments",
              location: "Gachibowli, Hyderabad",
              price: "₹ 85 Lakhs",
              image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
              badge: "New Launch",
              link : "/projects/1"
            },
            {
              title: "Premium Villas",
              location: "Kokapet, Hyderabad",
              price: "₹ 2.5 Cr",
              image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              badge: "Hot Deal",
              link : "/projects/2"
            },
            {
              title: "Commercial Spaces",
              location: "Financial District",
              price: "₹ 1.2 Cr",
              image:
                "https://images.unsplash.com/photo-1484154218962-a197022b5858",
              badge: "Limited",
              link : "/projects/3"
            },
            {
              title: "Luxury Plots",
              location: "Shamshabad, Hyderabad",
              price: "₹ 45 Lakhs",
              image:
                "https://images.unsplash.com/photo-1501183638710-841dd1904471",
              badge: "HMDA Approved",
              link : "/projects/4"
            },
            {
              title: "Gated Community",
              location: "Tellapur, Hyderabad",
              price: "₹ 3.2 Cr",
              image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
              badge: "Selling Fast",
              link : "/projects/5"
            },
          ].map((property, i) => (
            <Link to={property.link} key={i}>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group bg-white rounded-3xl
                shadow-sm border border-blue-50
                hover:shadow-blue-200/50 hover:shadow-2xl hover:-translate-y-2
                transition-all duration-500 overflow-hidden
              "
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* BADGE */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    {property.badge}
                </div>

                {/* LIKE BUTTON (FAKE) */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-white cursor-pointer transition">
                    <span className="text-slate-400 hover:text-red-500 transition">♥</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* LOCATION */}
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {property.location}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>

                <div className="w-full h-px bg-blue-50 my-4"></div>

                {/* BOTTOM ROW: PRICE & BUTTON */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Starting From</p>
                    <p className="text-xl font-bold text-slate-900">
                      {property.price}
                    </p>
                  </div>

                  <button className="w-10 h-10 rounded-full bg-blue-50 text-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA & CONTACT */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-slate-50 relative overflow-hidden">
  {/* DECORATIVE LIGHT BLOBS */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000 pointer-events-none" />

  {/* SECTION HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 pt-16 sm:pt-20 lg:pt-20 px-6 relative z-10"
  >
    <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[#6C7CFF] font-semibold">
      Contact Us
    </h2>
    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
      Get in <span className="text-[#6C7CFF]">Touch</span>
    </h1>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-500 leading-relaxed px-4">
      Ready to secure your plot with Heaven Hills Property? Our team is
      here to guide you through every step of your property journey.
    </p>
  </motion.div>

  <div className="max-w-7xl mx-auto px-6 pb-16 sm:pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10">
    
    {/* LEFT INFO CARD - Glass Effect */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/70 backdrop-blur-xl border border-white/50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] leading-tight">
        Let's Start a <br /> Conversation
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
        We’re here to help you find perfect property. Reach out to our
        team for enquiries, site visits, or personalised assistance.
      </p>

      {/* CONTACT INFO */}
      <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <FaMapMarkerAlt className="text-sm sm:text-base" />
          </div>
          <div>
              <h4 className="font-semibold text-[#1E293B] text-sm sm:text-base">Visit Us</h4>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
              Plot No. 21, Financial District, Gachibowli, Hyderabad, Telangana – 500032
              </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <FaPhoneAlt className="text-sm sm:text-base" />
          </div>
          <a href="tel:+917569588477" className="text-slate-600 hover:text-[#6C7CFF] transition font-medium text-sm sm:text-base">
            +917569588477
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <FaEnvelope className="text-sm sm:text-base" />
          </div>
          <a href="mailto:info@heavenhillspropertys.com" className="text-slate-600 hover:text-[#6C7CFF] transition font-medium text-sm sm:text-base">
            info@heavenhillspropertys.com
          </a>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="mt-8 sm:mt-10">
        <p className="text-xs sm:text-sm font-semibold text-slate-400 mb-3 sm:mb-4 uppercase tracking-wider">
          Connect With Us
        </p>
        <div className="flex gap-3 sm:gap-4">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>

    {/* RIGHT FORM CARD - Solid White */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-slate-50"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-2">Send Us a Message</h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-6">
        Fill in your details and we’ll get back to you shortly.
      </p>

      <form className="space-y-4 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors text-sm sm:text-base"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors text-sm sm:text-base"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors text-sm sm:text-base"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <select
                   className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors cursor-pointer text-sm sm:text-base"
                 >
                   <option value="">Property Type</option>
                   <option value="apartment">Apartment</option>
                   <option value="villa">Villa</option>
                   <option value="plot">Plots</option>
                 </select>
                 <select
                   className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors cursor-pointer text-sm sm:text-base"
                 >
                   <option value="">Budget</option>
                   <option value="1cr">Below 1 Cr</option>
                   <option value="2cr">1 Cr - 2 Cr</option>
                   <option value="above">Above 2 Cr</option>
                 </select>
        </div>

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full bg-slate-50 border-transparent rounded-xl px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-colors resize-none text-sm sm:text-base"
        />

        <button
          type="submit"
          className="w-full bg-[#6C7CFF] text-white py-3 sm:py-4 rounded-xl font-bold hover:bg-[#5A67D8] transition-colors text-sm sm:text-base"
        >
          Send Enquiry
        </button>
      </form>
    </motion.div>

  </div>
</section>
    </div>
  );
};

export default Home;