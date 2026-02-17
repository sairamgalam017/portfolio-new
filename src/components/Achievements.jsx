import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
    {
        title: 'Diploma Topper',
        organization: 'Usharama College',
        description: 'Secured 1st rank in all 3 years of Diploma.',
        icon: <Trophy color="#f59e0b" />,
        image: '/diploma.jpg'
    },
    {
        title: 'Innovathon Winner',
        organization: 'ALIET',
        description: 'Won 3rd prize for Advanced Energy Meter project.',
        icon: <Award color="#3b82f6" />,
        image: '/innovathon-winner.jpg'
    },
    {
        title: 'NPTEL Qualified',
        organization: 'NPTEL',
        description: 'Qualified in Internet of Things (IoT) course.',
        icon: <Star color="#ec4899" />,
        image: '/certificates/nptel.jpg'
    },
    {
        title: 'IoT Certificate',
        organization: 'Certification',
        description: 'Certified in Internet of Things technology.',
        icon: <Award color="#10b981" />,
        image: '/certificates/iot-certificate.pdf'
    },
    {
        title: 'Robotics',
        organization: 'Certification',
        description: 'Completed certification in Robotics.',
        icon: <Award color="#8b5cf6" />,
        image: '/certificates/robotics.jpeg'
    },
    {
        title: 'Solar PV System',
        organization: 'Certification',
        description: 'Certified in Solar Photovoltaic Systems.',
        icon: <Award color="#f97316" />,
        image: '/certificates/solarpv.jpeg'
    }
];

const Achievements = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="achievements" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Achievements</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ opacity: (hoveredIndex === index && item.image) ? 0 : 1, transition: 'opacity 0.3s' }}>
                                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        {React.cloneElement(item.icon, { size: 48 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '500' }}>{item.organization}</p>
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
                                                background: item.image.endsWith('.pdf') ? '#fff' : `url(${item.image}) center/cover no-repeat`,
                                                zIndex: 10,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: item.image.endsWith('.pdf') ? 'center' : 'flex-end',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {item.image.endsWith('.pdf') ? (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                    <iframe src={`${item.image}#toolbar=0&navpanes=0&scrollbar=0`} title="Certificate Preview" style={{ width: '100%', height: '80%', border: 'none', pointerEvents: 'none' }}></iframe>
                                                    <a
                                                        href={item.image}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            marginTop: '0.5rem',
                                                            padding: '0.4rem 0.8rem',
                                                            background: 'var(--primary)',
                                                            color: 'var(--bg-dark)',
                                                            fontSize: '0.8rem',
                                                            borderRadius: '4px',
                                                            textDecoration: 'none',
                                                            fontWeight: 'bold',
                                                            pointerEvents: 'auto'
                                                        }}
                                                    >
                                                        View PDF
                                                    </a>
                                                </div>
                                            ) : (
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
                                                    Certificate Preview
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
