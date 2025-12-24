import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from './data/ProjectsData';
import { 
  FaBed, 
  FaRulerCombined, 
  FaCalendarCheck, 
  FaFileContract,
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaShieldAlt,
  FaParking
} from 'react-icons/fa';
import { 
  IoMdArrowBack, 
  IoMdDownload 
} from 'react-icons/io';
import { 
  FiCheckCircle, 
  FiMapPin, 
  FiPhone, 
  FiMail 
} from 'react-icons/fi';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        // Added a small timeout to ensure scroll happens after render
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        
        const foundProject = projectsData.find(p => p.id === parseInt(id));
        setProject(foundProject);

        return () => clearTimeout(timer);
    }, [id]);

      useEffect(() => {
        if (project) {
            document.title = `${project.title} | Heaven Hills Properties`;
        } else {
            document.title = "Project Details | Heaven Hills Properties";
        }
    }, [project]);


    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center bg-blue-50 mt-20">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 font-medium">Loading project details...</p>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'pricing', label: 'Price List' },
        { id: 'location', label: 'Location' },
    ];

    return (
        <div className="bg-blue-50 mt-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background color to prevent white flash while loading image */}
                        <div className="w-full h-full bg-gray-200">
                            <img
                                src={project.gallery[activeImage]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                {/* Top Actions */}
                <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-20">
                    <Link to="/projects" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 p-3 rounded-full">
                        <IoMdArrowBack size={24} />
                    </Link>
                    
                    <div className="flex gap-3">
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base flex items-center gap-2">
                            <IoMdDownload /> <span className="hidden sm:inline">Brochure</span>
                        </button>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10 text-white pointer-events-none">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.2 }}
                        className="pointer-events-auto"
                    >
                        <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase mb-4 inline-block shadow-lg">
                            {project.status || 'New Launch'}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">{project.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-base md:text-xl text-gray-200 mt-4">
                            <span className="flex items-center gap-2"><FiMapPin className="text-blue-400" /> Whitefield, Bangalore</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{project.price}</span>
                        </div>
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-8 right-4 md:right-8 flex gap-3 z-20 pointer-events-auto">
                        {project.gallery.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveImage(index)} 
                                className={`transition-all duration-300 ${activeImage === index ? 'w-10 h-10 md:w-12 md:h-12 opacity-100 scale-110 border-2 border-white' : 'w-3 h-3 md:w-4 md:h-4 opacity-60 hover:opacity-100'} rounded-full bg-cover bg-center relative`}
                                style={{ backgroundImage: `url(${project.gallery[index]})` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Stats Bar */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[
                        { label: "Config", value: "3 & 4 BHK", icon: <FaBed /> },
                        { label: "Size", value: "1850 - 2450 sq.ft", icon: <FaRulerCombined /> },
                        { label: "Possession", value: "Dec 2024", icon: <FaCalendarCheck /> },
                        { label: "RERA ID", value: "PRM/KA/RERA/125", icon: <FaFileContract /> },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                            <div className="text-blue-600 text-xl md:text-2xl mb-2">{item.icon}</div>
                            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wide mb-1">{item.label}</span>
                            <span className="text-slate-800 font-bold text-sm md:text-lg">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Tabs */}
            <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 mt-8 md:mt-12 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-6 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-6 md:space-x-8 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-5 border-b-2 font-semibold text-sm md:text-base transition-colors whitespace-nowrap ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 min-h-[500px]">
                <AnimatePresence mode="wait">
                    
                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                                <div className="lg:col-span-2 space-y-8">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">About Project</h2>
                                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                            {project.overview}
                                        </p>
                                        <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-4">
                                            Designed by world-renowned architects, {project.title} features a contemporary aesthetic blended with functional living spaces. Every corner is crafted to maximize natural light and ventilation, creating a serene environment for your family.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Why invest in {project.title}?</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Strategic location near the upcoming IT corridor.",
                                                "High appreciation potential due to infrastructural developments.",
                                                "Trusted developer with a track record of 10+ years."
                                            ].map((text, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Sidebar Enquiry Card */}
                                <div className="lg:col-span-1">
                                    {/* FIX: Changed top-32 to top-36 to prevent overlapping with Sticky Tabs */}
                                    <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-600 sticky top-36">
                                        <h3 className="text-xl font-bold mb-4">Register Your Interest</h3>
                                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-sm md:text-base" />
                                            <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-sm md:text-base" />
                                            <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-sm md:text-base" />
                                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-blue-200 text-sm md:text-base">
                                                Get Call Back
                                            </button>
                                        </form>
                                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-2">Or call us directly</p>
                                            <a href="tel:+917569588477" className="text-lg md:text-xl font-bold text-slate-800 hover:text-blue-600 transition flex items-center justify-center gap-2">
                                                <FiPhone /> +91 75695 88477
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* AMENITIES TAB */}
                    {activeTab === 'amenities' && (
                        <motion.div key="amenities" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">World-Class Amenities</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {[
                                    { title: "Clubhouse & Leisure", icon: <FaSwimmingPool />, items: ["Infinity Pool", "Spa & Salon", "Indoor Games", "Multipurpose Hall"], color: "blue" },
                                    { title: "Health & Fitness", icon: <FaDumbbell />, items: ["Modern Gym", "Yoga Deck", "Jogging Track", "Meditation Zone"], color: "green" },
                                    { title: "Outdoor & Kids", icon: <FaTree />, items: ["Landscaped Gardens", "Kids Play Area", "Skating Rink", "Senior Citizen Zone"], color: "orange" },
                                    { title: "Safety & Convenience", icon: <FaShieldAlt />, items: ["24/7 Security", "CCTV Surveillance", "Power Backup", "Ample Parking"], color: "purple" },
                                ].map((cat, i) => (
                                    <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-${cat.color}-100 rounded-full flex items-center justify-center text-${cat.color}-600 mb-6 text-xl md:text-2xl`}>
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold mb-4">{cat.title}</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {cat.items.map((item, j) => (
                                                <div key={j} className="flex items-center gap-2 text-slate-600 text-sm md:text-base">
                                                    <FiCheckCircle className="text-green-500 text-sm flex-shrink-0" /> {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* PRICING TAB */}
                    {activeTab === 'pricing' && (
                        <motion.div key="pricing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Price List</h2>
                                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-4 md:mt-0 text-sm md:text-base">
                                    <IoMdDownload /> Download Full Price List
                                </button>
                            </div>

                            {/* FIX: Added overflow-x-auto wrapper for mobile responsiveness */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left min-w-[600px]">
                                        <thead className="bg-slate-50 border-b border-gray-100">
                                            <tr>
                                                <th className="p-4 md:p-6 font-semibold text-slate-700 text-sm md:text-base">Type</th>
                                                <th className="p-4 md:p-6 font-semibold text-slate-700 text-sm md:text-base">Area (sq.ft)</th>
                                                <th className="p-4 md:p-6 font-semibold text-slate-700 text-sm md:text-base">Basic Price</th>
                                                <th className="p-4 md:p-6 font-semibold text-slate-700 text-right text-sm md:text-base">Total Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                { type: "3 BHK", area: "1850", price: "8,100 / sq.ft", total: "1.50 Cr*" },
                                                { type: "3 BHK Large", area: "2050", price: "8,200 / sq.ft", total: "1.68 Cr*" },
                                                { type: "4 BHK", area: "2450", price: "8,500 / sq.ft", total: "2.20 Cr*" },
                                            ].map((row, i) => (
                                                <tr key={i}>
                                                    <td className="p-4 md:p-6 font-bold text-slate-900 text-sm md:text-base">{row.type}</td>
                                                    <td className="p-4 md:p-6 text-slate-600 text-sm md:text-base">{row.area}</td>
                                                    <td className="p-4 md:p-6 text-slate-600 text-sm md:text-base">₹ {row.price}</td>
                                                    <td className="p-4 md:p-6 text-right font-bold text-slate-900 text-sm md:text-base">₹ {row.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-4 md:p-6 bg-blue-50 text-xs md:text-sm text-blue-800">
                                    *Prices are subject to change without prior notice. GST and other statutory charges applicable.
                                </div>
                            </div>

                            {/* Payment Plan */}
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Payment Plan</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {[
                                    { title: "On Booking", percent: "10%", desc: "Payable within 30 days of booking.", color: "blue" },
                                    { title: "On Agreement", percent: "10%", desc: "Within 45 days of booking.", color: "blue" },
                                    { title: "During Construction", percent: "50%", desc: "In 4 equal installments linked to construction milestones.", color: "blue" },
                                    { title: "On Possession", percent: "30%", desc: "At time of handover.", color: "green" },
                                ].map((step, i) => (
                                    <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition">
                                        <div className="flex justify-between items-center mb-3 md:mb-4">
                                            <h4 className="font-bold text-sm md:text-base text-slate-900">{step.title}</h4>
                                            <span className={`bg-${step.color}-100 text-${step.color}-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold`}>{step.percent}</span>
                                        </div>
                                        <p className="text-gray-500 text-xs md:text-sm leading-snug">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* LOCATION TAB */}
                    {activeTab === 'location' && (
                        <motion.div key="location" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Location & Connectivity</h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Mock Map */}
                                    <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm border border-gray-300 group">
                                        <img src="https://picsum.photos/seed/mapview/1200/600" alt="Map" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl flex items-center gap-2 font-bold text-slate-800 text-sm md:text-base animate-bounce">
                                                <FiMapPin /> Project Location
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 md:px-4 md:py-2 rounded-lg shadow text-xs md:text-sm font-semibold cursor-pointer hover:bg-white transition">
                                            Open in Google Maps
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                        {project.locationHighlights.map((highlight, index) => (
                                            <div key={index} className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2 text-sm">
                                                    <FiMapPin />
                                                </div>
                                                <span className="text-xs md:text-sm font-semibold text-slate-700 leading-tight">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h3 className="font-bold text-lg mb-4 text-slate-900">Neighborhood</h3>
                                        <ul className="space-y-3 md:space-y-4">
                                            {[
                                                { dist: "2.5 km", place: "Phoenix Marketcity" },
                                                { dist: "1.2 km", place: "Vydehi Hospital" },
                                                { dist: "3.0 km", place: "Whitefield Metro" },
                                                { dist: "0.5 km", place: "The International School" }
                                            ].map((loc, i) => (
                                                <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0">
                                                    <span className="text-slate-600 text-sm md:text-base font-medium">{loc.place}</span>
                                                    <span className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded">{loc.dist}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-6 rounded-2xl text-white shadow-lg">
                                        <h3 className="font-bold text-base md:text-lg mb-2">Need a Site Visit?</h3>
                                        <p className="text-slate-300 text-xs md:text-sm mb-4">Schedule a visit to our experience center today.</p>
                                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition text-sm md:text-base">
                                            Schedule Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Footer CTA Section */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">Interested in {project.title}?</h2>
                    <p className="text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">Connect with our sales team to get exclusive price list, floor plans, and site visit appointments.</p>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* Call Button */}
    <a 
        href="tel:+917569588477"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-8 rounded-full transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 text-sm md:text-base"
    >
        <FiPhone /> Request Call Back
    </a>

    {/* Email Button */}
    <a 
        href="mailto:info@heavenhillspropertys.com"
        className="bg-white border-2 border-slate-200 text-slate-800 hover:border-blue-600 hover:text-blue-600 font-bold py-3 md:py-4 px-8 rounded-full transition flex items-center justify-center gap-2 text-sm md:text-base"
    >
        <FiMail /> Email Us
    </a>
</div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;