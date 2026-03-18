import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Zap, Cpu } from 'lucide-react';

const Hero = () => {
    // Mouse Parallax logic
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll Parallax logic
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const textY = useTransform(scrollY, [0, 1000], ['0%', '15%']);

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '8rem 0 4rem 0',
            perspective: '1000px'
        }}>
            {/* Background Grid with Scroll & Mouse Parallax - PCB Theme */}
            <motion.div style={{
                position: 'absolute',
                top: '-20%', left: '-20%', right: '-20%', bottom: '-20%',
                backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.05) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                zIndex: 0,
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 40%, transparent 80%)',
                y: bgY,
                x: mousePos.x * -20,
                transform: `translateY(${mousePos.y * -20}px) translateZ(-100px)`,
                transition: 'transform 0.1s ease-out, x 0.1s ease-out',
                willChange: 'transform'
            }} />

            {/* Electrical Pulse Animations */}
            <motion.div
                animate={{ x: ['-20vw', '100vw'] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 5 }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: 0,
                    width: '300px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00FF41, #00FF41, transparent)',
                    boxShadow: '0 0 20px #00FF41, 0 0 10px #00FF41',
                    zIndex: 0
                }}
            />
            <motion.div
                animate={{ y: ['-20vh', '100vh'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 4 }}
                style={{
                    position: 'absolute',
                    left: '80%',
                    top: 0,
                    width: '2px',
                    height: '300px',
                    background: 'linear-gradient(180deg, transparent, #00FF41, #00FF41, transparent)',
                    boxShadow: '0 0 20px #00FF41, 0 0 10px #00FF41',
                    zIndex: 0
                }}
            />

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'clamp(2rem, 5vw, 4rem)',
                zIndex: 10,
                position: 'relative',
                flexWrap: 'wrap-reverse'
            }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        flex: '1 1 500px',
                        textAlign: 'left',
                        y: textY,
                        x: mousePos.x * 10,
                        transform: `translateY(${mousePos.y * 10}px)`,
                        transition: 'transform 0.1s ease-out, x 0.1s ease-out',
                        willChange: 'transform'
                    }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: 'rgba(57, 255, 20, 0.05)', borderRadius: '4px', marginBottom: '1.5rem', border: '1px solid var(--border-color)', backdropFilter: 'blur(4px)' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary-glow)' }}></span>
                        <span style={{ color: 'var(--primary)', fontFamily: '"Share Tech Mono", monospace', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.05em' }}>SYS.STATUS: ONLINE</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '700',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        color: '#ffffff',
                        textShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
                    }}>
                        Galam Sairam
                    </h1>

                    <h3 style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>Electrical Engineer</span>
                        <span style={{ color: 'var(--text-muted)' }}>//</span>
                        <span style={{ color: 'var(--secondary)', textShadow: '0 0 10px var(--secondary-glow)' }}>IoT Enthusiast</span>
                    </h3>

                    <p style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        marginBottom: '2.5rem',
                        borderLeft: '2px solid #00FF41',
                        paddingLeft: '1.5rem',
                        background: 'linear-gradient(90deg, rgba(0,255,65,0.05), transparent)',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        fontFamily: '"JetBrains Mono", monospace'
                    }}>
                        Crafting <span style={{ color: '#00FF41', textShadow: '0 0 8px #00FF41' }}>intelligent hardware systems</span> and high-precision <span style={{ color: '#00FF41', textShadow: '0 0 8px #00FF41' }}>IoT devices</span>.
                        Engineering the future of <span style={{ color: '#00FF41', textShadow: '0 0 8px #00FF41' }}>connected embedded technology</span> from silicon to software.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            style={{
                                background: 'rgba(57, 255, 20, 0.1)',
                                color: 'var(--primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '8px',
                                fontWeight: '500',
                                fontFamily: '"Share Tech Mono", monospace',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: '1px solid rgba(57, 255, 20, 0.4)',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(5px)',
                                textTransform: 'uppercase'
                            }}
                            whileHover={{ backgroundColor: 'rgba(57, 255, 20, 0.2)', boxShadow: '0 0 25px var(--primary-glow)', y: -2 }}
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '8px',
                                fontWeight: '500',
                                fontFamily: '"Share Tech Mono", monospace',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(5px)',
                                textTransform: 'uppercase'
                            }}
                            whileHover={{ borderColor: 'var(--secondary)', color: '#fff', boxShadow: '0 0 20px var(--secondary-glow)', y: -2 }}
                        >
                            Contact Me <Mail size={18} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [-8, 8, -8]
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: { duration: 7, ease: "easeInOut", repeat: Infinity }
                    }}
                    style={{
                        flex: '1 1 300px',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        x: mousePos.x * -8,
                        transform: `translateY(${mousePos.y * -8}px)`,
                        transition: 'transform 0.1s ease-out, x 0.1s ease-out',
                        willChange: 'transform'
                    }}
                >
                    <div style={{ position: 'relative', width: '100%', maxWidth: '350px', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* External Copper Traces connecting to grid */}
                        <div style={{ position: 'absolute', top: '50%', left: '-50px', width: '50px', height: '2px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)' }}></div>
                        <div style={{ position: 'absolute', top: '30%', left: '-30px', width: '30px', height: '1px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)', opacity: 0.5 }}></div>
                        <div style={{ position: 'absolute', top: '70%', left: '-30px', width: '30px', height: '1px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)', opacity: 0.5 }}></div>

                        <div style={{ position: 'absolute', top: '50%', right: '-50px', width: '50px', height: '2px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)' }}></div>
                        <div style={{ position: 'absolute', top: '30%', right: '-30px', width: '30px', height: '1px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)', opacity: 0.5 }}></div>
                        <div style={{ position: 'absolute', top: '70%', right: '-30px', width: '30px', height: '1px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)', opacity: 0.5 }}></div>

                        <div style={{ position: 'absolute', left: '50%', top: '-50px', width: '2px', height: '50px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)' }}></div>
                        <div style={{ position: 'absolute', left: '50%', bottom: '-50px', width: '2px', height: '50px', background: 'var(--primary)', boxShadow: '0 0 5px var(--primary)' }}></div>

                        {/* High-Precision IC Package Frame */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '1px solid #00FF41',
                            clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'rgba(0, 255, 65, 0.05)',
                            boxShadow: 'inset 0 0 30px rgba(0, 255, 65, 0.2)'
                        }}>
                        </div>

                        {/* Image Container with IC Octagonal Shape */}
                        <motion.div
                            whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 30px #00FF41)' }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: '85%',
                                height: '85%',
                                background: 'var(--bg-card)',
                                position: 'relative',
                                zIndex: 2,
                                padding: '8px',
                                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                                border: '1px solid var(--border-color)',
                                backdropFilter: 'blur(10px)'
                            }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: '#000',
                                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src="/profile.jpg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Galam+Sairam&background=050a05&color=00FF41&size=512"; }}
                                    alt="Galam Sairam"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, filter: 'contrast(1.2) brightness(0.9) grayscale(20%) hue-rotate(90deg)' }}
                                />
                            </div>
                        </motion.div>

                        {/* Floating Tech Icons - PCB vibe */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ position: 'absolute', top: '5%', right: '-5%', background: 'var(--bg-card)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--primary)', zIndex: 3, backdropFilter: 'blur(5px)' }}
                        >
                            <Zap size={20} color="var(--primary)" strokeWidth={2} />
                        </motion.div>

                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                            style={{ position: 'absolute', bottom: '10%', left: '-5%', background: 'var(--bg-card)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--secondary)', zIndex: 3, backdropFilter: 'blur(5px)' }}
                        >
                            <Cpu size={20} color="var(--secondary)" strokeWidth={2} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
