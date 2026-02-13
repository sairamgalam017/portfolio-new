
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0' }}>
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
                        margin: '0 auto',
                        textAlign: 'center',
                        background: 'var(--bg-card)',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '1px solid var(--border-color)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Subtle background glow */}
                        <div style={{ position: 'absolute', top: -50, left: -50, width: 100, height: 100, background: 'var(--primary)', filter: 'blur(80px)', opacity: 0.2 }}></div>
                        <div style={{ position: 'absolute', bottom: -50, right: -50, width: 100, height: 100, background: 'var(--secondary)', filter: 'blur(80px)', opacity: 0.2 }}></div>

                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I am an Electrical and Electronics Engineering student with a strong passion for IoT and embedded systems.
                            My journey involves working on innovative projects like smart energy meters and agricultural systems.
                            I enjoy solving complex problems and turning ideas into reality using modern technologies.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Date of Birth:</span> 21/07/2005 <br />
                            <span style={{ display: 'block', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                When I'm not studying, you can find me exploring new tech trends, working on robotics, or learning new skills.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
