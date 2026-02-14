import React from 'react';
import { motion } from 'framer-motion';
import TechElement from './TechElement';

const education = [
    {
        institution: 'Andhra Loyola Institute of Engineering and Technology',
        degree: 'B.Tech in Electrical and Electronics Engineering (EEE)',
        year: '2024 - 2027',
        grade: 'Pursuing'
    },
    {
        institution: 'Usharama College of Engineering and Technology',
        degree: 'Diploma in Electrical and Electronics Engineering',
        year: '2021 - 2024',
        grade: 'Top 1 in all 3 years'
    },
    {
        institution: 'Z.P.H. SCHOOL, NIDAMANURU',
        degree: 'SSC',
        year: 'Completed',
        grade: 'Satisfactory'
    }
];

const Education = () => {
    return (
        <section id="education" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div style={{ position: 'relative', paddingLeft: 'clamp(1rem, 5vw, 2rem)', borderLeft: '2px solid var(--border-color)' }}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="card"
                                style={{ padding: 'clamp(1rem, 3vw, 2rem)', marginBottom: '2rem', position: 'relative', background: 'var(--bg-card)', borderLeft: '4px solid var(--primary)' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '-2.6rem', // align with vertical line
                                    width: '1rem',
                                    height: '1rem',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    border: '2px solid var(--bg-dark)'
                                }} ></div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{edu.institution}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{edu.degree}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span>{edu.year}</span>
                                    <span>{edu.grade}</span>
                                </div>
                                {(edu.degree.includes('EEE') || edu.degree.includes('Electrical')) && (
                                    <div style={{ marginTop: '1rem', width: '100%' }}>
                                        <TechElement />
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Industrial Visits</h3>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="card"
                            style={{ padding: '2rem', marginBottom: '2rem', position: 'relative', background: 'var(--bg-card)', borderLeft: '4px solid var(--secondary)' }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                left: '-2.6rem', // align with vertical line
                                width: '1rem',
                                height: '1rem',
                                background: 'var(--secondary)',
                                borderRadius: '50%',
                                border: '2px solid var(--bg-dark)'
                            }} ></div>

                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Jocil Limited</h4>
                            <p style={{ color: 'var(--secondary)', marginBottom: '1rem', fontWeight: '500' }}>Dokiparru, Guntur</p>
                            <div style={{ width: '100%', height: '250px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                                <img
                                    src="/industrial-visit.jpeg"
                                    alt="Jocil Limited Visit"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1565452396328-912557438139?auto=format&fit=crop&q=80&w=1000";
                                    }}
                                />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Observed the fractionation and distillation processes in fatty acid production. Gained insights into the captive biomass cogeneration power plant operations and electrical distribution systems within the industry.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
