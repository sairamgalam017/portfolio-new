import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Terminal, MessageSquare, Code, Settings, Calculator, Globe, BookOpen, Mic } from 'lucide-react';

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
    { name: 'Telugu', percentage: 100, level: 'Mother Tongue', icon: <Mic /> },
    { name: 'English', percentage: 80, level: 'Professional', icon: <Globe /> },
    { name: 'Hindi', percentage: 50, level: 'Conversational', icon: <BookOpen /> }
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {languages.map((lang, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(56, 189, 248, 0.15)' }}
                                className="card"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)' }}>
                                            {React.cloneElement(lang.icon, { size: 24 })}
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>{lang.name}</h3>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{lang.level}</span>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
                                        {lang.percentage}%
                                    </div>
                                </div>
                                <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: '10px', boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
