import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Building, Briefcase, Code2, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import TechElement from './TechElement';

const educationData = [
    {
        title: 'B.Tech in EEE',
        institution: 'Andhra Loyola Institute of Engineering and Technology',
        period: '2024 - 2027',
        grade: 'Pursuing',
        icon: <GraduationCap color="#64ffda" />,
        color: '#64ffda',
        hasTechElement: true
    },
    {
        title: 'Diploma in EEE',
        institution: 'Usharama College of Engineering and Technology',
        period: '2021 - 2024',
        grade: 'Top 1 in all 3 years',
        icon: <GraduationCap color="#f59e0b" />,
        color: '#f59e0b',
        hasTechElement: true
    },
    {
        title: 'SSC',
        institution: 'Z.P.H. SCHOOL, NIDAMANURU',
        period: 'Completed',
        grade: 'Satisfactory',
        icon: <GraduationCap color="#ec4899" />,
        color: '#ec4899',
        hasTechElement: false
    }
];

const experienceData = [
    {
        title: 'Industrial Visit',
        institution: 'Jocil Limited',
        period: 'Dokiparru, Guntur',
        description: 'Observed fractionation and distillation processes in fatty acid production.',
        icon: <Building color="#3b82f6" />,
        color: '#3b82f6',
        images: ['/industrial-visit.jpeg']
    },
    {
        title: 'Internship Experience',
        institution: 'Internship',
        period: 'Recent',
        description: 'Gained practical experience in the field.',
        icon: <Briefcase color="#10b981" />,
        color: '#10b981',
        images: ['/certificates/experience-certificate.jpeg']
    },
    {
        title: 'AHACKS 24-Hour Hackathon',
        institution: 'Andhra Loyola Institute of Engineering & Technology',
        period: 'ALIET Techpreneur Club × Dept. of CSE',
        description: 'Participated in a 24-hour hackathon, collaborating with a team to build innovative tech solutions under intense time pressure.',
        icon: <Code2 color="#a855f7" />,
        color: '#a855f7',
        images: ['/experiences/ahacks-group.jpg', '/experiences/ahacks-working.jpg']
    },
    {
        title: 'IoT & Embedded Systems Workshop',
        institution: 'SRC e-Solutions × ALIET EEE Dept.',
        period: 'Sep 08–13, 2025',
        description: 'Completed a week-long skill course on "Building IoT Solutions with Embedded Systems" — programmed STM32 boards, built a smart irrigation IoT prototype with soil sensors and a water pump.',
        icon: <Briefcase color="#f97316" />,
        color: '#f97316',
        images: ['/experiences/embedded-stm32.png', '/experiences/iot-prototype.png']
    },
    {
        title: 'Community Outreach',
        institution: 'Andhra Loyola Institute of Engineering & Technology',
        period: 'Vijayawada, Andhra Pradesh',
        description: 'Engaged in community outreach activities, interacting with locals and spreading awareness as part of college social initiatives.',
        icon: <Heart color="#ec4899" />,
        color: '#ec4899',
        images: ['/experiences/community-visit.jpg']
    }
];

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [gallery, setGallery] = useState(null); // { images: [], currentIndex: 0 }

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
        <section id="education" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <div>
                                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        {React.cloneElement(item.icon, { size: 48 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: item.color, marginBottom: '0.5rem', fontWeight: '500' }}>{item.institution}</p>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        <p>{item.period}</p>
                                        <p>{item.grade}</p>
                                    </div>
                                    {item.hasTechElement && (
                                        <div style={{ marginTop: '1rem', width: '100%', minHeight: '150px' }}>
                                            <TechElement />
                                        </div>
                                    )}
                                </div>

                            </motion.div>
                        ))}
                    </div>

                    <h2 className="section-title">Experience & Visits</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="card"
                                style={{ textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ opacity: (hoveredIndex === index && item.images?.length) ? 0 : 1, transition: 'opacity 0.3s' }}>
                                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        {React.cloneElement(item.icon, { size: 48 })}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: item.color, marginBottom: '0.5rem', fontWeight: '500' }}>{item.institution}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{item.period}</p>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
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
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: `url(${item.images[0]}) center/cover no-repeat`,
                                                zIndex: 10,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                padding: '0.5rem',
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-end',
                                                height: '40%'
                                            }}>
                                                {item.images.length > 1 ? `Tap to View ${item.images.length} Photos` : 'Tap to Open'}
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
                                background: 'rgba(0, 0, 0, 0.92)', zIndex: 1000,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: '2rem'
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeGallery}
                                style={{
                                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                                    background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10
                                }}
                            >
                                <X size={20} />
                            </button>

                            {/* Prev button */}
                            {gallery.images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
                                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10,
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}

                            <motion.img
                                key={gallery.currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                src={gallery.images[gallery.currentIndex]}
                                alt="Experience Photo"
                                onClick={e => e.stopPropagation()}
                                style={{
                                    maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain',
                                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                                }}
                            />

                            {/* Next button */}
                            {gallery.images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
                                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10,
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            )}

                            {/* Image counter */}
                            {gallery.images.length > 1 && (
                                <div style={{
                                    position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                                    background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '4px 16px',
                                    color: '#fff', fontSize: '0.85rem', backdropFilter: 'blur(4px)'
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

