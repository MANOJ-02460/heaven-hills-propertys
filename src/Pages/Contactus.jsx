import {useEffect} from "react";
import { motion } from "framer-motion";
import {
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
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
   useEffect(()=>{
     window.scrollTo(0, 0);
     document.title="Contact Us | Heaven Hills Properties";
    },[])
  return (
    <>
      {/* HERO SECTION - Light & Soft Theme */}
      {/* Responsive Padding: py-16 (Mobile) -> py-32 (Desktop) */}
      <section className="relative bg-blue-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
        
        {/* DECORATIVE BLOBS (Soft Background Accents) */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            <h2 className="text-[#6C7CFF] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">
              Contact Us
            </h2>
            
            {/* Responsive Text: 3xl (Mobile) -> 5xl (Desktop) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Let's Start a <span className="text-slate-400">Conversation</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-slate-500 text-base sm:text-lg">
              We are here to assist you in finding your dream space. Reach out for inquiries, site visits, or personalized support.
            </p>
          </motion.div>

          {/* GRID: Single Column (Mobile) -> Two Columns (Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            
            {/* LEFT INFO CARD - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // Responsive Radius & Padding: Compact on mobile, Expansive on desktop
              className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-6 sm:mb-8">Contact Information</h3>

              {/* INFO LIST */}
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Visit Us",
                    detail: "Plot No. 21, Financial District, Gachibowli, Hyderabad, Telangana – 500032",
                  },
                  {
                    icon: <FaPhoneAlt />,
                    title: "Call Us",
                    detail: "+917569588477",
                    link: "tel:+917569588477",
                  },
                  {
                    icon: <FaEnvelope />,
                    title: "Email Us",
                    detail: "info@heavenhillspropertys.com",
                    link: "mailto:info@heavenhillspropertys.com",
                  },
                  {
                    icon: <FaClock />,
                    title: "Working Hours",
                    detail: "Mon – Sat : 9:30 AM – 6:30 PM",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-slate-600 hover:text-[#6C7CFF] transition-colors leading-relaxed text-sm sm:text-base">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* QUICK ACTIONS */}
              <div className="mt-8 sm:mt-12">
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">Quick Actions</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <a
                    href="tel:+919000000000"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#1E293B] text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FaPhoneAlt size={14} /> Request Callback
                  </a>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-white text-[#1E293B] border border-slate-200 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base hover:border-[#6C7CFF] hover:text-[#6C7CFF] transition-all duration-300"
                  >
                    <FaCalendarCheck size={14} /> Book Site Visit
                  </button>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-100/60">
                 <div className="flex gap-3">
                    {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-50 text-slate-400 hover:bg-[#6C7CFF] hover:text-white transition-all duration-300"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                 </div>
              </div>
            </motion.div>

            {/* RIGHT FORM CARD - Clean & Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // Responsive Radius & Padding
              className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-2">Send a Message</h3>
              <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 text-sm sm:text-base"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="relative">
                    <select className="w-full appearance-none bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] text-sm sm:text-base focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 cursor-pointer">
                      <option value="">Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    <FaAngleDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select className="w-full appearance-none bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] text-sm sm:text-base focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 cursor-pointer">
                      <option value="">Budget</option>
                      <option value="50">Below ₹50L</option>
                      <option value="50-80">₹50L - ₹80L</option>
                      <option value="80-1cr">₹80L - ₹1Cr</option>
                      <option value="1cr+">Above ₹1Cr</option>
                    </select>
                    <FaAngleDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-slate-50 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6C7CFF]/20 transition-all duration-300 resize-none text-sm sm:text-base"
                />

                <button
                  type="submit"
                  className="w-full bg-[#6C7CFF] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#5A67D8] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <FaPaperPlane size={14} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP SECTION - Clean & Integrated */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-2 sm:p-3 overflow-hidden">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]"
             >
               <iframe
                 title="Office Location"
                 src="https://www.google.com/maps?q=Gachibowli,Hyderabad&output=embed"
                 width="100%"
                 height="100%"
                 style={{ border: 0, filter: "grayscale(10%) contrast(1.1)" }}
                 loading="lazy"
               ></iframe>
             </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;