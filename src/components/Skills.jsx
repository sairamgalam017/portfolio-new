import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Terminal, MessageSquare, Code, Settings, Calculator } from 'lucide-react';

const skills = [
    { name: 'C Language', icon: <Terminal />, percentage: 65, level: 'Intermediate' },
    { name: 'Python (Basic)', icon: <Code />, percentage: 60, level: 'Basic' },
    { name: 'Mathematics Modelling', icon: <Calculator />, percentage: 70, level: 'Intermediate' },
    { name: 'Assembly Language', icon: <Cpu />, percentage: 60, level: 'Intermediate' },
    { name: 'Power Systems', icon: <Activity />, percentage: 85, level: 'Advanced' },
    { name: 'Power Electronics', icon: <Zap />, percentage: 80, level: 'Advanced' },
    { name: 'Control Systems', icon: <Settings />, percentage: 75, level: 'Intermediate' }
];

const languages = [
    { name: 'Telugu', percentage: 100, level: 'Mother Tongue' },
    { name: 'English', percentage: 80, level: 'Professional' },
    { name: 'Hindi', percentage: 50, level: 'Conversational' }
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {React.cloneElement(skill.icon, { size: 40 })}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
                                {skill.percentage && (
                                    <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', height: '8px', marginTop: '1rem', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            style={{ height: '100%', background: 'var(--primary)', borderRadius: '10px' }}
                                        />
                                    </div>
                                )}
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>{skill.percentage}% - {skill.level}</p>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="section-title">Languages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {languages.map((lang, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem' }}
                            >
                                <div style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    <MessageSquare size={40} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{lang.name}</h3>
                                <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', height: '8px', marginTop: '1rem', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        style={{ height: '100%', background: 'var(--secondary)', borderRadius: '10px' }}
                                    />
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>{lang.level}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
