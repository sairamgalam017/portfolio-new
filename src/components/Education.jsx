import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Building, Briefcase } from 'lucide-react';
import TechElement from './TechElement';

const educationData = [
    {
        title: 'B.Tech in EEE',
        institution: 'Andhra Loyola Institute of Engineering and Technology',
        period: '2024 - 2027',
        grade: 'Pursuing',
        icon: <GraduationCap color="#64ffda" />,
        color: '#64ffda',
        hasTechElement: true
    },
    {
        title: 'Diploma in EEE',
        institution: 'Usharama College of Engineering and Technology',
        period: '2021 - 2024',
        grade: 'Top 1 in all 3 years',
        icon: <GraduationCap color="#f59e0b" />,
        color: '#f59e0b',
        hasTechElement: true
    },
    {
        title: 'SSC',
        institution: 'Z.P.H. SCHOOL, NIDAMANURU',
        period: 'Completed',
        grade: 'Satisfactory',
        icon: <GraduationCap color="#ec4899" />,
        color: '#ec4899',
        hasTechElement: false
    }
];

const experienceData = [
    {
        title: 'Industrial Visit',
        institution: 'Jocil Limited',
        period: 'Dokiparru, Guntur',
        description: 'Observed fractionation and distillation processes in fatty acid production.',
        icon: <Building color="#3b82f6" />,
        color: '#3b82f6',
        image: '/industrial-visit.jpeg'
    },
    {
        title: 'Internship Experience',
        institution: 'Internship',
        period: 'Recent',
        description: 'Gained practical experience in the field.',
        icon: <Briefcase color="#10b981" />,
        color: '#10b981',
        image: '/certificates/experience-certificate.jpeg'
    }
];

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="education" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {React.cloneElement(item.icon, { size: 48 })}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: item.color, marginBottom: '0.5rem', fontWeight: '500' }}>{item.institution}</p>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <p>{item.period}</p>
                                    <p>{item.grade}</p>
                                </div>
                                {item.hasTechElement && (
                                    <div style={{ marginTop: '1rem', width: '100%', minHeight: '150px' }}>
                                        <TechElement />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="section-title">Experience & Visits</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <div style={{ opacity: (hoveredIndex === index && item.image) ? 0 : 1, transition: 'opacity 0.3s' }}>
                                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        {React.cloneElement(item.icon, { size: 48 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: item.color, marginBottom: '0.5rem', fontWeight: '500' }}>{item.institution}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.period}</p>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                                </div>

                                <AnimatePresence>
                                    {item.image && hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: `url(${item.image}) center/cover no-repeat`,
                                                zIndex: 10
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                padding: '0.5rem',
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-end',
                                                height: '40%'
                                            }}>
                                                View Image
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
