import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import './index.css';

// ScrollToTop component to ensure pages start at top
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <CustomCursor />
            <ScrollToTop />
            <AnimatePresence mode='wait'>
                {loading && <Preloader key="preloader" />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    className="App"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
                >
                    <Navbar />

                    <div style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project/:id" element={<ProjectDetails />} />
                        </Routes>
                    </div>

                    <footer style={{
                        padding: '2.5rem 0',
                        textAlign: 'center',
                        borderTop: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                    }}>
                        <div className="container">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginBottom: '1rem',
                            }}>
                                {[
                                    { icon: <Github size={18} />, href: 'https://github.com/sairamgalam017' },
                                    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/sairam-galam-b2766039b' },
                                    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/sairam_galam_017/' },
                                    { icon: <Twitter size={18} />, href: 'https://x.com/@saira74438' },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-muted)',
                                            background: 'rgba(255,255,255,0.04)',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = 'var(--primary)';
                                            e.currentTarget.style.background = 'rgba(20, 158, 202, 0.1)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                        }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                © {new Date().getFullYear()} Galam Sairam. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </motion.div>
            )}
        </Router>
    );
}

export default App;
