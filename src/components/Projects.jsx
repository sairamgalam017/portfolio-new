import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Advanced Energy Meter',
        description: 'An IoT-based smart energy meter that allows real-time monitoring of energy consumption and automated billing alerts.',
        tech: ['IoT', 'Arduino', 'GSM Module', 'Sensors'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Smart Dustbin',
        description: 'An automated waste management system with ultrasonic sensors for lid operation and fullness detection to promote hygiene.',
        tech: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor'],
        github: '#',
        demo: '#'
    },
    {
        title: 'IoT Based Smart Agricultural System',
        description: 'A precision agriculture solution monitoring soil moisture and environmental conditions to automate irrigation and improve crop yield.',
        tech: ['IoT', 'ESP8266', 'Soil Moisture Sensor', 'Cloud Platform'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Resistor Colour Code Calculator',
        description: 'A tool designed to quickly calculate resistance values and tolerance based on standard color code bands.',
        tech: ['C++', 'Logic Design', 'Electronics'],
        github: '#',
        demo: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="card"
                                style={{ padding: '1.5rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <div style={{ height: '200px', background: '#334155', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                    Project Thumbnail
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{ fontSize: '0.85rem', padding: '0.2rem 0.6rem', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', borderRadius: '4px' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
