import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Cpu, Zap, Activity, Terminal, Code, Settings,
    Calculator, Globe, BookOpen, Mic, CheckCircle2, Wifi,
} from 'lucide-react';

/* ─── DATA ───────────────────────────────────────────────── */
const modules = [
    { id: 'MOD_001', name: 'Power Systems',     icon: <Activity />,  pct: 85, color: '#39ff14',  status: 'NOMINAL' },
    { id: 'MOD_002', name: 'Power Electronics', icon: <Zap />,       pct: 80, color: '#00ffaa',  status: 'NOMINAL' },
    { id: 'MOD_003', name: 'Control Systems',   icon: <Settings />,  pct: 75, color: '#00ccff',  status: 'NOMINAL' },
    { id: 'MOD_004', name: 'Math Modelling',    icon: <Calculator />,pct: 70, color: '#39ff14',  status: 'NOMINAL' },
    { id: 'MOD_005', name: 'C Language',        icon: <Terminal />,  pct: 65, color: '#00ffaa',  status: 'ACTIVE'  },
    { id: 'MOD_006', name: 'Python',            icon: <Code />,      pct: 60, color: '#39ff14',  status: 'ACTIVE'  },
    { id: 'MOD_007', name: 'Assembly Language', icon: <Cpu />,       pct: 60, color: '#999999',  status: 'STANDBY' },
];

const langModules = [
    { id: 'LANG_01', name: 'Telugu',  pct: 100, level: 'NATIVE',         color: '#39ff14', icon: <Mic /> },
    { id: 'LANG_02', name: 'English', pct: 80,  level: 'PROFESSIONAL',   color: '#00ffaa', icon: <Globe /> },
    { id: 'LANG_03', name: 'Hindi',   pct: 50,  level: 'CONVERSATIONAL', color: '#00ccff', icon: <BookOpen /> },
];

const statusColors = { NOMINAL: '#39ff14', ACTIVE: '#00ffaa', STANDBY: '#666' };

/* ─── HOOKS ──────────────────────────────────────────────── */
const useCountUp = (target, started, duration = 1400) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!started) return;
        let s = null;
        const step = ts => {
            if (!s) s = ts;
            const p = Math.min((ts - s) / duration, 1);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, started, duration]);
    return val;
};

/* ─── MODULE ROW ─────────────────────────────────────────── */
const ModuleRow = ({ mod, index, sectionStarted }) => {
    const [loaded, setLoaded] = useState(false);
    const delay = index * 180;
    
    useEffect(() => {
        if (!sectionStarted) return;
        const t = setTimeout(() => setLoaded(true), delay + 300);
        return () => clearTimeout(t);
    }, [sectionStarted, delay]);
    
    const count = useCountUp(mod.pct, loaded);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={sectionStarted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: delay / 1000 }}
            style={{
                display: 'grid', gridTemplateColumns: '90px 1fr 60px 90px', gap: '1rem',
                alignItems: 'center', padding: '0.9rem 1.25rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: loaded ? 'rgba(57,255,20,0.02)' : 'transparent',
                transition: 'background 0.3s',
                fontFamily: "'JetBrains Mono', monospace",
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                    width: 30, height: 30, borderRadius: 6, flexShrink: 0,
                    background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: mod.color,
                }}>
                    {React.cloneElement(mod.icon, { size: 14 })}
                </div>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{mod.id}</span>
            </div>

            <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.35rem' }}>{mod.name}</div>
                <div style={{ height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                    <motion.div
                        animate={loaded ? { width: `${mod.pct}%` } : { width: 0 }}
                        transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            height: '100%', borderRadius: 999,
                            background: `linear-gradient(90deg, transparent, ${mod.color})`,
                            boxShadow: `0 0 10px ${mod.color}80`,
                        }}
                    />
                </div>
            </div>

            <div style={{
                fontSize: '1rem', fontWeight: 700, textAlign: 'right',
                color: loaded ? '#39ff14' : 'var(--text-muted)',
                textShadow: loaded ? '0 0 12px rgba(57,255,20,0.5)' : 'none',
                transition: 'color 0.4s',
            }}>
                {count}%
            </div>

            <div style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.6rem', letterSpacing: '0.08em',
                color: loaded ? statusColors[mod.status] : 'var(--text-muted)',
                transition: 'color 0.4s',
            }}>
                <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: loaded ? 1.4 : 0.6, repeat: Infinity }}
                    style={{
                        width: 5, height: 5, borderRadius: '50%', display: 'inline-block',
                        background: loaded ? statusColors[mod.status] : '#444',
                        boxShadow: loaded ? `0 0 6px ${statusColors[mod.status]}` : 'none',
                    }}
                />
                {loaded ? mod.status : 'LOADING...'}
            </div>
        </motion.div>
    );
};

/* ─── RADIAL RING ────────────────────────────────────────── */
const RadialRing = ({ lang, index, started }) => {
    const r = 38, circ = 2 * Math.PI * r;
    const [filled, setFilled] = useState(false);
    
    useEffect(() => {
        if (!started) return;
        const t = setTimeout(() => setFilled(true), index * 250 + 400);
        return () => clearTimeout(t);
    }, [started, index]);

    const count = useCountUp(lang.pct, filled, 1000);
    const offset = circ - (filled ? (lang.pct / 100) * circ : circ);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
                padding: '1.75rem 1.25rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16, flex: 1, minWidth: 160, position: 'relative', overflow: 'hidden',
            }}
        >
            <span style={{
                position: 'absolute', top: '0.6rem', left: '0.6rem',
                fontSize: '0.6rem', color: 'var(--text-muted)',
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em',
            }}>{lang.id}</span>

            <div style={{ position: 'relative', width: 96, height: 96 }}>
                <svg width="96" height="96" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="48" cy="48" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                    <motion.circle
                        cx="48" cy="48" r={r} fill="none"
                        stroke={lang.color} strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={circ}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.3, ease: 'easeOut' }}
                        style={{ filter: `drop-shadow(0 0 6px ${lang.color}90)` }}
                    />
                </svg>
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '0.15rem',
                }}>
                    <span style={{ color: lang.color }}>{React.cloneElement(lang.icon, { size: 14 })}</span>
                    <span style={{
                        fontSize: '1.05rem', fontWeight: 800,
                        fontFamily: "'Syne', sans-serif",
                        color: lang.color,
                        textShadow: `0 0 10px ${lang.color}60`,
                    }}>{count}%</span>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{lang.name}</div>
                <div style={{
                    fontSize: '0.62rem', letterSpacing: '0.1em',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: lang.color, opacity: 0.8,
                }}>{lang.level}</div>
            </div>
        </motion.div>
    );
};

/* ─── BOOT HEADER ────────────────────────────────────────── */
const BootHeader = ({ started }) => {
    const lines = [
        { text: 'SYS_INIT: Capability diagnostic module loaded', color: '#39ff14', delay: 0 },
        { text: 'SCAN: Enumerating engineering skill modules...', color: '#00e5ff', delay: 180 },
        { text: 'AUTH: Profile verified → GALAM_SAIRAM_017', color: '#f59e0b', delay: 360 },
        { text: 'STATUS: All modules responding — running scan', color: '#39ff14', delay: 540 },
    ];
    return (
        <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(57,255,20,0.15)',
            borderRadius: 10, padding: '1rem 1.5rem',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
            marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem',
        }}>
            {lines.map((l, i) => (
                <motion.div key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={started ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: l.delay / 1000 }}
                    style={{ color: l.color, display: 'flex', gap: '0.75rem', alignItems: 'center' }}
                >
                    <span style={{ color: 'var(--text-muted)', userSelect: 'none' }}>{'>'}</span>{l.text}
                </motion.div>
            ))}
            {started && (
                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }}
                    style={{ color: '#39ff14', marginTop: '0.2rem' }}>{'> '}█</motion.div>
            )}
        </div>
    );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [started, setStarted] = useState(false);
    const totalLoaded = modules.filter(m => m.status !== 'STANDBY').length;

    useEffect(() => {
        if (inView) {
            const t = setTimeout(() => setStarted(true), 200);
            return () => clearTimeout(t);
        }
    }, [inView]);

    return (
        <section id="skills" ref={ref} style={{ padding: '8rem 0' }}>
            <div className="container">

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Capability Matrix</h2>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                        UNIT: GALAM_SAIRAM &nbsp;|&nbsp; CLASS: EEE_ENGINEER &nbsp;|&nbsp; MODULES: {modules.length} DETECTED
                    </p>
                </motion.div>

                <div style={{
                    border: '1px solid rgba(57,255,20,0.18)', borderRadius: 14, overflow: 'hidden',
                    background: 'rgba(5,5,8,0.8)', backdropFilter: 'blur(16px)',
                    marginBottom: '2.5rem', position: 'relative',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem',
                        background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                        <span style={{ marginLeft: '0.75rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            capability_scanner.exe — DIAGNOSTIC MODE
                        </span>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Wifi size={12} color={started ? '#39ff14' : '#666'} />
                            <span style={{ fontSize: '0.62rem', fontFamily: "'JetBrains Mono', monospace", color: started ? '#39ff14' : '#666' }}>
                                {started ? 'LIVE' : 'IDLE'}
                            </span>
                        </div>
                    </div>

                    <div style={{ padding: '1.25rem 1.25rem 0' }}><BootHeader started={started} /></div>

                    <div style={{
                        display: 'grid', gridTemplateColumns: '90px 1fr 60px 90px', gap: '1rem',
                        padding: '0.5rem 1.25rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                        color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)',
                    }}>
                        <span>MODULE ID</span><span>SKILL / PROFICIENCY</span><span style={{ textAlign: 'right' }}>SCORE</span><span>STATUS</span>
                    </div>

                    <div>{modules.map((mod, i) => <ModuleRow key={mod.id} mod={mod} index={i} sectionStarted={started} />)}</div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={started ? { opacity: 1 } : {}} transition={{ delay: 1.8, duration: 0.5 }}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '0.75rem 1.25rem', borderTop: '1px solid rgba(57,255,20,0.12)', background: 'rgba(57,255,20,0.04)',
                            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', flexWrap: 'wrap', gap: '0.5rem',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#39ff14' }}>
                            <CheckCircle2 size={13} /> SCAN COMPLETE — {totalLoaded}/{modules.length} MODULES ACTIVE
                        </div>
                        <div style={{ color: 'var(--text-muted)' }}>
                            AVG CAPABILITY: {Math.round(modules.reduce((a, m) => a + m.pct, 0) / modules.length)}% &nbsp;|&nbsp; CLASS: ENGINEER_LVL_2
                        </div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>Language Modules</h2>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                        PROTOCOL_TYPE: HUMAN_LANGUAGE &nbsp;|&nbsp; INSTANCES: {langModules.length}
                    </p>
                </motion.div>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {langModules.map((lang, i) => <RadialRing key={lang.id} lang={lang} index={i} started={started} />)}

                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
                        style={{
                            flex: 2, minWidth: 220, padding: '1.75rem',
                            background: 'rgba(57,255,20,0.03)', border: '1px solid rgba(57,255,20,0.12)', borderRadius: 16,
                            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.85rem',
                        }}
                    >
                        <div style={{ color: '#39ff14', fontSize: '0.65rem', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                            // SYSTEM LOG: LANGUAGE_PROTOCOLS
                        </div>
                        {langModules.map((lang, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 + 0.4 }} viewport={{ once: true }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}
                            >
                                <span style={{ color: 'var(--text-muted)' }}>{'>'}</span><span style={{ color: lang.color }}>{lang.id}</span>
                                <span style={{ color: 'var(--text-muted)' }}>|</span><span>{lang.name}</span><span style={{ color: 'var(--text-muted)' }}>→</span>
                                <span style={{ color: lang.color }}>{lang.level}</span>
                                <CheckCircle2 size={11} color={lang.color} style={{ marginLeft: 'auto' }} />
                            </motion.div>
                        ))}
                        <div style={{
                            marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)',
                        }}>
                            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                                style={{ color: '#39ff14' }}>■</motion.span>
                            &nbsp;All language protocols verified &amp; online
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
