import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    // We use a small offset so it's initially off-screen
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config for the outer ring (CAD crosshair)
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const isClickable = e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Inject global CSS to hide default cursor completely
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            * { cursor: none !important; }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const circuitGreen = "#00FF41";

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }}>
            {/* Inner Dot (Instant track) */}
            <motion.div style={{
                position: 'fixed',
                left: cursorX,
                top: cursorY,
                width: '4px',
                height: '4px',
                background: circuitGreen,
                borderRadius: '50%',
                x: '-50%',
                y: '-50%',
                boxShadow: `0 0 8px ${circuitGreen}`
            }} />

            {/* Outer CAD Circle with Notches (Spring track) */}
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    position: 'fixed',
                    left: cursorXSpring,
                    top: cursorYSpring,
                    width: '30px',
                    height: '30px',
                    border: `1px solid ${circuitGreen}`,
                    borderRadius: '50%',
                    x: '-50%',
                    y: '-50%',
                    boxShadow: isHovering ? `0 0 15px rgba(0, 255, 65, 0.4), inset 0 0 10px rgba(0, 255, 65, 0.4)` : `0 0 5px rgba(0, 255, 65, 0.2)`,
                }}
            >
                {/* Top Notch (30px diameter -> center is 15. Width 2 -> left 14px) */}
                <div style={{ position: 'absolute', top: '-4px', left: '13px', width: '2px', height: '6px', background: circuitGreen, boxShadow: `0 0 5px ${circuitGreen}` }} />
                {/* Bottom Notch */}
                <div style={{ position: 'absolute', bottom: '-4px', left: '13px', width: '2px', height: '6px', background: circuitGreen, boxShadow: `0 0 5px ${circuitGreen}` }} />
                {/* Left Notch */}
                <div style={{ position: 'absolute', left: '-4px', top: '13px', width: '6px', height: '2px', background: circuitGreen, boxShadow: `0 0 5px ${circuitGreen}` }} />
                {/* Right Notch */}
                <div style={{ position: 'absolute', right: '-4px', top: '13px', width: '6px', height: '2px', background: circuitGreen, boxShadow: `0 0 5px ${circuitGreen}` }} />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
