import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '8rem 0 4rem 0',
        }}>
            {/* Subtle gradient background washes */}
            <div style={{
                position: 'absolute',
                top: '-30%',
                left: '-10%',
                width: '50%',
                height: '80%',
                background: 'radial-gradient(ellipse, rgba(20, 158, 202, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '50%',
                height: '80%',
                background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'clamp(2rem, 5vw, 5rem)',
                zIndex: 10,
                position: 'relative',
                flexWrap: 'wrap-reverse'
            }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{
                        flex: '1 1 500px',
                        textAlign: 'left',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1rem',
                            background: 'rgba(20, 158, 202, 0.08)',
                            borderRadius: '9999px',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(20, 158, 202, 0.15)',
                        }}
                    >
                        <span style={{
                            width: '7px',
                            height: '7px',
                            background: 'var(--accent-green)',
                            borderRadius: '50%',
                        }}></span>
                        <span style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                        }}>
                            Available for opportunities
                        </span>
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
                        <span className="gradient-text">Galam Sairam</span>
                    </h1>

                    <h3 style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        letterSpacing: '-0.01em',
                    }}>
                        <span style={{ color: 'var(--primary)' }}>Electrical Engineer</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8em' }}>·</span>
                        <span style={{ color: 'var(--secondary)' }}>IoT Enthusiast</span>
                    </h3>

                    <p style={{
                        maxWidth: '550px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        marginBottom: '2.5rem',
                    }}>
                        Crafting <span style={{ color: 'var(--primary)', fontWeight: 600 }}>intelligent hardware systems</span> and
                        high-precision <span style={{ color: 'var(--primary)', fontWeight: 600 }}>IoT devices</span>.
                        Engineering the future of <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>connected embedded technology</span> from silicon to software.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            style={{
                                background: 'var(--primary)',
                                color: '#ffffff',
                                padding: '0.85rem 2rem',
                                borderRadius: '9999px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.2s ease',
                                border: 'none',
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(20, 158, 202, 0.35)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Projects <ArrowRight size={16} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--border-hover)',
                                color: 'var(--text-primary)',
                                padding: '0.85rem 2rem',
                                borderRadius: '9999px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.2s ease',
                            }}
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Me <Mail size={16} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        flex: '1 1 300px',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <motion.div
                        animate={{ y: [-6, 6, -6] }}
                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                        style={{ position: 'relative' }}
                    >
                        {/* Gradient ring behind image */}
                        <div style={{
                            position: 'absolute',
                            inset: '-8px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #149eca, #a78bfa, #f472b6)',
                            opacity: 0.6,
                            filter: 'blur(1px)',
                        }} />

                        {/* Image container */}
                        <div style={{
                            width: 'clamp(240px, 28vw, 320px)',
                            height: 'clamp(240px, 28vw, 320px)',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            position: 'relative',
                            border: '4px solid var(--bg-dark)',
                        }}>
                            <img
                                src="/profile.jpg"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Galam+Sairam&background=23272f&color=149eca&size=512"; }}
                                alt="Galam Sairam"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Floating decorative dots */}
                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                top: '8%',
                                right: '-5%',
                                width: '40px',
                                height: '40px',
                                background: 'var(--bg-card)',
                                borderRadius: '12px',
                                border: '1px solid var(--border-hover)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'var(--shadow-card)',
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>⚡</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [4, -4, 4] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: '-8%',
                                width: '40px',
                                height: '40px',
                                background: 'var(--bg-card)',
                                borderRadius: '12px',
                                border: '1px solid var(--border-hover)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'var(--shadow-card)',
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>🔧</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
