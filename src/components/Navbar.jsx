import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            background: scrolled || isOpen ? 'rgba(35, 39, 47, 0.92)' : 'transparent',
            backdropFilter: scrolled || isOpen ? 'blur(16px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
            transition: 'all 0.3s ease',
            padding: scrolled ? '0.75rem 0' : '1.25rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'opacity 0.2s',
                }}>
                    <span style={{ color: 'var(--primary)' }}>G</span>alam Sairam
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                padding: '0.5rem 0.9rem',
                                borderRadius: '9999px',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mobile-toggle"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        borderRadius: '50%',
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            overflow: 'hidden',
                            borderTop: '1px solid var(--border-color)',
                            background: 'rgba(35, 39, 47, 0.98)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 0', gap: '0.25rem' }}>
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        fontSize: '1.05rem',
                                        color: 'var(--text-secondary)',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '0.75rem',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255,255,255,0.04)';
                                        e.target.style.color = 'var(--text-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
