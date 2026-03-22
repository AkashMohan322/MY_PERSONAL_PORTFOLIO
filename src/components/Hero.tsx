import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/images/profile.png';

const Hero = () => {
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-accent font-medium text-lg mb-4 tracking-wide uppercase">Hello, I'm</h2>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight flex gap-4 md:gap-6 flex-wrap"
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="text-text flex"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {"Akash".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 10
                        }
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>

              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 flex"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8 // 0.2 start + (5 chars * 0.1) + buffer
                    }
                  }
                }}
              >
                {"Mohan".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 10
                        }
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            <p className="text-muted text-xl max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
              Aspiring Full Stack Developer looking for a challenging role to apply my skills in real-world projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 md:mb-0">
              <div className="flex gap-4">
                <a href="#projects" className="btn btn-primary shadow-lg shadow-accent/25">
                  View Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
              
              <div className="flex gap-4 border-l border-gray-700 pl-6 hidden sm:flex">
                <a href="https://github.com/AkashMohan322" target='_blank' className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/akash-mohan-a12b78275" target='_blank' className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-2xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;