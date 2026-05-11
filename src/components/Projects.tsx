import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi';
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Trekker's Travels",
      description: 'Travel booking platform with secure authentication, tour listings, and booking functionality.',
      tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
      github: '#',
      demo: '#',
      image: project1
    },
    {
      title: 'DrOnCall',
      description: 'Doctor appointment booking platform enabling online scheduling and doctor-patient connection.',
      tags: ['MongoDB', 'Express.js', 'Real-time'],
      github: '#',
      demo: '#',
      image: project2
    },
    {
      title: 'E-CART',
      description: 'Full-featured e-commerce app with Redux state management and payment integration.',
      tags: ['React', 'Redux', 'MDBootstrap'],
      github: '#',
      demo: '#',
      image: project3
    },
    {
      title: 'EMS',
      description: 'Employee Management System for CRUD operations on employee records.',
      tags: ['React', 'Express.js', 'MongoDB'],
      github: '#',
      demo: '#',
      image: project4
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, projects.length]);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {/* Outlined Number */}
                <div 
                  className="text-8xl md:text-9xl font-bold text-transparent mb-6 font-heading opacity-50 [-webkit-text-stroke:2px_var(--color-text)]" 
                >
                  {(currentIndex + 1).toString().padStart(2, '0')}
                </div>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-text">
                  {projects[currentIndex].title}
                </h3>
                
                {/* Description */}
                <p className="text-muted text-lg mb-8 leading-relaxed max-w-lg">
                  {projects[currentIndex].description}
                </p>
                
                {/* Tags */}
                <div className="text-accent text-lg mb-8 font-medium">
                  {projects[currentIndex].tags.join(', ')}
                </div>

                <hr className="border-muted/30 mb-8 w-full max-w-md" />

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={projects[currentIndex].demo}
                    title='Live Demo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-14 h-14 rounded-full bg-secondary hover:bg-muted/20 flex items-center justify-center text-text transition-colors border border-muted/20"
                    aria-label="View Live Demo"
                  >
                    <FiArrowUpRight size={24} />
                  </a>
                  <a
                    href={projects[currentIndex].github}
                    title='Source Code'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-14 h-14 rounded-full bg-secondary hover:bg-muted/20 flex items-center justify-center text-text transition-colors border border-muted/20"
                    aria-label="View Source Code"
                  >
                    <FiGithub size={24} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl bg-secondary p-4 h-[350px] md:h-[450px] lg:h-[500px] w-full border border-white/5 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-14 h-14 flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-md"
                aria-label="Previous Project"
              >
                <FiChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-md"
                aria-label="Next Project"
              >
                <FiChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;