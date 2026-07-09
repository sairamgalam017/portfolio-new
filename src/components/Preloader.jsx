import React from 'react';
import { motion } from 'framer-motion';

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
                background: '#23272f',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column'
            }}
        >
            {/* Clean pulsing loader */}
            <div style={{ position: 'relative', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: '#149eca',
                        borderRightColor: '#a78bfa',
                    }}
                />

                {/* Inner dot */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #149eca, #a78bfa)',
                    }}
                />
            </div>

            <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    marginTop: '1.5rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em',
                    fontSize: '0.9rem',
                    fontWeight: 500
                }}
            >
                Loading...
            </motion.p>
        </motion.div>
    );
};

export default Preloader;
