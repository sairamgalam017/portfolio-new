import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Building, Briefcase, Code2, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';

const educationData = [
    {
        title: 'B.Tech in EEE',
        institution: 'Andhra Loyola Institute of Engineering and Technology',
        period: '2024 - 2027',
        grade: 'Pursuing',
        icon: <GraduationCap />,
        color: '#149eca',
    },
    {
        title: 'Diploma in EEE',
        institution: 'Usharama College of Engineering and Technology',
        period: '2021 - 2024',
        grade: 'Top 1 in all 3 years',
        icon: <GraduationCap />,
        color: '#dba535',
    },
    {
        title: 'SSC',
        institution: 'Z.P.H. SCHOOL, NIDAMANURU',
        period: 'Completed',
        grade: 'Satisfactory',
        icon: <GraduationCap />,
        color: '#f472b6',
    }
];

const experienceData = [
    {
        title: 'Industrial Visit',
        institution: 'Jocil Limited',
        period: 'Dokiparru, Guntur',
        description: 'Observed fractionation and distillation processes in fatty acid production.',
        icon: <Building />,
        color: '#149eca',
        images: ['/industrial-visit.jpeg']
    },
    {
        title: 'Internship Experience',
        institution: 'Internship',
        period: 'Recent',
        description: 'Gained practical experience in the field.',
        icon: <Briefcase />,
        color: '#44a87a',
        images: ['/certificates/experience-certificate.jpeg']
    },
    {
        title: 'AHACKS 24-Hour Hackathon',
        institution: 'Andhra Loyola Institute of Engineering & Technology',
        period: 'ALIET Techpreneur Club × Dept. of CSE',
        description: 'Participated in a 24-hour hackathon, collaborating with a team to build innovative tech solutions under intense time pressure.',
        icon: <Code2 />,
        color: '#a78bfa',
        images: ['/experiences/ahacks-group.jpg', '/experiences/ahacks-working.jpg']
    },
    {
        title: 'IoT & Embedded Systems Workshop',
        institution: 'SRC e-Solutions × ALIET EEE Dept.',
        period: 'Sep 08–13, 2025',
        description: 'Completed a week-long skill course on "Building IoT Solutions with Embedded Systems" — programmed STM32 boards, built a smart irrigation IoT prototype with soil sensors and a water pump.',
        icon: <Briefcase />,
        color: '#dba535',
        images: ['/experiences/embedded-stm32.png', '/experiences/iot-prototype.png']
    },
    {
        title: 'Community Outreach',
        institution: 'Andhra Loyola Institute of Engineering & Technology',
        period: 'Vijayawada, Andhra Pradesh',
        description: 'Engaged in community outreach activities, interacting with locals and spreading awareness as part of college social initiatives.',
        icon: <Heart />,
        color: '#f472b6',
        images: ['/experiences/community-visit.jpg']
    }
];

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [gallery, setGallery] = useState(null);

    const openGallery = (images, startIndex = 0) => {
        setGallery({ images, currentIndex: startIndex });
    };

    const closeGallery = () => setGallery(null);

    const prevImage = (e) => {
        e.stopPropagation();
        setGallery(g => ({ ...g, currentIndex: (g.currentIndex - 1 + g.images.length) % g.images.length }));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setGallery(g => ({ ...g, currentIndex: (g.currentIndex + 1) % g.images.length }));
    };

    return (
        <section id="education" style={{
            padding: 'var(--spacing-section) 0',
            background: 'var(--gradient-wash-right)',
            borderTop: '1px solid var(--border-color)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'all 0.25s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Top accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                    background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                                }} />

                                <div style={{
                                    width: 56, height: 56, borderRadius: '1rem',
                                    background: `${item.color}15`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                    color: item.color,
                                }}>
                                    {React.cloneElement(item.icon, { size: 26 })}
                                </div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 700 }}>{item.title}</h3>
                                <p style={{ color: item.color, marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>{item.institution}</p>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                    <p>{item.period}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.25rem' }}>{item.grade}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="section-title">Experience & Visits</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'all 0.25s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    minHeight: '260px',
                                }}
                            >
                                <div style={{ opacity: (hoveredIndex === index && item.images?.length) ? 0 : 1, transition: 'opacity 0.3s' }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: '0.75rem',
                                        background: `${item.color}15`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1rem', color: item.color,
                                    }}>
                                        {React.cloneElement(item.icon, { size: 22 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 700 }}>{item.title}</h3>
                                    <p style={{ color: item.color, marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.85rem' }}>{item.institution}</p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{item.period}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</p>
                                </div>

                                <AnimatePresence>
                                    {item.images?.length > 0 && hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onClick={() => openGallery(item.images, 0)}
                                            style={{
                                                position: 'absolute', top: 0, left: 0,
                                                width: '100%', height: '100%',
                                                background: `url(${item.images[0]}) center/cover no-repeat`,
                                                zIndex: 10,
                                                display: 'flex', flexDirection: 'column',
                                                justifyContent: 'flex-end', alignItems: 'center',
                                                cursor: 'pointer', borderRadius: '1rem',
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute', bottom: 0, left: 0,
                                                width: '100%', padding: '1rem',
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                                                color: 'white', fontSize: '0.85rem', fontWeight: 500,
                                                display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                                                height: '50%', borderRadius: '0 0 1rem 1rem',
                                            }}>
                                                {item.images.length > 1 ? `View ${item.images.length} Photos` : 'View Photo'}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Lightbox Modal */}
                <AnimatePresence>
                    {gallery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeGallery}
                            style={{
                                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'rgba(0, 0, 0, 0.9)', zIndex: 1000,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: '2rem', backdropFilter: 'blur(8px)',
                            }}
                        >
                            <button
                                onClick={closeGallery}
                                style={{
                                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                                    background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                                    width: '44px', height: '44px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10,
                                }}
                            >
                                <X size={20} />
                            </button>

                            {gallery.images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10,
                                    }}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}

                            <motion.img
                                key={gallery.currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                src={gallery.images[gallery.currentIndex]}
                                alt="Experience Photo"
                                onClick={e => e.stopPropagation()}
                                style={{
                                    maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain',
                                    borderRadius: '1rem',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                }}
                            />

                            {gallery.images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10,
                                    }}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            )}

                            {gallery.images.length > 1 && (
                                <div style={{
                                    position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                                    background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '0.4rem 1rem',
                                    color: '#fff', fontSize: '0.85rem', backdropFilter: 'blur(4px)',
                                }}>
                                    {gallery.currentIndex + 1} / {gallery.images.length}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Education;
