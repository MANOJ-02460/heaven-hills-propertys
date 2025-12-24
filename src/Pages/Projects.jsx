import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { projectsData } from './data/ProjectsData';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setLoading(false);
    }, 1000);
  }, []);
  
   useEffect(()=>{
     window.scrollTo(0, 0);
     document.title="Projects | Heaven Hills Properties";
  },[])

  useEffect(() => {
    let result = projects;
    if (activeFilter !== 'All') {
      result = result.filter(p => p.category === activeFilter);
    }
    if (searchTerm) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProjects(result);
  }, [activeFilter, searchTerm, projects]);

  // --- Dynamic Functions for Search and Filters ---

  // Function to clear the search input
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  // Function to reset all filters to their default state
  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveFilter('All');
  };

  // Helper to check if any filters are active, to show the reset button
  const hasActiveFilters = searchTerm || activeFilter !== 'All';


  const ProjectCard = ({ property }) => (
    <div className="group bg-white rounded-3xl shadow-sm border border-blue-50 hover:shadow-blue-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      <Link to={`/projects/${property.id}`}>
      <div className="relative overflow-hidden bg-gray-200" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
          {property.badge}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-slate-400 text-sm mb-2">
          <span className="mr-2 text-blue-500">📍</span> {property.location}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{property.title}</h3>
        <div className="w-full h-px bg-blue-50 my-4"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">Starting From</p>
            <p className="text-xl font-bold text-slate-900">{property.price}</p>
          </div>
          <div  className="w-10 h-10 rounded-full bg-blue-50 text-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
            <span>→</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white overflow-hidden relative ">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">All Properties</h3>
          <p className="mt-3  text-slate-600">Explore our complete range of premium properties.</p>
        </div>

        {/* --- DYNAMIC SEARCH AND FILTER BAR --- */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* --- SEARCH INPUT --- */}
            <div className="relative w-full md:flex-1">
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-4 rounded-lg border border-blue-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              
              {/* Clear Button (appears only when typing) */}
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* --- FILTER BUTTONS --- */}
            <div className="flex gap-2 flex-wrap justify-center md:justify-start" role="group" aria-label="Property categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-slate-700 border-blue-200 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* --- RESET FILTERS BUTTON (appears only if a filter is active) --- */}
          {hasActiveFilters && (
            <div className="mt-4 text-center">
              <button
                onClick={handleResetFilters}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* --- PROJECTS GRID --- */}
        <motion.div initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-3xl mb-4" style={{ aspectRatio: '16 / 9' }}></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            <>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((property) => <ProjectCard key={property.id} property={property} />)
              ) : (
                <p className="col-span-full text-center text-slate-500 text-lg">No properties found matching your criteria.</p>
              )}
            </>
          )}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;