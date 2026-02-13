import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Resume />
            <Contact />
          </main>

          <footer style={{
            padding: '3rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'var(--text-secondary)'
          }}>
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/sairam-galam-b2766039b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Linkedin size={20} /></a>
                <a href="https://www.instagram.com/sairam_galam_017/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Instagram size={20} /></a>
                <a href="https://x.com/@saira74438" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Twitter size={20} /></a>
              </div>
              <p>© {new Date().getFullYear()} Galam Sairam. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}

export default App;
