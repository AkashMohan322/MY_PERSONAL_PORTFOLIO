import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted text-sm">
          © {new Date().getFullYear()} Akash Mohan. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/AkashMohan322" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/akash-mohan-a12b78275" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
