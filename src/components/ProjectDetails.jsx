
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Cpu, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-primary)' }}>
                <h2>Project Not Found</h2>
                <Link to="/" className="button-primary" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ minHeight: '100vh', padding: '8rem 0 4rem', background: 'var(--bg-dark)' }}
        >
            <div className="container">
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {project.title}
                    </h1>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {project.tech.map((tech, index) => (
                            <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Main Image */}
                    {project.image && (
                        <div style={{ width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--border-color)' }}>
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    )}

                    {!project.image && (
                        <div style={{ width: '100%', height: '300px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--border-color)', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Cpu size={64} style={{ opacity: 0.2 }} />
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={24} color="var(--primary)" /> Overview
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {project.longDescription}
                            </p>

                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Cpu size={24} color="var(--secondary)" /> Key Features
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                                {project.features && project.features.map((feature, index) => (
                                    <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.8rem' }}>
                                        <span style={{ minWidth: '6px', height: '6px', marginTop: '10px', background: 'var(--secondary)', borderRadius: '50%' }}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            {project.challenges && (
                                <div className="card" style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Challenges & Solutions</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            <div className="card">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project Links</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--text-primary)', transition: 'background 0.2s' }}>
                                        <Github size={20} /> View Source Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '8px', color: 'var(--primary)', border: '1px solid rgba(6, 182, 212, 0.2)', transition: 'background 0.2s' }}>
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
