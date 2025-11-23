import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';

const Projects = () => {
  const projects = [
    {
      title: "Trekker's Travels",
      description: 'Travel booking platform with secure authentication, tour listings, and booking functionality.',
      tags: ['React', 'Express.js', 'MongoDB', 'JWT'],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-white/5 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm h-20 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
