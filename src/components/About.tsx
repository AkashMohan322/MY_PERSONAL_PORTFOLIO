import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/10">
              {/* Terminal Header */}
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">Developer.tsx</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed animate-pulse">
                <div className="flex gap-2">
                  <span className="text-pink-500">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{'{'}</span>
                </div>
                <div className="pl-4">
                  <div className="flex gap-2">
                    <span className="text-blue-300">name:</span>
                    <span className="text-green-400">'Akash Mohan'</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-300">role:</span>
                    <span className="text-green-400">'Full Stack Developer'</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-300">skills:</span>
                    <span className="text-yellow-300">['React', 'Node.js', 'Python']</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-300">hardWorker:</span>
                    <span className="text-pink-500">true</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-300">problemSolver:</span>
                    <span className="text-pink-500">true</span>,
                  </div>
                </div>
                <div className="text-yellow-300">{'}'};</div>
              </div>
            </div>
            
            {/* Decorative Background Element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-accent/20 rounded-xl"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-accent font-medium mb-4">
              <span className="w-10 h-0.5 bg-accent"></span>
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Transforming ideas into <span className="text-accent">digital reality</span>
            </h2>
            
            <p className="text-muted mb-6 leading-relaxed">
              Enthusiastic and detail-oriented Full Stack Developer with hands-on experience building scalable and
              responsive web applications using MongoDB, Express.js, React.js, Node.js, Python, and Django.
            </p>
            
            <p className="text-muted mb-8 leading-relaxed">
              Adept at developing RESTful APIs, integrating front-end and back-end components, and collaborating
              within Agile development teams. Seeking a challenging role to apply and expand my skills while
              contributing to innovative software solutions.
            </p>

            <button className="btn btn-primary flex items-center gap-2 group">
              Download CV
              <FiDownload className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
