import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, 
  SiGit, SiFigma, SiPython, SiDjango, SiMongodb, SiPostgresql, 
  SiExpress, SiHtml5, SiCss3, SiRedux, SiPostman, SiTypescript, SiBootstrap, SiMui,
  SiGithub,
  SiNetlify,

} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>('Frontend');

  const categories: (keyof typeof skillsData)[] = ['Frontend', 'Backend', 'Database', 'Tools'];

  const skillsData = {
    Frontend: [
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-[#563D7C]" /> },
      { name: 'Material UI', icon: <SiMui className="text-[#007FFF]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
    ],
    Backend: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-[#]" /> },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
      { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
    ],
    Database: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
    Tools: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'Github', icon: <SiGithub className="text-[#]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-[#]" /> },
      { name: 'VSCode', icon: <VscVscode className="text-[#007ACC]" /> },
    ],
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My technical proficiency across various domains.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? 'bg-accent text-primary shadow-lg scale-105'
                  : 'bg-secondary text-muted hover:text-text hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-secondary/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-secondary transition-colors border border-white/5 group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-muted">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
