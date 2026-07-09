
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" style={{
            padding: 'var(--spacing-section) 0',
            background: 'var(--gradient-wash-left)',
            borderTop: '1px solid var(--border-color)',
            borderBottom: '1px solid var(--border-color)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Projects</h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', marginTop: '-1.5rem' }}>
                        Hands-on engineering projects spanning IoT, embedded systems, and renewable energy.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                <Link to={`/project/${project.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', flex: '1' }}>
                                    <div style={{
                                        height: '200px',
                                        background: 'var(--bg-wash)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        {project.image ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        objectPosition: 'center',
                                                        padding: '0.5rem',
                                                    }}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.style.display = 'none';
                                                        e.target.parentNode.children[1].style.display = 'flex';
                                                    }}
                                                />
                                                <div style={{
                                                    position: 'absolute', bottom: 0, left: 0,
                                                    width: '100%', height: '40px',
                                                    background: `linear-gradient(transparent, var(--bg-card))`,
                                                    pointerEvents: 'none',
                                                }} />
                                            </>
                                        ) : null}
                                        <div style={{
                                            display: project.image ? 'none' : 'flex',
                                            position: 'absolute',
                                            top: 0, left: 0,
                                            width: '100%', height: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--bg-wash)',
                                        }}>
                                            <span style={{ fontSize: '3rem', opacity: 0.15 }}>⚡</span>
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem 1.5rem 0' }}>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            marginBottom: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            fontWeight: 700,
                                        }}>
                                            {project.title}
                                            <ArrowRight size={18} style={{ opacity: 0.3, flexShrink: 0 }} />
                                        </h3>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            marginBottom: '1rem',
                                            lineHeight: '1.6',
                                            fontSize: '0.95rem',
                                        }}>
                                            {project.shortDescription || project.description}
                                        </p>
                                    </div>
                                </Link>

                                <div style={{ padding: '0 1.5rem 1.5rem', marginTop: 'auto' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.8rem',
                                                padding: '0.2rem 0.65rem',
                                                background: 'rgba(20, 158, 202, 0.08)',
                                                color: 'var(--primary)',
                                                borderRadius: '9999px',
                                                border: '1px solid rgba(20, 158, 202, 0.12)',
                                                fontWeight: 500,
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {project.presentation && (
                                            <a href={project.presentation} target="_blank" rel="noopener noreferrer" style={{
                                                display: 'flex', alignItems: 'center', gap: '0.4rem',
                                                color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 500,
                                            }}>
                                                <FileText size={16} /> Slides
                                            </a>
                                        )}
                                        {project.paper && (
                                            <a href={project.paper} target="_blank" rel="noopener noreferrer" style={{
                                                display: 'flex', alignItems: 'center', gap: '0.4rem',
                                                color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 500,
                                            }}>
                                                <BookOpen size={16} /> Paper
                                            </a>
                                        )}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                                            color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500,
                                        }}>
                                            <Github size={16} /> Code
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                                            color: 'var(--accent-green)', fontSize: '0.85rem', fontWeight: 500,
                                        }}>
                                            <ExternalLink size={16} /> Demo
                                        </a>
                                    </div>
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
