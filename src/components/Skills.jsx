import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Cpu, Zap, Activity, Terminal, Code, Settings,
    Calculator, Globe, BookOpen, Mic, ChevronRight
} from 'lucide-react';

/* ─── DATA ───────────────────────────────────────────────── */
const skills = [
    {
        id: 1, name: 'Power Systems', icon: <Activity />, pct: 85,
        color: '#149eca', category: 'Engineering',
        description: 'Design and analysis of electrical power grids, load flows, fault calculations, and system stability analysis.',
        subskills: ['Load Flow Analysis', 'Grid Stability', 'Protection Systems', 'Transmission & Distribution']
    },
    {
        id: 2, name: 'Power Electronics', icon: <Zap />, pct: 80,
        color: '#a78bfa', category: 'Engineering',
        description: 'Designing and simulating power conversion topologies, switching converters, gate drivers, and cooling.',
        subskills: ['DC-DC Converters', 'Inverters / Rectifiers', 'Gate Driver Design', 'Thermal Management']
    },
    {
        id: 3, name: 'Analog Circuits', icon: <Settings />, pct: 75,
        color: '#58c4dc', category: 'Engineering',
        description: 'Design and analysis of analog electronic circuits including amplifiers, filters, oscillators, and signal conditioning.',
        subskills: ['Op-Amp Circuits', 'Active & Passive Filters', 'Signal Conditioning', 'Transistor Biasing']
    },
    {
        id: 4, name: 'Digital Electronics', icon: <Cpu />, pct: 75,
        color: '#f472b6', category: 'Engineering',
        description: 'Design of combinational and sequential logic circuits, FPGA programming, and digital system architecture.',
        subskills: ['Logic Gates & Boolean Algebra', 'Flip-Flops & Counters', 'FPGA / CPLD Design', 'Microcontroller Interfacing']
    },
    {
        id: 5, name: 'MATLAB / Simulink', icon: <Calculator />, pct: 70,
        color: '#e06c2e', category: 'Software',
        description: 'Mathematical modelling, system simulation, and data analysis using MATLAB scripting and Simulink block diagrams.',
        subskills: ['System Simulation', 'Differential Equations', 'Control System Toolbox', 'Power System Modelling']
    },
    {
        id: 6, name: 'Internet of Things', icon: <Globe />, pct: 65,
        color: '#dba535', category: 'Engineering',
        description: 'Building IoT solutions with sensor networks, embedded controllers, cloud connectivity, and real-time data monitoring.',
        subskills: ['Sensor Integration', 'Arduino / ESP32', 'MQTT & Cloud Platforms', 'Real-Time Monitoring']
    },
    {
        id: 7, name: 'C Programming', icon: <Terminal />, pct: 65,
        color: '#44a87a', category: 'Software',
        description: 'Low-level firmware development, microcontroller peripheral configuration, and memory-constrained coding.',
        subskills: ['Embedded Systems', 'Pointer Arithmetic', 'Memory Optimization', 'Register-level Coding']
    },
    {
        id: 8, name: 'Basic Python', icon: <Code />, pct: 60,
        color: '#99a1b3', category: 'Software',
        description: 'Writing automation scripts, data visualization, and performing scientific calculations with Python libraries.',
        subskills: ['Data Analytics', 'NumPy / SciPy / Pandas', 'Automation Scripts', 'Matplotlib Visualization']
    }
];

const languages = [
    { id: 1, name: 'Telugu', pct: 100, level: 'Native', color: '#149eca', icon: <Mic /> },
    { id: 2, name: 'English', pct: 80, level: 'Professional', color: '#a78bfa', icon: <Globe /> },
    { id: 3, name: 'Hindi', pct: 50, level: 'Conversational', color: '#58c4dc', icon: <BookOpen /> }
];

/* ─── ANIMATED PROGRESS BAR ─────────────────────────────── */
const ProgressBar = ({ pct, color, started }) => {
    return (
        <div style={{
            height: 6,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 9999,
            overflow: 'hidden',
            width: '100%',
        }}>
            <motion.div
                initial={{ width: 0 }}
                animate={started ? { width: `${pct}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                style={{
                    height: '100%',
                    borderRadius: 9999,
                    background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                }}
            />
        </div>
    );
};

/* ─── SKILL CARD ─────────────────────────────────────────── */
const SkillCard = ({ skill, isActive, started, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            whileHover={{ y: -3, boxShadow: 'var(--shadow-card-hover)' }}
            onClick={onClick}
            style={{
                background: isActive
                    ? `linear-gradient(135deg, var(--bg-card) 0%, ${skill.color}0d 100%)`
                    : 'var(--bg-card)',
                border: isActive ? `1px solid ${skill.color}40` : '1px solid var(--border-color)',
                borderRadius: '1rem',
                padding: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.2s, background 0.2s',
                boxShadow: 'var(--shadow-card)',
            }}
        >
            {/* Top row: icon + category */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    width: 40, height: 40, borderRadius: '0.75rem',
                    background: `${skill.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: skill.color,
                }}>
                    {React.cloneElement(skill.icon, { size: 18 })}
                </div>
                <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.6rem',
                    borderRadius: 9999,
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                }}>
                    {skill.category}
                </span>
            </div>

            {/* Name + Percentage */}
            <div>
                <div style={{
                    fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)',
                    marginBottom: '0.3rem',
                }}>
                    {skill.name}
                </div>
                <div style={{
                    fontSize: '0.8rem',
                    color: skill.color,
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                }}>
                    {skill.pct}%
                </div>
                <ProgressBar pct={skill.pct} color={skill.color} started={started} />
            </div>
        </motion.div>
    );
};

/* ─── DETAIL PANEL ───────────────────────────────────────── */
const DetailPanel = ({ skill }) => {
    if (!skill) return null;
    return (
        <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                background: 'var(--bg-card)',
                border: `1px solid ${skill.color}30`,
                borderRadius: '1.25rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-card)',
                height: '100%',
            }}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                    width: 48, height: 48, borderRadius: '0.875rem',
                    background: `${skill.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: skill.color, flexShrink: 0,
                }}>
                    {React.cloneElement(skill.icon, { size: 22 })}
                </div>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                        {skill.name}
                    </h3>
                    <div style={{
                        fontSize: '0.8rem', color: skill.color, fontWeight: 600,
                    }}>
                        {skill.pct}% Proficiency · {skill.category}
                    </div>
                </div>
            </div>

            {/* Large progress bar */}
            <div>
                <ProgressBar pct={skill.pct} color={skill.color} started={true} />
            </div>

            {/* Description */}
            <p style={{
                fontSize: '0.9rem', color: 'var(--text-secondary)',
                lineHeight: 1.7, margin: 0,
            }}>
                {skill.description}
            </p>

            {/* Sub-skills */}
            <div>
                <div style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                }}>
                    Key Areas
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {skill.subskills.map((sub, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                fontSize: '0.85rem', color: 'var(--text-secondary)',
                            }}
                        >
                            <ChevronRight size={14} color={skill.color} style={{ flexShrink: 0 }} />
                            {sub}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

/* ─── LANGUAGE CARD ──────────────────────────────────────── */
const LanguageCard = ({ lang, index, started }) => {
    const r = 34, circ = 2 * Math.PI * r;
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (!started) return;
        const t = setTimeout(() => setFilled(true), index * 200 + 300);
        return () => clearTimeout(t);
    }, [started, index]);

    const offset = circ - (filled ? (lang.pct / 100) * circ : circ);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem 1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '1rem',
                flex: 1,
                minWidth: 150,
                boxShadow: 'var(--shadow-card)',
            }}
        >
            <div style={{ position: 'relative', width: 80, height: 80 }}>
                <svg width="80" height="80" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <motion.circle
                        cx="40" cy="40" r={r} fill="none"
                        stroke={lang.color} strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={circ}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                </svg>
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <span style={{ color: lang.color }}>{React.cloneElement(lang.icon, { size: 14 })}</span>
                    <span style={{
                        fontSize: '1rem', fontWeight: 700, color: lang.color,
                    }}>
                        {lang.pct}%
                    </span>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                    {lang.name}
                </div>
                <div style={{
                    fontSize: '0.75rem', fontWeight: 500,
                    color: 'var(--text-muted)',
                }}>
                    {lang.level}
                </div>
            </div>
        </motion.div>
    );
};

/* ─── MAIN SKILLS COMPONENT ──────────────────────────────── */
const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [started, setStarted] = useState(false);
    const [activeId, setActiveId] = useState(skills[0].id);
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        if (inView) {
            const t = setTimeout(() => setStarted(true), 200);
            return () => clearTimeout(t);
        }
    }, [inView]);

    const handleCategoryChange = (cat) => {
        setCategoryFilter(cat);
        const filtered = skills.filter(s => cat === 'All' || s.category === cat);
        if (filtered.length > 0 && !filtered.some(s => s.id === activeId)) {
            setActiveId(filtered[0].id);
        }
    };

    const filteredSkills = skills.filter(s => categoryFilter === 'All' || s.category === categoryFilter);
    const selectedSkill = skills.find(s => s.id === activeId) || skills[0];

    return (
        <section id="skills" ref={ref} style={{ padding: 'var(--spacing-section) 0' }}>
            <div className="container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    style={{ marginBottom: '2.5rem' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Skills & Expertise</h2>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                    }}>
                        Technical skills across electrical engineering and software development.
                    </p>
                </motion.div>

                {/* Category filter pills */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}
                    style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}
                >
                    {['All', 'Engineering', 'Software'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            style={{
                                border: categoryFilter === cat
                                    ? '1px solid rgba(20, 158, 202, 0.4)'
                                    : '1px solid var(--border-color)',
                                background: categoryFilter === cat
                                    ? 'rgba(20, 158, 202, 0.1)'
                                    : 'transparent',
                                color: categoryFilter === cat ? 'var(--primary)' : 'var(--text-muted)',
                                fontSize: '0.85rem',
                                padding: '0.5rem 1.2rem',
                                cursor: 'pointer',
                                borderRadius: 9999,
                                fontWeight: 600,
                                transition: 'all 0.2s',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Main two-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) 340px',
                    gap: '1.5rem',
                    alignItems: 'start',
                }}>
                    {/* LEFT: card grid */}
                    <div>
                        <AnimatePresence mode="popLayout">
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: '1rem',
                            }}>
                                {filteredSkills.map((skill) => (
                                    <SkillCard
                                        key={skill.id}
                                        skill={skill}
                                        isActive={activeId === skill.id}
                                        started={started}
                                        onClick={() => setActiveId(skill.id)}
                                    />
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: detail panel */}
                    <div style={{ position: 'sticky', top: '6rem' }}>
                        <AnimatePresence mode="wait">
                            <DetailPanel key={selectedSkill.id} skill={selectedSkill} />
                        </AnimatePresence>
                    </div>
                </div>

                {/* ─── LANGUAGES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    style={{ marginTop: '5rem', marginBottom: '1.5rem' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Languages</h2>
                    <p style={{
                        fontSize: '1.05rem', color: 'var(--text-secondary)',
                    }}>
                        Communication proficiency across multiple languages.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {languages.map((lang, i) => (
                        <LanguageCard key={lang.id} lang={lang} index={i} started={started} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
