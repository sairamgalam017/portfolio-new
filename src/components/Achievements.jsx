import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
    {
        title: 'Branch Topper',
        organization: 'Usharama College of Engineering and Technology',
        description: 'Branch topper at Usharama College of Engineering and Technology.',
        icon: <Trophy />,
        color: '#dba535',
        image: '/diploma.jpg'
    },
    {
        title: 'Innovathon Winner',
        organization: 'ALIET',
        description: 'Won 3rd prize for Advanced Energy Meter project.',
        icon: <Award />,
        color: '#149eca',
        image: '/innovathon-winner.jpg'
    },
    {
        title: 'NPTEL Qualified',
        organization: 'NPTEL',
        description: 'Qualified in Internet of Things (IoT) course.',
        icon: <Star />,
        color: '#f472b6',
        image: '/certificates/nptel.jpg'
    },
    {
        title: 'IoT Certificate',
        organization: 'Certification',
        description: 'Certified in Internet of Things technology.',
        icon: <Award />,
        color: '#44a87a',
        image: '/certificates/iot-certificate.pdf'
    },
    {
        title: 'Robotics',
        organization: 'Certification',
        description: 'Completed certification in Robotics.',
        icon: <Award />,
        color: '#a78bfa',
        image: '/certificates/robotics.jpeg'
    },
    {
        title: 'Solar PV System',
        organization: 'Certification',
        description: 'Certified in Solar Photovoltaic Systems.',
        icon: <Award />,
        color: '#dba535',
        image: '/certificates/solarpv.jpeg'
    },
    {
        title: 'MATLAB Onramp',
        organization: 'MathWorks',
        description: 'Completed the self-paced MATLAB Onramp training course.',
        icon: <Award />,
        color: '#149eca',
        image: '/certificates/matlab-onramp.pdf'
    },
    {
        title: 'Solar PV System Design',
        organization: 'SkillDzire',
        description: 'Completed an internship in Solar PV System Design with APSCHE.',
        icon: <Award />,
        color: '#44a87a',
        image: '/certificates/solar-pv-internship.pdf'
    },
    {
        title: 'EV Engineering Mastercourse',
        organization: 'DIYguru',
        description: 'Completed EV Engineering Mastercourse Part I: EV Fundamentals & Core Components (Grade A+).',
        icon: <Award />,
        color: '#f472b6',
        image: '/certificates/ev-engineering.pdf'
    }
];

const Achievements = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="achievements" style={{
            padding: 'var(--spacing-section) 0',
            borderTop: '1px solid var(--border-color)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Achievements</h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', marginTop: '-1.5rem' }}>
                        Awards, certifications, and academic recognitions.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'all 0.25s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    minHeight: '220px',
                                }}
                            >
                                <div style={{ opacity: (hoveredIndex === index && item.image) ? 0 : 1, transition: 'opacity 0.3s' }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: '0.75rem',
                                        background: `${item.color}15`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1rem', color: item.color,
                                    }}>
                                        {React.cloneElement(item.icon, { size: 22 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 700 }}>{item.title}</h3>
                                    <p style={{ color: item.color, marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.85rem' }}>{item.organization}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</p>
                                </div>

                                <AnimatePresence>
                                    {item.image && hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onClick={() => {
                                                if (item.image && !item.image.endsWith('.pdf')) {
                                                    window.open(item.image, '_blank');
                                                }
                                            }}
                                            style={{
                                                position: 'absolute', top: 0, left: 0,
                                                width: '100%', height: '100%',
                                                background: item.image.endsWith('.pdf') ? 'var(--bg-wash)' : `url(${item.image}) center/cover no-repeat`,
                                                zIndex: 10,
                                                display: 'flex', flexDirection: 'column',
                                                justifyContent: item.image.endsWith('.pdf') ? 'center' : 'flex-end',
                                                alignItems: 'center',
                                                cursor: item.image && !item.image.endsWith('.pdf') ? 'pointer' : 'auto',
                                                borderRadius: '1rem',
                                            }}
                                        >
                                            {item.image.endsWith('.pdf') ? (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                                                    <iframe src={`${item.image}#toolbar=0&navpanes=0&scrollbar=0`} title="Certificate Preview" style={{ width: '90%', height: '75%', border: 'none', borderRadius: '0.5rem', pointerEvents: 'none' }}></iframe>
                                                    <a
                                                        href={item.image}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            padding: '0.5rem 1.2rem',
                                                            background: 'var(--primary)',
                                                            color: '#fff',
                                                            fontSize: '0.8rem',
                                                            borderRadius: '9999px',
                                                            textDecoration: 'none',
                                                            fontWeight: 600,
                                                            pointerEvents: 'auto'
                                                        }}
                                                    >
                                                        View PDF
                                                    </a>
                                                </div>
                                            ) : (
                                                <div style={{
                                                    position: 'absolute', bottom: 0, left: 0,
                                                    width: '100%', padding: '1rem',
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                                                    color: 'white', fontSize: '0.85rem', fontWeight: 500,
                                                    display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                                                    height: '50%', borderRadius: '0 0 1rem 1rem',
                                                }}>
                                                    Tap to Open
                                                </div>
                                            )}
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

export default Achievements;
