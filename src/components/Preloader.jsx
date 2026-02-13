import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Activity } from 'lucide-react';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0a0a0f',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: 'var(--primary)',
                        borderRightColor: 'var(--secondary)',
                    }}
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '70%',
                        height: '70%',
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: 'var(--secondary)',
                        borderLeftColor: 'var(--primary)',
                    }}
                />

                {/* Center Icon */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Zap size={40} color="var(--primary)" fill="var(--primary)" />
                </motion.div>
            </div>

            <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    marginTop: '2rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.2em',
                    fontSize: '1.2rem'
                }}
            >
                INITIALIZING SYSTEM...
            </motion.h2>
        </motion.div>
    );
};

export default Preloader;
