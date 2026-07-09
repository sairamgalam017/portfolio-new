import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const contactItems = [
    { icon: <Mail />, label: 'Email', value: 'sairam.galam01@gmail.com', href: 'mailto:sairam.galam01@gmail.com', color: '#149eca' },
    { icon: <Phone />, label: 'Phone', value: '+91 89190 69496', href: 'tel:+918919069496', color: '#44a87a' },
    { icon: <MapPin />, label: 'Location', value: 'Vijayawada, Enikepadu', href: null, color: '#dba535' },
    { icon: <Linkedin />, label: 'LinkedIn', value: 'Connect Profile', href: 'https://www.linkedin.com/in/sairam-galam-b2766039b', color: '#149eca' },
    { icon: <Instagram />, label: 'Instagram', value: 'Follow Me', href: 'https://www.instagram.com/sairam_galam_017/', color: '#f472b6' },
    { icon: <Twitter />, label: 'X (Twitter)', value: 'Follow Me', href: 'https://x.com/@saira74438', color: '#58c4dc' },
    { icon: <Github />, label: 'GitHub', value: 'View Profile', href: 'https://github.com/sairamgalam017', color: '#99a1b3' },
];

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: 'var(--spacing-section) 0',
            background: 'var(--gradient-wash-left)',
            borderTop: '1px solid var(--border-color)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            background: 'var(--bg-card)',
                            padding: '2.5rem',
                            borderRadius: '1.25rem',
                            border: '1px solid var(--border-color)',
                            maxWidth: '600px',
                            width: '100%',
                            boxShadow: 'var(--shadow-card)',
                        }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 700 }}>Let's Talk</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {contactItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        viewport={{ once: true }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                                    >
                                        <div style={{
                                            width: 44, height: 44,
                                            borderRadius: '0.75rem',
                                            background: `${item.color}12`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: item.color,
                                            flexShrink: 0,
                                        }}>
                                            {React.cloneElement(item.icon, { size: 20 })}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.1rem' }}>{item.label}</h4>
                                            {item.href ? (
                                                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
                                                    fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem',
                                                    transition: 'color 0.2s',
                                                }}
                                                    onMouseEnter={e => e.target.style.color = item.color}
                                                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p style={{ fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
