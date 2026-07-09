
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Zap, Cpu, FileText, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-primary)' }}>
                <h2 style={{ marginBottom: '1rem' }}>Project Not Found</h2>
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: 'var(--primary)', color: '#fff',
                    padding: '0.75rem 1.5rem', borderRadius: '9999px',
                    fontWeight: 600, textDecoration: 'none',
                }}>
                    <ArrowLeft size={18} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ minHeight: '100vh', padding: '8rem 0 4rem' }}
        >
            <div className="container">
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    marginBottom: '2rem', color: 'var(--text-secondary)',
                    textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                    padding: '0.5rem 1rem', borderRadius: '9999px',
                    transition: 'all 0.2s ease',
                }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                    <ArrowLeft size={18} /> Back to Projects
                </Link>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        <span className="gradient-text">{project.title}</span>
                    </h1>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {project.tech.map((tech, index) => (
                            <span key={index} style={{
                                padding: '0.4rem 1rem',
                                background: 'rgba(20, 158, 202, 0.08)',
                                color: 'var(--primary)',
                                borderRadius: '9999px',
                                fontSize: '0.85rem',
                                border: '1px solid rgba(20, 158, 202, 0.15)',
                                fontWeight: 500,
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Main Image */}
                    {project.image && (
                        <div style={{
                            width: '100%', borderRadius: '1.25rem', overflow: 'hidden',
                            marginBottom: '3rem', border: '1px solid var(--border-color)',
                            background: 'var(--bg-card)',
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    )}

                    {!project.image && (
                        <div style={{
                            width: '100%', height: '280px', borderRadius: '1.25rem', overflow: 'hidden',
                            marginBottom: '3rem', border: '1px solid var(--border-color)',
                            background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Cpu size={56} style={{ opacity: 0.1 }} />
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h2 style={{
                                fontSize: '1.5rem', marginBottom: '1rem',
                                display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700,
                            }}>
                                <Zap size={20} color="var(--primary)" /> Overview
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
                                {project.longDescription}
                            </p>

                            <h2 style={{
                                fontSize: '1.5rem', marginBottom: '1rem',
                                display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700,
                            }}>
                                <Cpu size={20} color="var(--secondary)" /> Key Features
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                                {project.features && project.features.map((feature, index) => (
                                    <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start', gap: '0.75rem', fontSize: '1rem' }}>
                                        <span style={{
                                            minWidth: '6px', height: '6px', marginTop: '10px',
                                            background: 'var(--primary)', borderRadius: '50%', flexShrink: 0,
                                        }}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            {project.challenges && (
                                <div style={{
                                    marginBottom: '2rem',
                                    background: 'var(--bg-card)',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow-card)',
                                }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>Challenges & Solutions</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            <div style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow-card)',
                            }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Project Links</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {project.presentation && (
                                        <a href={project.presentation} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.25rem',
                                            background: 'rgba(20, 158, 202, 0.06)', borderRadius: '0.75rem',
                                            color: 'var(--primary)', border: '1px solid rgba(20, 158, 202, 0.12)',
                                            transition: 'all 0.2s', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none',
                                        }}>
                                            <FileText size={18} /> View Presentation
                                        </a>
                                    )}
                                    {project.paper && (
                                        <a href={project.paper} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.25rem',
                                            background: 'rgba(167, 139, 250, 0.06)', borderRadius: '0.75rem',
                                            color: 'var(--secondary)', border: '1px solid rgba(167, 139, 250, 0.12)',
                                            transition: 'all 0.2s', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none',
                                        }}>
                                            <BookOpen size={18} /> Read Research Paper
                                        </a>
                                    )}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.25rem',
                                        background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem',
                                        color: 'var(--text-primary)', transition: 'all 0.2s', fontWeight: 500,
                                        fontSize: '0.95rem', textDecoration: 'none', border: '1px solid var(--border-color)',
                                    }}>
                                        <Github size={18} /> View Source Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.25rem',
                                        background: 'rgba(68, 168, 122, 0.06)', borderRadius: '0.75rem',
                                        color: 'var(--accent-green)', border: '1px solid rgba(68, 168, 122, 0.12)',
                                        transition: 'all 0.2s', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none',
                                    }}>
                                        <ExternalLink size={18} /> Live Demo
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
