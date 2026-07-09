import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" style={{
            padding: 'var(--spacing-section) 0',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle gradient background */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(20, 158, 202, 0.04) 0%, rgba(167, 139, 250, 0.04) 100%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Resume</h2>
                    <p style={{
                        maxWidth: '500px',
                        margin: '0 auto 2rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                    }}>
                        Interested in learning more about my experience and skills?
                        Download my full resume to get all the details.
                    </p>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.03, boxShadow: '0 6px 25px rgba(20, 158, 202, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--primary)',
                            color: '#ffffff',
                            padding: '0.9rem 2.2rem',
                            borderRadius: '9999px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: 'none',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <Download size={20} /> Download CV
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
