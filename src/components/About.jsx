
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-section) 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div style={{
                        maxWidth: '900px',
                        background: 'var(--bg-card)',
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        borderRadius: '1.25rem',
                        border: '1px solid var(--border-color)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-card)',
                    }}>
                        {/* Subtle gradient accents */}
                        <div style={{
                            position: 'absolute',
                            top: -80,
                            left: -80,
                            width: 180,
                            height: 180,
                            background: 'var(--primary)',
                            filter: 'blur(100px)',
                            opacity: 0.08,
                            pointerEvents: 'none',
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: -80,
                            right: -80,
                            width: 180,
                            height: 180,
                            background: 'var(--secondary)',
                            filter: 'blur(100px)',
                            opacity: 0.08,
                            pointerEvents: 'none',
                        }}></div>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.9',
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            position: 'relative',
                        }}>
                            I am an Electrical and Electronics Engineering student with a strong passion for IoT and embedded systems.
                            My journey involves working on innovative projects like smart energy meters and agricultural systems.
                            I enjoy solving complex problems and turning ideas into reality using modern technologies.
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            alignItems: 'center',
                            position: 'relative',
                        }}>
                            <div style={{
                                padding: '0.6rem 1.2rem',
                                background: 'rgba(20, 158, 202, 0.08)',
                                borderRadius: '9999px',
                                border: '1px solid rgba(20, 158, 202, 0.15)',
                                fontSize: '0.9rem',
                                color: 'var(--primary)',
                                fontWeight: 500,
                            }}>
                                📅 Born: 21/07/2005
                            </div>
                            <div style={{
                                padding: '0.6rem 1.2rem',
                                background: 'rgba(167, 139, 250, 0.08)',
                                borderRadius: '9999px',
                                border: '1px solid rgba(167, 139, 250, 0.15)',
                                fontSize: '0.9rem',
                                color: 'var(--secondary)',
                                fontWeight: 500,
                            }}>
                                📍 Vijayawada, India
                            </div>
                        </div>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: '1.8',
                            color: 'var(--text-muted)',
                            marginTop: '1.5rem',
                            position: 'relative',
                        }}>
                            When I'm not studying, you can find me exploring new tech trends, working on robotics, or learning new skills.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
