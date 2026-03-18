import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {

    return (
        <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* Contact Info */}
                        <div style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '600px', width: '100%' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Let's Talk</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                                        <p style={{ fontWeight: '500' }}>sairam.galam01@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</h4>
                                        <p style={{ fontWeight: '500' }}>+91 89190 69496</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                                        <p style={{ fontWeight: '500' }}>Vijayawada, Enikepadu</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>LinkedIn</h4>
                                        <a href="https://www.linkedin.com/in/sairam-galam-b2766039b" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                                            Connect Profile
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Instagram size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instagram</h4>
                                        <a href="https://www.instagram.com/sairam_galam_017/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                                            Follow Me
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Twitter size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>X (Twitter)</h4>
                                        <a href="https://x.com/@saira74438" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                                            Follow Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
