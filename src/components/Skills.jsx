import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Cpu, Zap, Activity, Terminal, Code, Settings,
    Calculator, Globe, BookOpen, Mic, CheckCircle2, Wifi,
    ChevronRight, Layers, BarChart2
} from 'lucide-react';

/* ─── DATA ───────────────────────────────────────────────── */
const modules = [
    {
        id: 'MOD_001', name: 'Power Systems', icon: <Activity />, pct: 85,
        color: '#39ff14', glow: 'rgba(57,255,20,0.25)', status: 'NOMINAL', category: 'Engineering',
        description: 'Design and analysis of electrical power grids, load flows, fault calculations, and system stability analysis.',
        subskills: ['Load Flow Analysis', 'Grid Stability', 'Protection Systems', 'Transmission & Distribution']
    },
    {
        id: 'MOD_002', name: 'Power Electronics', icon: <Zap />, pct: 80,
        color: '#00ffaa', glow: 'rgba(0,255,170,0.25)', status: 'NOMINAL', category: 'Engineering',
        description: 'Designing and simulating power conversion topologies, switching converters, gate drivers, and cooling.',
        subskills: ['DC-DC Converters', 'Inverters / Rectifiers', 'Gate Driver Design', 'Thermal Management']
    },
    {
        id: 'MOD_003', name: 'Control Systems', icon: <Settings />, pct: 75,
        color: '#00ccff', glow: 'rgba(0,204,255,0.25)', status: 'NOMINAL', category: 'Engineering',
        description: 'Mathematical modeling of physical systems, PID controller design, state-space modeling, and stability checks.',
        subskills: ['Feedback Loops', 'PID Controllers', 'State-Space Representation', 'Bode/Nyquist Stability']
    },
    {
        id: 'MOD_004', name: 'Math Modelling', icon: <Calculator />, pct: 70,
        color: '#a78bfa', glow: 'rgba(167,139,250,0.25)', status: 'NOMINAL', category: 'Engineering',
        description: 'Developing mathematical and numerical simulation models of complex dynamic systems and engineering processes.',
        subskills: ['MATLAB / Simulink', 'Differential Equations', 'Numerical Methods', 'Optimization Algorithms']
    },
    {
        id: 'MOD_005', name: 'C Language', icon: <Terminal />, pct: 65,
        color: '#f59e0b', glow: 'rgba(245,158,11,0.25)', status: 'ACTIVE', category: 'Software',
        description: 'Low-level firmware development, microcontroller peripheral configuration, and memory-constrained coding.',
        subskills: ['Embedded Systems', 'Pointer Arithmetic', 'Memory Optimization', 'Register-level Coding']
    },
    {
        id: 'MOD_006', name: 'Python', icon: <Code />, pct: 60,
        color: '#39ff14', glow: 'rgba(57,255,20,0.25)', status: 'ACTIVE', category: 'Software',
        description: 'Writing automation scripts, custom data visualization pipelines, and performing custom scientific calculations.',
        subskills: ['Data Analytics', 'NumPy / SciPy / Pandas', 'Automation Scripts', 'Machine Learning Basics']
    },
    {
        id: 'MOD_007', name: 'Assembly Language', icon: <Cpu />, pct: 60,
        color: '#94a3b8', glow: 'rgba(148,163,184,0.2)', status: 'STANDBY', category: 'Software',
        description: 'Bare-metal timing critical routines, hardware-level diagnostic debugging, and system architecture studies.',
        subskills: ['ISA Architecture', 'Timing Optimization', 'Interrupt Services', 'Hardware Interfacing']
    }
];

const langModules = [
    { id: 'LANG_01', name: 'Telugu', pct: 100, level: 'NATIVE', color: '#39ff14', icon: <Mic /> },
    { id: 'LANG_02', name: 'English', pct: 80, level: 'PROFESSIONAL', color: '#00ffaa', icon: <Globe /> },
    { id: 'LANG_03', name: 'Hindi', pct: 50, level: 'CONVERSATIONAL', color: '#00ccff', icon: <BookOpen /> }
];

const statusColors = { NOMINAL: '#39ff14', ACTIVE: '#f59e0b', STANDBY: '#94a3b8' };
const statusBg = { NOMINAL: 'rgba(57,255,20,0.1)', ACTIVE: 'rgba(245,158,11,0.1)', STANDBY: 'rgba(148,163,184,0.1)' };

/* ─── COUNT UP HOOK ──────────────────────────────────────── */
const useCountUp = (target, started, duration = 1200) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!started) { setVal(0); return; }
        let s = null;
        const step = ts => {
            if (!s) s = ts;
            const p = Math.min((ts - s) / duration, 1);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
        };
        const animId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animId);
    }, [target, started, duration]);
    return val;
};

/* ─── CIRCULAR GAUGE ─────────────────────────────────────── */
const CircularGauge = ({ pct = 0, color = '#39ff14', size = 80, started = false }) => {
    const strokeWidth = size * 0.09;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const count = useCountUp(pct, started);

    return (
        <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
            <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
                {/* Track */}
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
                    stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
                {/* Progress */}
                <motion.circle
                    cx={size / 2} cy={size / 2} r={radius} fill="none"
                    stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={started ? { strokeDashoffset: circumference - (pct / 100) * circumference } : { strokeDashoffset: circumference }}
                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
                    style={{ filter: `drop-shadow(0 0 6px ${color}99)` }}
                />
            </svg>
            <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}>
                <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: size * 0.24, fontWeight: 700,
                    color: color, lineHeight: 1,
                    textShadow: `0 0 12px ${color}66`,
                }}>
                    {count}
                </span>
                <span style={{ fontSize: size * 0.12, color: 'rgba(255,255,255,0.3)', fontFamily: "'JetBrains Mono', monospace" }}>%</span>
            </div>
        </div>
    );
};

/* ─── SKILL CARD ─────────────────────────────────────────── */
const SkillCard = ({ mod, isActive, started, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -4, boxShadow: `0 12px 40px ${mod.glow}` }}
            onClick={onClick}
            style={{
                background: isActive
                    ? `linear-gradient(135deg, rgba(5,5,8,0.95) 0%, ${mod.color}0a 100%)`
                    : 'rgba(10,10,15,0.7)',
                border: isActive ? `1px solid ${mod.color}55` : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '1.4rem',
                backdropFilter: 'blur(16px)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.3s, background 0.3s',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Active glow corner */}
            {isActive && (
                <div style={{
                    position: 'absolute', top: 0, right: 0, width: 80, height: 80,
                    background: `radial-gradient(circle at top right, ${mod.color}22 0%, transparent 70%)`,
                    borderRadius: '0 16px 0 0',
                }}/>
            )}

            {/* Top row: icon + status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${mod.color}15`,
                    border: `1px solid ${mod.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: mod.color,
                }}>
                    {React.cloneElement(mod.icon, { size: 18 })}
                </div>
                <span style={{
                    fontSize: '0.55rem', fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.1em', padding: '0.25rem 0.5rem',
                    borderRadius: 20, fontWeight: 600,
                    color: statusColors[mod.status],
                    background: statusBg[mod.status],
                    border: `1px solid ${statusColors[mod.status]}30`,
                }}>
                    {mod.status}
                </span>
            </div>

            {/* Gauge + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircularGauge pct={mod.pct} color={mod.color} size={72} started={started} />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                        fontSize: '0.95rem', fontWeight: 700, color: '#fff',
                        marginBottom: '0.2rem', whiteSpace: 'nowrap',
                        overflow: 'hidden', textOverflow: 'ellipsis'
                    }}>
                        {mod.name}
                    </div>
                    <div style={{
                        fontSize: '0.6rem', fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--text-muted)', marginBottom: '0.6rem'
                    }}>
                        {mod.id} · {mod.category.toUpperCase()}
                    </div>
                    {/* Mini progress bar */}
                    <div style={{
                        height: 3, background: 'rgba(255,255,255,0.06)',
                        borderRadius: 4, overflow: 'hidden'
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={started ? { width: `${mod.pct}%` } : { width: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            style={{
                                height: '100%', borderRadius: 4,
                                background: `linear-gradient(90deg, ${mod.color}80, ${mod.color})`,
                                boxShadow: `0 0 6px ${mod.color}`,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Active indicator */}
            {isActive && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.6rem', fontFamily: "'JetBrains Mono', monospace",
                    color: mod.color,
                }}>
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ width: 5, height: 5, borderRadius: '50%', background: mod.color }}
                    />
                    SCANNING ACTIVE
                </div>
            )}
        </motion.div>
    );
};

/* ─── DETAIL PANEL ───────────────────────────────────────── */
const DetailPanel = ({ mod }) => {
    if (!mod) return null;
    return (
        <motion.div
            key={mod.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            style={{
                background: `linear-gradient(135deg, rgba(5,5,8,0.95) 0%, ${mod.color}08 100%)`,
                border: `1px solid ${mod.color}33`,
                borderRadius: 20, padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                backdropFilter: 'blur(20px)',
                boxShadow: `0 0 40px ${mod.glow}, inset 0 0 30px rgba(0,0,0,0.3)`,
                height: '100%',
            }}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${mod.color}20`, border: `1px solid ${mod.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: mod.color, flexShrink: 0,
                    boxShadow: `0 0 20px ${mod.color}30`,
                }}>
                    {React.cloneElement(mod.icon, { size: 24 })}
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{
                        fontSize: '1.3rem', fontWeight: 800, color: '#fff',
                        fontFamily: "'Orbitron', sans-serif", marginBottom: '0.2rem'
                    }}>
                        {mod.name}
                    </h3>
                    <div style={{
                        fontSize: '0.6rem', fontFamily: "'JetBrains Mono', monospace",
                        color: mod.color, letterSpacing: '0.1em'
                    }}>
                        {mod.id} · {mod.category.toUpperCase()} · {mod.pct}% PROFICIENCY
                    </div>
                </div>
                <span style={{
                    fontSize: '0.58rem', fontFamily: "'JetBrains Mono', monospace",
                    padding: '0.3rem 0.7rem', borderRadius: 20,
                    color: statusColors[mod.status], background: statusBg[mod.status],
                    border: `1px solid ${statusColors[mod.status]}40`,
                    fontWeight: 700, letterSpacing: '0.08em', flexShrink: 0
                }}>
                    ● {mod.status}
                </span>
            </div>

            {/* Large gauge */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <CircularGauge pct={mod.pct} color={mod.color} size={130} started={true} />
                    <div style={{
                        position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
                        fontSize: '0.55rem', fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--text-muted)', whiteSpace: 'nowrap'
                    }}>
                        PROFICIENCY INDEX
                    </div>
                </div>
            </div>

            {/* Description */}
            <p style={{
                fontSize: '0.78rem', color: 'var(--text-secondary)',
                lineHeight: 1.7, margin: 0
            }}>
                {mod.description}
            </p>

            {/* Sub-skills */}
            <div>
                <div style={{
                    fontSize: '0.6rem', fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.75rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    <Layers size={10} /> SUB-MODULES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {mod.subskills.map((sub, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                fontSize: '0.75rem', color: 'var(--text-secondary)',
                            }}
                        >
                            <ChevronRight size={12} color={mod.color} style={{ flexShrink: 0 }} />
                            {sub}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animated signal bar */}
            <div style={{
                marginTop: 'auto',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                background: 'rgba(0,0,0,0.3)', borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.05)',
            }}>
                <BarChart2 size={12} color={mod.color} />
                <span style={{
                    fontSize: '0.6rem', fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--text-muted)', flex: 1
                }}>
                    SIGNAL STRENGTH
                </span>
                <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end' }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: i < Math.round(mod.pct / 12.5) ? 1 : 0.15 }}
                            transition={{ delay: i * 0.07, duration: 0.4 }}
                            style={{
                                width: 4, height: 4 + i * 2.5,
                                background: i < Math.round(mod.pct / 12.5) ? mod.color : 'rgba(255,255,255,0.1)',
                                borderRadius: 2, transformOrigin: 'bottom',
                                boxShadow: i < Math.round(mod.pct / 12.5) ? `0 0 4px ${mod.color}` : 'none'
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

/* ─── RADIAL RING (LANGUAGES) ────────────────────────────── */
const RadialRing = ({ lang, index, started }) => {
    const r = 36, circ = 2 * Math.PI * r;
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (!started) return;
        const t = setTimeout(() => setFilled(true), index * 200 + 400);
        return () => clearTimeout(t);
    }, [started, index]);

    const count = useCountUp(lang.pct, filled, 1000);
    const offset = circ - (filled ? (lang.pct / 100) * circ : circ);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem',
                padding: '1.5rem 1.25rem',
                background: 'rgba(10, 20, 10, 0.35)',
                border: '1px solid rgba(57, 255, 20, 0.12)',
                borderRadius: 14, flex: 1, minWidth: 150, position: 'relative', overflow: 'hidden'
            }}
        >
            <span style={{
                position: 'absolute', top: '0.5rem', left: '0.5rem',
                fontSize: '0.58rem', color: 'var(--text-muted)',
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em'
            }}>{lang.id}</span>

            <div style={{ position: 'relative', width: 90, height: 90 }}>
                <svg width="90" height="90" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4" />
                    <motion.circle
                        cx="45" cy="45" r={r} fill="none"
                        stroke={lang.color} strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={circ}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{ filter: `drop-shadow(0 0 5px ${lang.color}80)` }}
                    />
                </svg>
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '0.1rem'
                }}>
                    <span style={{ color: lang.color }}>{React.cloneElement(lang.icon, { size: 13 })}</span>
                    <span style={{
                        fontSize: '1rem', fontWeight: 800,
                        fontFamily: "'Orbitron', sans-serif",
                        color: lang.color, textShadow: `0 0 8px ${lang.color}50`
                    }}>{count}%</span>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: '0.15rem' }}>{lang.name}</div>
                <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.08em',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: lang.color, opacity: 0.85
                }}>{lang.level}</div>
            </div>
        </motion.div>
    );
};

/* ─── MAIN SKILLS COMPONENT ──────────────────────────────── */
const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [started, setStarted] = useState(false);
    const [activeId, setActiveId] = useState(modules[0].id);
    const [categoryFilter, setCategoryFilter] = useState('ALL');

    useEffect(() => {
        if (inView) {
            const t = setTimeout(() => setStarted(true), 200);
            return () => clearTimeout(t);
        }
    }, [inView]);

    const handleCategoryChange = (cat) => {
        setCategoryFilter(cat);
        const filtered = modules.filter(m => cat === 'ALL' || m.category.toUpperCase() === cat);
        if (filtered.length > 0 && !filtered.some(m => m.id === activeId)) {
            setActiveId(filtered[0].id);
        }
    };

    const filteredModules = modules.filter(m => categoryFilter === 'ALL' || m.category.toUpperCase() === categoryFilter);
    const selectedMod = modules.find(m => m.id === activeId) || modules[0];

    return (
        <section id="skills" ref={ref} style={{ padding: '8rem 0' }}>
            <div className="container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>Capability Matrix</h2>
                    <p style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem',
                        color: 'var(--text-muted)', marginBottom: 0
                    }}>
                        UNIT: GALAM_SAIRAM &nbsp;|&nbsp; CLASS: EEE_ENGINEER &nbsp;|&nbsp; MODULES: {modules.length} DETECTED
                    </p>
                </motion.div>

                {/* Category filter pills */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}
                    style={{ display: 'flex', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}
                >
                    {['ALL', 'ENGINEERING', 'SOFTWARE'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            style={{
                                border: categoryFilter === cat
                                    ? '1px solid rgba(57,255,20,0.5)'
                                    : '1px solid rgba(255,255,255,0.08)',
                                background: categoryFilter === cat
                                    ? 'rgba(57,255,20,0.1)'
                                    : 'rgba(255,255,255,0.02)',
                                color: categoryFilter === cat ? '#39ff14' : 'var(--text-muted)',
                                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                                padding: '0.45rem 1.1rem', cursor: 'pointer',
                                borderRadius: 20, letterSpacing: '0.07em',
                                transition: 'all 0.25s',
                                boxShadow: categoryFilter === cat ? '0 0 12px rgba(57,255,20,0.2)' : 'none',
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
                                {filteredModules.map((mod) => (
                                    <SkillCard
                                        key={mod.id}
                                        mod={mod}
                                        isActive={activeId === mod.id}
                                        started={started}
                                        onClick={() => setActiveId(mod.id)}
                                    />
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: detail panel */}
                    <div style={{ position: 'sticky', top: '6rem' }}>
                        <AnimatePresence mode="wait">
                            <DetailPanel key={selectedMod.id} mod={selectedMod} />
                        </AnimatePresence>
                    </div>
                </div>

                {/* ─── LANGUAGE MODULES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    style={{ marginTop: '5rem', marginBottom: '1.5rem' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Language Protocols</h2>
                    <p style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem',
                        color: 'var(--text-muted)', marginBottom: 0
                    }}>
                        PROTOCOL_TYPE: HUMAN_LANGUAGE &nbsp;|&nbsp; INSTANCES: {langModules.length} VERIFIED
                    </p>
                </motion.div>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {langModules.map((lang, i) => <RadialRing key={lang.id} lang={lang} index={i} started={started} />)}

                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                        style={{
                            flex: 2, minWidth: 220, padding: '1.5rem',
                            background: 'rgba(10, 20, 10, 0.35)', border: '1px solid rgba(57,255,20,0.12)', borderRadius: 14,
                            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem'
                        }}
                    >
                        <div style={{ color: '#39ff14', fontSize: '0.62rem', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                            // SYSTEM LOG: LANGUAGE_PROTOCOLS
                        </div>
                        {langModules.map((lang, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 + 0.3 }} viewport={{ once: true }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}
                            >
                                <span style={{ color: 'var(--text-muted)' }}>{'>'}</span>
                                <span style={{ color: lang.color }}>{lang.id}</span>
                                <span style={{ color: 'var(--text-muted)' }}>|</span>
                                <span>{lang.name}</span>
                                <span style={{ color: 'var(--text-muted)' }}>→</span>
                                <span style={{ color: lang.color }}>{lang.level}</span>
                                <CheckCircle2 size={11} color={lang.color} style={{ marginLeft: 'auto' }} />
                            </motion.div>
                        ))}
                        <div style={{ marginTop: '0.4rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
                            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                                style={{ color: '#39ff14' }}>■</motion.span>
                            &nbsp;All language protocols online &amp; verified.
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
