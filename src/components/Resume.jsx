import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Resume</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                        Interested in learning more about my experience and skills?
                        Download my full resume to get all the details.
                    </p>
                    <a href="/resume.pdf" download className="button-primary" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--primary)',
                        color: '#0f172a',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                    }}>
                        <Download size={24} /> Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
