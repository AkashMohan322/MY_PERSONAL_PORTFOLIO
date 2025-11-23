import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted max-w-2xl mx-auto">
            If you're hiring or think I’d be a great fit for your team, I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-accent text-xl shrink-0">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-1">Email</h4>
                    <a href="mailto:mohanakash322@gmail.com" className="text-muted hover:text-accent transition-colors">
                      mohanakash322@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-accent text-xl shrink-0">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-1">Phone</h4>
                    <a href="tel:+918593015734" className="text-muted hover:text-accent transition-colors">
                      +91 8593015734
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-accent text-xl shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-1">Location</h4>
                    <p className="text-muted">Kayamkulam, Alappuzha, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/AkashMohan322" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all duration-300">
                  <FiGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/akash-mohan-a12b78275" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all duration-300">
                  <FiLinkedin className="text-xl" />
                </a>
                <a href="https://www.instagram.com/h_ear_t__h_acke_r" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all duration-300">
                  <FiInstagram className="text-xl" />
                </a>
              </div>
            </div>

            <div className="bg-linear-to-r from-accent to-blue-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Let's work together!</h3>
              <p className="text-white/90">
                I’m currently seeking full-time opportunities. If you think I’d be a good fit for your team, feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary/30 p-8 rounded-2xl border border-white/5"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none transition-colors"
                  placeholder="Reason for Contact"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-sky-400 hover:bg-sky-500 text-white font-medium py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Message
                <FiSend className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
