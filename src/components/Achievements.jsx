import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
    {
        title: 'Diploma Topper',
        organization: 'Usharama College',
        description: 'Secured 1st rank in all 3 years of Diploma.',
        icon: <Trophy color="#f59e0b" />
    },
    {
        title: 'Innovathon Winner',
        organization: 'ALIET',
        description: 'Won 3rd prize for Advanced Energy Meter project.',
        icon: <Award color="#3b82f6" />
    },
    {
        title: 'NPTEL Qualified',
        organization: 'NPTEL',
        description: 'Qualified in Internet of Things (IoT) course.',
        icon: <Star color="#ec4899" />
    },
    {
        title: 'IoT Certificate',
        organization: 'Certification',
        description: 'Certified in Internet of Things technology.',
        icon: <Award color="#10b981" />
    },
    {
        title: 'Robotics',
        organization: 'Certification',
        description: 'Completed certification in Robotics.',
        icon: <Award color="#8b5cf6" />
    },
    {
        title: 'Solar PV System',
        organization: 'Certification',
        description: 'Certified in Solar Photovoltaic Systems.',
        icon: <Award color="#f97316" />
    }
];

const Achievements = () => {
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem' }}
                            >
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {React.cloneElement(item.icon, { size: 48 })}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '500' }}>{item.organization}</p>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
