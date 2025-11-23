
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Qualification from './components/Qualification';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualification />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
