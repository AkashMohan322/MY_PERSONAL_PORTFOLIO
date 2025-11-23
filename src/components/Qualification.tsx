import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuGraduationCap, LuBriefcase, LuCalendar } from 'react-icons/lu';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');

  const educationData = [
  {
      title: 'B.TECH in Computer Science',
      subtitle: 'APJ Abdul Kalam Technological University',
      date: '2023',
    },
    {
      title: 'Higher Secondary',
      subtitle: 'KV Sanskrit HSS, Muthukulam',
      date: '2018',
    },
    {
      title: 'SSLC',
      subtitle: 'Janasakthi Public School, Velanchira',
      date: '2016',
    },
    
    
  ];

  const experienceData = [
  {
      title: 'Full Stack Developer',
      subtitle: 'Taphubs Global IT Solutions & Services Pvt Ltd.',
      date: '2025 - Present',
    },
  {
      title: 'Internship - Python Django',
      subtitle: 'Zoople Technologies - Kochi',
      date: '2025',
    },
    {
      title: 'Internship - MEA(R)N Stack',
      subtitle: 'Luminar Technolab - Kochi',
      date: '2023 - 2024',
    },
  ];

  const data = activeTab === 'education' ? educationData : experienceData;

  return (
    <section id="qualification" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qualification</h2>
          <p className="text-muted">My personal journey</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 text-xl font-medium transition-colors duration-300 ${
              activeTab === 'education' ? 'text-accent' : 'text-muted hover:text-text'
            }`}
          >
            <LuGraduationCap className="text-2xl" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 text-xl font-medium transition-colors duration-300 ${
              activeTab === 'experience' ? 'text-accent' : 'text-muted hover:text-text'
            }`}
          >
            <LuBriefcase className="text-2xl" />
            Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-muted md:-translate-x-1/2"></div>

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start md:items-center gap-8 md:gap-0 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-[11px] h-[11px] bg-accent rounded-full translate-x-[13.5px] md:-translate-x-[5.5px] z-10 mt-1.5 md:mt-0"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}>
                      <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                      <span className="block text-sm text-muted mb-2">{item.subtitle}</span>
                      <div className={`flex items-center gap-2 text-sm text-muted ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <LuCalendar />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
