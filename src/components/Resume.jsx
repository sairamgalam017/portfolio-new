import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

/* ─── RESUME DATA ─────────────────────────────────────────── */
const personalInfo = {
    name: 'Galam Sairam',
    title: 'Electrical & Electronics Engineer | IoT Enthusiast',
    email: 'sairam.galam01@gmail.com',
    phone: '+91 89190 69496',
    location: 'Vijayawada, Andhra Pradesh',
    linkedin: 'linkedin.com/in/sairam-galam-b2766039b',
    github: 'github.com/sairamgalam017',
    dob: '21/07/2005',
};

const summary = `Dedicated Electrical and Electronics Engineering professional specializing in IoT architectures and embedded system design. Proven expertise in developing intelligent automation solutions, including telemetric energy monitoring, precision agriculture systems, and electromechanical solar tracking mechanisms. Proficient in power electronics, control systems, and firmware development using C, Python, and MATLAB/Simulink.`;

const education = [
    { degree: 'B.Tech in EEE', institution: 'Andhra Loyola Institute of Engineering and Technology', period: '2024 – 2027', grade: 'Pursuing' },
    { degree: 'Diploma in EEE', institution: 'Usharama College of Engineering and Technology', period: '2021 – 2024', grade: '80.9%' },
    { degree: 'SSC', institution: 'Z.P.H. School, Nidamanuru', period: 'Completed', grade: '7.7 CGPA' },
];

const skills = {
    'Engineering': ['Power Systems', 'Power Electronics', 'Analog Circuits', 'Digital Electronics', 'Internet of Things'],
    'Software': ['MATLAB / Simulink', 'C Programming', 'Basic Python'],
    'Tools & Platforms': ['Arduino', 'ESP8266 / ESP32', 'STM32', 'Simulink', 'Git & GitHub'],
};

const projects = [
    {
        title: 'Advanced Energy Meter',
        tech: 'IoT · PZEM-004T · ESP-8266 · Blynk Cloud',
        desc: 'Engineered an IoT-enabled telemetry meter using Blynk Cloud, facilitating real-time load analytics, automated tariff computation, tamper-proofing mechanisms, and remote relay actuation via Wi-Fi.',
    },
    {
        title: 'IoT Based Smart Agricultural System',
        tech: 'IoT · ESP8266 · Soil Moisture Sensor · Cloud',
        desc: 'Developed a closed-loop precision agriculture architecture utilizing ESP8266 microcontrollers to dynamically regulate irrigation via real-time environmental data acquisition and cloud-based telemetrics.',
    },
    {
        title: 'Dual Axis Solar Monitoring & Controlling System',
        tech: 'Arduino · Servo Motors · LDR Sensors · Solar Panel',
        desc: 'Designed an autonomous dual-axis electromechanical tracking array. Implemented LDR-based sensory feedback loops to dynamically optimize photovoltaic panel orientation and maximize irradiance capture.',
    },
];

const experience = [
    { title: 'INTERN EXPE in GENCO', org: 'GENCO', period: 'Recent', desc: 'Acquired hands-on industrial exposure in power generation operations, observing turbine mechanics and high-voltage grid synchronization processes.' },
    { title: 'IoT & Embedded Systems Workshop', org: 'MSME × ALIET EEE Dept.', period: 'Sep 2025', desc: 'Developed functional IoT prototypes utilizing STM32 microcontrollers; implemented sensor interfacing, automated actuation logic, and low-level peripheral configuration.' },
    { title: 'AHACKS 24-Hour Hackathon', org: 'ALIET Techpreneur Club × CSE Dept.', period: '2025', desc: 'Engineered rapid technology prototypes in a high-pressure environment, emphasizing agile development, system integration, and collaborative problem-solving.' },
    { title: 'Industrial Visit – Jocil Limited', org: 'Dokiparru, Guntur', period: '', desc: 'Analyzed industrial-scale chemical processing plants, focusing on thermodynamic operations, fractionation columns, and automated control systems.' },
    { title: 'Community Outreach', org: 'ALIET, Vijayawada', period: '', desc: 'Spearheaded community engagement initiatives to disseminate technical awareness and foster localized socio-technical development.' },
];

const certifications = [
    'NPTEL – Internet of Things (IoT) Qualified',
    'MathWorks – MATLAB Onramp',
    'DIYguru – EV Engineering Mastercourse (Grade A+)',
    'SkillDzire / APSCHE – Solar PV System Design Internship',
    'Solar PV Systems Certification',
    'Robotics Certification',
    'IoT Technology Certification',
];

const achievements = [
    'Branch Topper – All 3 years of Diploma at Usharama College',
    'Innovathon Winner – 3rd Prize for Advanced Energy Meter (ALIET)',
];

const languages = [
    { name: 'Telugu', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Conversational' },
];

/* ─── COMPONENT ──────────────────────────────────────────── */
const Resume = () => {
    const resumeRef = useRef(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" style={{ padding: 'var(--spacing-section) 0' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* Download / Print button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="resume-no-print"
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 className="section-title">Resume</h2>
                    <p style={{
                        color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem',
                        fontSize: '1.05rem', lineHeight: 1.7,
                    }}>
                        My complete single-page resume. Click below to print or save as PDF.
                    </p>
                    <motion.button
                        onClick={handlePrint}
                        whileHover={{ scale: 1.03, boxShadow: '0 6px 25px rgba(20, 158, 202, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'var(--primary)', color: '#ffffff',
                            padding: '0.9rem 2.2rem', borderRadius: '9999px',
                            fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <Download size={20} /> Download / Print
                    </motion.button>
                </motion.div>

                {/* ─── THE RESUME ─── */}
                <div ref={resumeRef} className="cv-body" style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                }}>

                    {/* ── HEADER ── */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                        borderBottom: '2px solid var(--primary)',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        {/* Decorative accent */}
                        <div style={{
                            position: 'absolute', top: 0, right: 0, width: '200px', height: '100%',
                            background: 'linear-gradient(135deg, transparent 0%, rgba(20, 158, 202, 0.06) 100%)',
                            pointerEvents: 'none',
                        }} />

                        <h1 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800,
                            marginBottom: '0.3rem', letterSpacing: '-0.02em',
                            background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                            {personalInfo.name}
                        </h1>
                        <p style={{
                            color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 600,
                            marginBottom: '1rem', letterSpacing: '0.02em',
                        }}>
                            {personalInfo.title}
                        </p>

                        {/* Contact grid */}
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.5rem',
                            fontSize: '0.8rem', color: 'var(--text-secondary)',
                        }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <Mail size={13} color="var(--primary)" /> {personalInfo.email}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <Phone size={13} color="var(--primary)" /> {personalInfo.phone}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <MapPin size={13} color="var(--primary)" /> {personalInfo.location}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <Linkedin size={13} color="var(--primary)" /> {personalInfo.linkedin}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <Github size={13} color="var(--primary)" /> {personalInfo.github}
                            </span>
                        </div>
                    </div>

                    {/* ── TWO-COLUMN BODY ── */}
                    <div className="cv-body-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        minHeight: 0,
                    }}>

                        {/* ── LEFT COLUMN ── */}
                        <div style={{
                            padding: 'clamp(1.2rem, 3vw, 2rem)',
                            borderRight: '1px solid var(--border-color)',
                        }}>

                            {/* Summary */}
                            <SectionHeading title="Profile Summary" />
                            <p style={{
                                fontSize: '0.82rem', lineHeight: 1.7,
                                color: 'var(--text-secondary)', marginBottom: '1.2rem',
                            }}>
                                {summary}
                            </p>

                            {/* Education */}
                            <SectionHeading title="Education" />
                            <div style={{ marginBottom: '1.2rem' }}>
                                {education.map((ed, i) => (
                                    <div key={i} style={{
                                        marginBottom: '0.8rem',
                                        paddingLeft: '0.75rem',
                                        borderLeft: '2px solid var(--primary)',
                                    }}>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                            {ed.degree}
                                        </div>
                                        <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 500 }}>
                                            {ed.institution}
                                        </div>
                                        <div style={{
                                            fontSize: '0.75rem', color: 'var(--text-muted)',
                                            display: 'flex', justifyContent: 'space-between', marginTop: '0.15rem',
                                        }}>
                                            <span>{ed.period}</span>
                                            <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{ed.grade}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Skills */}
                            <SectionHeading title="Technical Skills" />
                            <div style={{ marginBottom: '1.2rem' }}>
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} style={{ marginBottom: '0.6rem' }}>
                                        <div style={{
                                            fontSize: '0.75rem', fontWeight: 700,
                                            color: 'var(--primary)', textTransform: 'uppercase',
                                            letterSpacing: '0.05em', marginBottom: '0.25rem',
                                        }}>
                                            {category}
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                            {items.map((skill, i) => (
                                                <span key={i} style={{
                                                    fontSize: '0.73rem',
                                                    padding: '0.2rem 0.55rem',
                                                    borderRadius: '9999px',
                                                    background: 'rgba(20, 158, 202, 0.08)',
                                                    border: '1px solid rgba(20, 158, 202, 0.15)',
                                                    color: 'var(--text-secondary)',
                                                    fontWeight: 500,
                                                }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Languages */}
                            <SectionHeading title="Languages" />
                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                {languages.map((lang, i) => (
                                    <div key={i} style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                            {lang.name}
                                        </div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                            {lang.level}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div style={{ padding: 'clamp(1.2rem, 3vw, 2rem)' }}>

                            {/* Projects */}
                            <SectionHeading title="Projects" />
                            <div style={{ marginBottom: '1.2rem' }}>
                                {projects.map((proj, i) => (
                                    <div key={i} style={{
                                        marginBottom: '0.9rem',
                                        paddingLeft: '0.75rem',
                                        borderLeft: '2px solid #a78bfa',
                                    }}>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                            {proj.title}
                                        </div>
                                        <div style={{
                                            fontSize: '0.7rem', color: '#a78bfa', fontWeight: 600,
                                            marginBottom: '0.2rem', letterSpacing: '0.02em',
                                        }}>
                                            {proj.tech}
                                        </div>
                                        <p style={{
                                            fontSize: '0.78rem', color: 'var(--text-secondary)',
                                            lineHeight: 1.6, margin: 0,
                                        }}>
                                            {proj.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Experience */}
                            <SectionHeading title="Experience & Activities" />
                            <div style={{ marginBottom: '1.2rem' }}>
                                {experience.map((exp, i) => (
                                    <div key={i} style={{
                                        marginBottom: '0.7rem',
                                        paddingLeft: '0.75rem',
                                        borderLeft: '2px solid #44a87a',
                                    }}>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between',
                                            alignItems: 'baseline', gap: '0.5rem',
                                        }}>
                                            <div style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                                {exp.title}
                                            </div>
                                            {exp.period && (
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                                                    {exp.period}
                                                </div>
                                            )}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#44a87a', fontWeight: 500 }}>
                                            {exp.org}
                                        </div>
                                        <p style={{
                                            fontSize: '0.76rem', color: 'var(--text-secondary)',
                                            lineHeight: 1.55, margin: '0.1rem 0 0',
                                        }}>
                                            {exp.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <SectionHeading title="Certifications" />
                            <ul style={{
                                margin: '0 0 1.2rem 0', paddingLeft: '1rem',
                                listStyle: 'none',
                            }}>
                                {certifications.map((cert, i) => (
                                    <li key={i} style={{
                                        fontSize: '0.76rem', color: 'var(--text-secondary)',
                                        marginBottom: '0.3rem', lineHeight: 1.5,
                                        position: 'relative', paddingLeft: '0.8rem',
                                    }}>
                                        <span style={{
                                            position: 'absolute', left: 0, top: '0.45em',
                                            width: '5px', height: '5px', borderRadius: '50%',
                                            background: '#dba535',
                                        }} />
                                        {cert}
                                    </li>
                                ))}
                            </ul>

                            {/* Achievements */}
                            <SectionHeading title="Achievements" />
                            <ul style={{
                                margin: 0, paddingLeft: '1rem', listStyle: 'none',
                            }}>
                                {achievements.map((ach, i) => (
                                    <li key={i} style={{
                                        fontSize: '0.76rem', color: 'var(--text-secondary)',
                                        marginBottom: '0.3rem', lineHeight: 1.5,
                                        position: 'relative', paddingLeft: '0.8rem',
                                    }}>
                                        <span style={{
                                            position: 'absolute', left: 0, top: '0.45em',
                                            width: '5px', height: '5px', borderRadius: '50%',
                                            background: '#f472b6',
                                        }} />
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── PRINT STYLES ─── */}
            <style>{`
                @media print {
                    /* Hide everything else completely so they take up 0 space (fixes blank pages) */
                    body { background: white !important; }
                    nav, footer, .custom-cursor, #hero, #about, #skills, #projects, #education, #achievements, #contact, .resume-no-print {
                        display: none !important;
                    }
                    
                    #resume {
                        padding: 0 !important; margin: 0 !important;
                        background: white !important;
                    }
                    
                    /* Reset cv-body layout for natural print flow and enable colors */
                    .cv-body {
                        position: relative !important;
                        width: 100%; margin: 0; padding: 0;
                        border: none !important; box-shadow: none !important;
                        background: white !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    /* Keep the dark header in print for a premium look */
                    .cv-body h1 {
                        -webkit-text-fill-color: white !important;
                        color: white !important;
                        background: transparent !important;
                    }
                    
                    /* Main text colors */
                    .cv-body p, .cv-body li { color: #333 !important; }
                    .cv-body h2, .cv-body h3 { color: #111 !important; }
                    
                    /* Fix borders that might be invisible */
                    .cv-body [style*="borderRight"] { border-right: 1px solid #ddd !important; }
                    .cv-body [style*="border-bottom: 1.5px"] { border-bottom: 1.5px solid #ddd !important; }

                    /* Reduce spacing to guarantee 1-page fit */
                    .cv-body { font-size: 0.95em !important; }
                    .cv-body [style*="padding: clamp"] { padding: 1.5rem 2rem !important; }
                    .cv-body [style*="margin-bottom: 1.2rem"] { margin-bottom: 0.8rem !important; }

                    .cv-body-grid { grid-template-columns: 1fr 1fr !important; }
                    .resume-no-print { display: none !important; }

                    @page {
                        size: A4;
                        margin: 5mm;
                    }

                    /* Prevent breaks inside items */
                    .cv-body div {
                        break-inside: avoid; page-break-inside: avoid;
                    }
                }

                @media (max-width: 700px) {
                    .cv-body-grid { grid-template-columns: 1fr !important; }
                    .cv-body-grid > div:first-child {
                        border-right: none !important;
                        border-bottom: 1px solid var(--border-color) !important;
                    }
                }
            `}</style>
        </section>
    );
};

/* ─── REUSABLE SECTION HEADING ─────────────────────────────── */
const SectionHeading = ({ title }) => (
    <div style={{
        fontSize: '0.85rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.7rem',
        paddingBottom: '0.35rem',
        borderBottom: '1.5px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
    }}>
        <span style={{
            width: '3px', height: '14px',
            background: 'var(--primary)', borderRadius: '2px',
        }} />
        {title}
    </div>
);

export default Resume;
