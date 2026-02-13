import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Zap, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '8rem 0 4rem 0'
        }}>
            {/* Background Grid */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0,
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }} />

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                zIndex: 10,
                position: 'relative',
                flexWrap: 'wrap-reverse'
            }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ flex: '1 1 500px', textAlign: 'left' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '20px', marginBottom: '1.5rem', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                        <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.05em' }}>AVAILABLE FOR WORK</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Galam Sairam
                    </h1>

                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{ color: 'var(--primary)' }}>Electrical Engineer</span>
                        <span style={{ height: '2px', width: '20px', background: 'var(--border-color)' }}></span>
                        <span style={{ color: 'var(--secondary)' }}>IoT Enthusiast</span>
                    </h3>

                    <p style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.8',
                        marginBottom: '2.5rem'
                    }}>
                        Crafting intelligent systems at the intersection of power engineering and digital technology.
                        Building the future of connected devices with precision and innovation.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="button-primary"
                            style={{
                                background: 'var(--primary)',
                                color: '#000',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: 'none',
                                clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' // Tech shape
                            }}
                        >
                            View Projects <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)'
                            }}
                        >
                            Contact Me <Mail size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
                >
                    <div style={{ position: 'relative', width: '400px', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Abstract Tech Shapes behind */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '2px solid rgba(6, 182, 212, 0.3)',
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            animation: 'spin 20s linear infinite'
                        }} />
                        <div style={{
                            position: 'absolute',
                            width: '110%',
                            height: '110%',
                            border: '1px dashed rgba(139, 92, 246, 0.3)',
                            borderRadius: '50%',
                            animation: 'spin-reverse 30s linear infinite'
                        }} />

                        {/* Image Container */}
                        <div style={{
                            width: '320px',
                            height: '380px',
                            background: 'var(--bg-card)',
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon
                            position: 'relative',
                            zIndex: 2,
                            padding: '10px', // inner border spacing
                            background: 'linear-gradient(to bottom right, var(--primary), var(--secondary))'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                background: '#000'
                            }}>
                                <img
                                    src="/profile.jpg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Galam+Sairam&background=0D8ABC&color=fff&size=512"; }}
                                    alt="Galam Sairam"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                                />
                            </div>
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ position: 'absolute', top: '10%', right: '-5%', background: 'var(--bg-dark)', padding: '1rem', borderRadius: '50%', border: '1px solid var(--primary)', zIndex: 3, boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                        >
                            <Zap size={24} color="var(--primary)" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            style={{ position: 'absolute', bottom: '15%', left: '-5%', background: 'var(--bg-dark)', padding: '1rem', borderRadius: '50%', border: '1px solid var(--secondary)', zIndex: 3, boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)' }}
                        >
                            <Cpu size={24} color="var(--secondary)" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
