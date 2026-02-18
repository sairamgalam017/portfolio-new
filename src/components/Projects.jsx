
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="card"
                                style={{ padding: '0', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <Link to={`/project/${project.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', flex: '1' }}>
                                    <div style={{ height: '200px', background: '#334155', position: 'relative' }}>
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.style.display = 'none';
                                                    e.target.parentNode.children[1].style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div style={{
                                            display: project.image ? 'none' : 'flex',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#94a3b8',
                                            background: '#1e293b'
                                        }}>
                                            <span style={{ fontSize: '3rem', opacity: 0.2 }}>⚡</span>
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem 1.5rem 0' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {project.title}
                                            <ArrowRight size={20} style={{ opacity: 0.5 }} />
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6', fontSize: '1rem' }}>
                                            {project.shortDescription || project.description}
                                        </p>
                                    </div>
                                </Link>

                                <div style={{ padding: '0 1.5rem 1.5rem', marginTop: 'auto' }}>
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
