import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Cpu, Zap, Activity, Terminal, Code, Settings,
    Calculator, Globe, BookOpen, Mic, CheckCircle2, Wifi,
    Activity as WaveIcon
} from 'lucide-react';

/* ─── DATA ───────────────────────────────────────────────── */
const modules = [
    {
        id: 'MOD_001',
        name: 'Power Systems',
        icon: <Activity />,
        pct: 85,
        color: '#39ff14',
        status: 'NOMINAL',
        category: 'Engineering',
        description: 'Design and analysis of electrical power grids, load flows, fault calculations, and system stability analysis.',
        subskills: ['Load Flow Analysis', 'Grid Stability', 'Protection Systems', 'Transmission & Distribution']
    },
    {
        id: 'MOD_002',
        name: 'Power Electronics',
        icon: <Zap />,
        pct: 80,
        color: '#00ffaa',
        status: 'NOMINAL',
        category: 'Engineering',
        description: 'Designing and simulating power conversion topologies, switching converters, gate drivers, and cooling.',
        subskills: ['DC-DC Converters', 'Inverters / Rectifiers', 'Gate Driver Design', 'Thermal Management']
    },
    {
        id: 'MOD_003',
        name: 'Control Systems',
        icon: <Settings />,
        pct: 75,
        color: '#00ccff',
        status: 'NOMINAL',
        category: 'Engineering',
        description: 'Mathematical modeling of physical systems, PID controller design, state-space modeling, and stability checks.',
        subskills: ['Feedback Loops', 'PID Controllers', 'State-Space Representation', 'Bode/Nyquist Stability']
    },
    {
        id: 'MOD_004',
        name: 'Math Modelling',
        icon: <Calculator />,
        pct: 70,
        color: '#39ff14',
        status: 'NOMINAL',
        category: 'Engineering',
        description: 'Developing mathematical and numerical simulation models of complex dynamic systems and engineering processes.',
        subskills: ['MATLAB / Simulink', 'Differential Equations', 'Numerical Methods', 'Optimization Algorithms']
    },
    {
        id: 'MOD_005',
        name: 'C Language',
        icon: <Terminal />,
        pct: 65,
        color: '#00ffaa',
        status: 'ACTIVE',
        category: 'Software',
        description: 'Low-level firmware development, microcontroller peripheral configuration, and memory-constrained coding.',
        subskills: ['Embedded Systems', 'Pointer Arithmetic', 'Memory Optimization', 'Register-level Coding']
    },
    {
        id: 'MOD_006',
        name: 'Python',
        icon: <Code />,
        pct: 60,
        color: '#39ff14',
        status: 'ACTIVE',
        category: 'Software',
        description: 'Writing automation scripts, custom data visualization pipelines, and performing custom scientific calculations.',
        subskills: ['Data Analytics', 'NumPy / SciPy / Pandas', 'Automation Scripts', 'Machine Learning Basics']
    },
    {
        id: 'MOD_007',
        name: 'Assembly Language',
        icon: <Cpu />,
        pct: 60,
        color: '#999999',
        status: 'STANDBY',
        category: 'Software',
        description: 'Bare-metal timing critical routines, hardware-level diagnostic debugging, and system architecture studies.',
        subskills: ['ISA Architecture', 'Timing Optimization', 'Interrupt Services', 'Hardware Interfacing']
    }
];

const langModules = [
    { id: 'LANG_01', name: 'Telugu', pct: 100, level: 'NATIVE', color: '#39ff14', icon: <Mic /> },
    { id: 'LANG_02', name: 'English', pct: 80, level: 'PROFESSIONAL', color: '#00ffaa', icon: <Globe /> },
    { id: 'LANG_03', name: 'Hindi', pct: 50, level: 'CONVERSATIONAL', color: '#00ccff', icon: <BookOpen /> }
];

const statusColors = { NOMINAL: '#39ff14', ACTIVE: '#00ffaa', STANDBY: '#666' };

/* ─── COUNT UP HOOK ──────────────────────────────────────── */
const useCountUp = (target, started, duration = 1200) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!started) {
            setVal(0);
            return;
        }
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

/* ─── BOOT HEADER ────────────────────────────────────────── */
const BootHeader = ({ started }) => {
    const lines = [
        { text: 'SYS_INIT: Capability diagnostic module loaded', color: '#39ff14', delay: 0 },
        { text: 'SCAN: Enumerating engineering skill modules...', color: '#00e5ff', delay: 180 },
        { text: 'AUTH: Profile verified → GALAM_SAIRAM_017', color: '#f59e0b', delay: 360 },
        { text: 'STATUS: Interactive diagnostics interface loaded', color: '#39ff14', delay: 540 }
    ];
    return (
        <div style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(57,255,20,0.15)',
            borderRadius: 8, padding: '0.8rem 1.2rem',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
            marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem'
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
                    style={{ color: '#39ff14', marginTop: '0.1rem' }}>{'> '}█</motion.div>
            )}
        </div>
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
                        color: lang.color,
                        textShadow: `0 0 8px ${lang.color}50`
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

/* ─── CUSTOM SVG RADAR CHART ─────────────────────────────── */
const RadarChart = ({ items, hoveredId, setHoveredId, activeId, setActiveId }) => {
    const width = 280;
    const height = 280;
    const cx = width / 2;
    const cy = height / 2;
    const r = 85; // maximum radius
    const N = items.length;
    const gridLevels = [20, 40, 60, 80, 100];

    const getCoordinates = (i, value) => {
        const theta = (2 * Math.PI * i) / N - Math.PI / 2;
        const radius = r * (value / 100);
        return {
            x: cx + radius * Math.cos(theta),
            y: cy + radius * Math.sin(theta)
        };
    };

    const polygonPoints = items.map((item, i) => {
        const { x, y } = getCoordinates(i, item.pct);
        return `${x},${y}`;
    }).join(' ');

    return (
        <div style={{ position: 'relative', width: width, height: height, margin: '0 auto' }}>
            <svg width={width} height={height} style={{ overflow: 'visible' }}>
                <defs>
                    <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#39ff14" stopOpacity="0.1" />
                        <stop offset="70%" stopColor="#00ffaa" stopOpacity="0.03" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <circle cx={cx} cy={cy} r={r} fill="url(#radarGlow)" />

                {/* Concentric Grid lines */}
                {gridLevels.map((lvl) => {
                    const points = Array.from({ length: N }).map((_, i) => {
                        const { x, y } = getCoordinates(i, lvl);
                        return `${x},${y}`;
                    }).join(' ');
                    return (
                        <polygon
                            key={lvl}
                            points={points}
                            fill="none"
                            stroke="rgba(57, 255, 20, 0.08)"
                            strokeWidth="1"
                            strokeDasharray={lvl === 100 ? "0" : "3 3"}
                        />
                    );
                })}

                {/* Grid level labels */}
                {gridLevels.map((lvl) => {
                    const { x, y } = getCoordinates(0, lvl);
                    return (
                        <text
                            key={lvl}
                            x={x + 4}
                            y={y + 3}
                            fill="rgba(57, 255, 20, 0.35)"
                            fontSize="7"
                            fontFamily="'JetBrains Mono', monospace"
                        >
                            {lvl}%
                        </text>
                    );
                })}

                {/* Axis lines */}
                {items.map((item, i) => {
                    const outer = getCoordinates(i, 100);
                    return (
                        <line
                            key={item.id}
                            x1={cx}
                            y1={cy}
                            x2={outer.x}
                            y2={outer.y}
                            stroke="rgba(255, 255, 255, 0.06)"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Shaded Value Polygon */}
                <motion.polygon
                    points={polygonPoints}
                    fill="rgba(57, 255, 20, 0.12)"
                    stroke="#39ff14"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{
                        filter: 'drop-shadow(0 0 6px rgba(57, 255, 20, 0.45))',
                        transformOrigin: `${cx}px ${cy}px`,
                        cursor: 'pointer'
                    }}
                />

                {/* Data point markers & outer click targets */}
                {items.map((item, i) => {
                    const { x, y } = getCoordinates(i, item.pct);
                    const angle = (2 * Math.PI * i) / N - Math.PI / 2;
                    
                    // Offset label pos outward slightly
                    const labelDist = r + 24;
                    const lx = cx + labelDist * Math.cos(angle);
                    const ly = cy + labelDist * Math.sin(angle);
                    
                    const isHovered = hoveredId === item.id;
                    const isActive = activeId === item.id;

                    return (
                        <g key={item.id} style={{ cursor: 'pointer' }}
                           onMouseEnter={() => setHoveredId(item.id)}
                           onMouseLeave={() => setHoveredId(null)}
                           onClick={() => setActiveId(item.id)}
                        >
                            {/* Pulse Circle */}
                            {(isHovered || isActive) && (
                                <circle cx={x} cy={y} r={9} fill="none" stroke={item.color} strokeWidth="1" style={{ opacity: 0.5 }} />
                            )}
                            
                            {/* Core Point */}
                            <circle
                                cx={x}
                                cy={y}
                                r={isHovered || isActive ? 4.5 : 3}
                                fill={isActive ? '#ffffff' : item.color}
                                stroke={isActive ? item.color : '#000000'}
                                strokeWidth={1.5}
                                style={{
                                    transition: 'all 0.2s',
                                    filter: `drop-shadow(0 0 3px ${item.color})`
                                }}
                            />

                            {/* Label */}
                            <text
                                x={lx}
                                y={ly}
                                textAnchor={Math.abs(lx - cx) < 15 ? 'middle' : (lx > cx ? 'start' : 'end')}
                                fill={isHovered || isActive ? '#ffffff' : 'var(--text-muted)'}
                                fontSize="8.5"
                                fontWeight={isHovered || isActive ? 700 : 500}
                                fontFamily="'JetBrains Mono', monospace"
                                style={{
                                    transition: 'fill 0.2s',
                                    textShadow: isHovered || isActive ? `0 0 5px ${item.color}50` : 'none'
                                }}
                            >
                                {item.name}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

/* ─── TELEMETRY WAVEFORM (SVG ANIMATION) ────────────────── */
const TelemetryWaveform = ({ color }) => {
    return (
        <div style={{
            height: 38, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center',
            background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: '0 0.75rem',
            border: '1px solid rgba(57, 255, 20, 0.08)'
        }}>
            <svg width="100%" height="24" style={{ overflow: 'visible' }}>
                <motion.path
                    d="M 0,12 L 20,12 L 28,3 L 36,21 L 44,12 L 80,12 L 88,0 L 96,24 L 104,12 L 140,12 L 148,8 L 156,16 L 164,12 L 210,12 L 218,2 L 226,22 L 234,12 L 320,12"
                    fill="none"
                    stroke={color || '#39ff14'}
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                    style={{
                        filter: `drop-shadow(0 0 3px ${color || '#39ff14'})`
                    }}
                />
            </svg>
        </div>
    );
};

/* ─── MAIN SKILLS COMPONENT ──────────────────────────────── */
const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [started, setStarted] = useState(false);
    const [activeId, setActiveId] = useState(modules[0].id);
    const [hoveredId, setHoveredId] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('ALL');
    const [logs, setLogs] = useState([
        'SYS_INIT: Telemetry system standing by...',
        'READY: Select any capability module for diagnostic scan.'
    ]);

    useEffect(() => {
        if (inView) {
            const t = setTimeout(() => setStarted(true), 200);
            return () => clearTimeout(t);
        }
    }, [inView]);

    const addLog = (text) => {
        const time = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, `[${time}] ${text}`].slice(-4));
    };

    // Log diagnostic changes
    useEffect(() => {
        if (!started) return;
        const currentMod = modules.find(m => m.id === activeId);
        if (currentMod) {
            addLog(`SYS: Diagnostic request → ${currentMod.name.toUpperCase()}`);
            addLog(`VAL: Core compliance at ${currentMod.pct}% | State: ${currentMod.status}`);
        }
    }, [activeId, started]);

    // Handle filter category changes
    const handleCategoryChange = (cat) => {
        setCategoryFilter(cat);
        addLog(`CMD: Filter modified to [${cat}]`);
        // If active skill is filtered out, select first available
        const filtered = modules.filter(m => cat === 'ALL' || m.category.toUpperCase() === cat);
        if (filtered.length > 0 && !filtered.some(m => m.id === activeId)) {
            setActiveId(filtered[0].id);
        }
    };

    // Filter modules
    const filteredModules = modules.filter(m => categoryFilter === 'ALL' || m.category.toUpperCase() === categoryFilter);

    // Dynamic Display target module details
    const displayId = hoveredId || activeId;
    const selectedMod = modules.find(m => m.id === displayId) || modules[0];

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

                {/* ─── DUAL AXIS HUD INTERFACE ─── */}
                <div style={{
                    border: '1px solid rgba(57,255,20,0.18)', borderRadius: 14, overflow: 'hidden',
                    background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(16px)',
                    marginBottom: '3rem', position: 'relative'
                }}>
                    {/* Window Title Bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem',
                        background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                        <span style={{ marginLeft: '0.75rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            capability_scanner_v2.exe — DIAGNOSTIC SCANNER
                        </span>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Wifi size={12} color={started ? '#39ff14' : '#666'} />
                            <span style={{ fontSize: '0.62rem', fontFamily: "'JetBrains Mono', monospace", color: started ? '#39ff14' : '#666' }}>
                                {started ? 'HOLOGRAPHIC_HUD_ONLINE' : 'LINK_IDLE'}
                            </span>
                        </div>
                    </div>

                    {/* Boot Log Screen */}
                    <div style={{ padding: '1.25rem 1.25rem 0' }}>
                        <BootHeader started={started} />
                    </div>

                    {/* HUD Tab Controls */}
                    <div style={{
                        display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)',
                        background: 'rgba(0,0,0,0.2)', padding: '0 1rem'
                    }}>
                        {['ALL', 'ENGINEERING', 'SOFTWARE'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                style={{
                                    border: 'none', background: 'none', color: categoryFilter === cat ? '#39ff14' : 'var(--text-muted)',
                                    fontFamily: "'Share Tech Mono', monospace", fontSize: '0.78rem',
                                    padding: '0.8rem 1.25rem', cursor: 'pointer', transition: 'all 0.3s',
                                    textShadow: categoryFilter === cat ? '0 0 8px rgba(57, 255, 20, 0.4)' : 'none',
                                    position: 'relative'
                                }}
                            >
                                {categoryFilter === cat ? `[ ${cat} ]` : cat}
                                {categoryFilter === cat && (
                                    <motion.div
                                        layoutId="tabGlowLine"
                                        style={{
                                            position: 'absolute', bottom: -1, left: 0, right: 0, height: 1.5,
                                            background: '#39ff14', boxShadow: '0 0 6px #39ff14'
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* HUD Two-Column Layout */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem', padding: '1.5rem'
                    }}>
                        {/* LEFT COLUMN: Skill Selection / Levels */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{
                                display: 'grid', gridTemplateColumns: '40px 1fr 50px 70px', gap: '0.5rem',
                                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
                                color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em',
                                padding: '0 0.5rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <span>TYPE</span><span>CAPABILITY NAME</span><span style={{ textAlign: 'right' }}>VAL</span><span>STATUS</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <AnimatePresence>
                                    {filteredModules.map((mod, i) => {
                                        const isHovered = hoveredId === mod.id;
                                        const isActive = activeId === mod.id;
                                        const delay = i * 60;
                                        const count = useCountUp(mod.pct, started);

                                        return (
                                            <motion.div
                                                key={mod.id}
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3, delay: delay / 1000 }}
                                                onClick={() => setActiveId(mod.id)}
                                                onMouseEnter={() => setHoveredId(mod.id)}
                                                onMouseLeave={() => setHoveredId(null)}
                                                style={{
                                                    display: 'grid', gridTemplateColumns: '40px 1fr 50px 70px', gap: '0.5rem',
                                                    alignItems: 'center', padding: '0.75rem', borderRadius: 8,
                                                    background: isActive ? 'rgba(57, 255, 20, 0.05)' : (isHovered ? 'rgba(255,255,255,0.02)' : 'transparent'),
                                                    border: isActive ? '1px solid rgba(57, 255, 20, 0.25)' : '1px solid rgba(255, 255, 255, 0.03)',
                                                    cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s',
                                                    fontFamily: "'JetBrains Mono', monospace"
                                                }}
                                            >
                                                {/* Mini Icon */}
                                                <div style={{
                                                    width: 26, height: 26, borderRadius: 6,
                                                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: isActive ? mod.color : 'var(--text-secondary)',
                                                    boxShadow: isActive ? `0 0 5px ${mod.color}30` : 'none',
                                                    transition: 'all 0.2s'
                                                }}>
                                                    {React.cloneElement(mod.icon, { size: 12 })}
                                                </div>

                                                {/* Module Name and Progress Bar */}
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                                    <span style={{
                                                        fontSize: '0.8rem', fontWeight: 600,
                                                        color: isActive ? '#fff' : 'var(--text-primary)',
                                                        textShadow: isActive ? `0 0 8px ${mod.color}40` : 'none'
                                                    }}>
                                                        {mod.name}
                                                    </span>
                                                    {/* Progress bar line */}
                                                    <div style={{ height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 999, overflow: 'hidden' }}>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={started ? { width: `${mod.pct}%` } : {}}
                                                            transition={{ duration: 1.2, ease: 'easeOut' }}
                                                            style={{
                                                                height: '100%', background: mod.color,
                                                                boxShadow: isActive ? `0 0 6px ${mod.color}` : 'none'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Percentage */}
                                                <span style={{
                                                    fontSize: '0.85rem', fontWeight: 700, textAlign: 'right',
                                                    color: isActive ? mod.color : 'var(--text-secondary)',
                                                    textShadow: isActive ? `0 0 8px ${mod.color}50` : 'none'
                                                }}>
                                                    {started ? `${count}%` : '0%'}
                                                </span>

                                                {/* Status Indicator */}
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                    fontSize: '0.58rem', color: isActive ? statusColors[mod.status] : 'var(--text-muted)'
                                                }}>
                                                    <motion.span
                                                        animate={{ opacity: isActive ? [1, 0.3, 1] : 1 }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        style={{
                                                            width: 4, height: 4, borderRadius: '50%', background: statusColors[mod.status],
                                                            display: 'inline-block', boxShadow: isActive ? `0 0 4px ${statusColors[mod.status]}` : 'none'
                                                        }}
                                                    />
                                                    <span>{mod.status}</span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Holographic Diagnostic Visualization & Details */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
                            {/* Radar Chart Visual */}
                            <div style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: 10, padding: '1rem'
                            }}>
                                <RadarChart
                                    items={modules}
                                    hoveredId={hoveredId}
                                    setHoveredId={setHoveredId}
                                    activeId={activeId}
                                    setActiveId={setActiveId}
                                />
                            </div>

                            {/* Detailed diagnostics module display */}
                            <motion.div
                                key={selectedMod.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'rgba(57, 255, 20, 0.02)', border: `1px solid rgba(57, 255, 20, 0.12)`,
                                    borderRadius: 10, padding: '1.25rem', fontFamily: "'JetBrains Mono', monospace",
                                    display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative',
                                    boxShadow: `inset 0 0 15px rgba(57, 255, 20, 0.02)`
                                }}
                            >
                                {/* Decorative scanner tags */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.58rem', color: 'var(--text-muted)' }}>
                                    <span>[ DIAG_READOUT: {selectedMod.id} ]</span>
                                    <span style={{ color: selectedMod.color }}>● SCANNING_NOMINAL</span>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.15rem', color: '#fff', fontFamily: "'Orbitron', sans-serif", marginBottom: '0.2rem' }}>
                                        {selectedMod.name}
                                    </h3>
                                    <span style={{ fontSize: '0.62rem', color: selectedMod.color }}>
                                        CATEGORY: {selectedMod.category.toUpperCase()} | VAL: {selectedMod.pct}% COMPLIANT
                                    </span>
                                </div>

                                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
                                    {selectedMod.description}
                                </p>

                                <div>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                                        SUB-SKILLS & TOPOLOGIES:
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                        {selectedMod.subskills.map((sub, sIdx) => (
                                            <span key={sIdx} style={{
                                                fontSize: '0.62rem', color: selectedMod.color,
                                                background: 'rgba(255,255,255,0.02)', border: `1px solid rgba(255, 255, 255, 0.08)`,
                                                borderRadius: 4, padding: '0.15rem 0.4rem', transition: 'all 0.2s'
                                            }}>
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <TelemetryWaveform color={selectedMod.color} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Console Terminal */}
                    <div style={{
                        borderTop: '1px solid rgba(57,255,20,0.12)', background: 'rgba(5,5,8,0.9)',
                        padding: '0.8rem 1.25rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem',
                        color: '#39ff14', display: 'flex', flexDirection: 'column', gap: '0.2rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.3rem', marginBottom: '0.3rem', fontSize: '0.58rem' }}>
                            <span>DIAGNOSTIC TELEMETRY STREAM</span>
                            <span>CTRL_PORT: 8080</span>
                        </div>
                        {logs.map((log, idx) => (
                            <div key={idx} style={{ opacity: idx === logs.length - 1 ? 1 : 0.6 }}>
                                <span style={{ color: 'var(--text-muted)' }}>&gt;</span> {log}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── LANGUAGE MODULES ─── */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>Language Protocols</h2>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 0 }}>
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
                                <span style={{ color: 'var(--text-muted)' }}>{'>'}</span><span style={{ color: lang.color }}>{lang.id}</span>
                                <span style={{ color: 'var(--text-muted)' }}>|</span><span>{lang.name}</span><span style={{ color: 'var(--text-muted)' }}>→</span>
                                <span style={{ color: lang.color }}>{lang.level}</span>
                                <CheckCircle2 size={11} color={lang.color} style={{ marginLeft: 'auto' }} />
                            </motion.div>
                        ))}
                        <div style={{
                            marginTop: '0.4rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)'
                        }}>
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
