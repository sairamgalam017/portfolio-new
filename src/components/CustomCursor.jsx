import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 500 };
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

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @media (pointer: fine) {
                * { cursor: none !important; }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }}>
            {/* Simple dot cursor */}
            <motion.div style={{
                position: 'fixed',
                left: cursorX,
                top: cursorY,
                width: '6px',
                height: '6px',
                background: '#149eca',
                borderRadius: '50%',
                x: '-50%',
                y: '-50%',
            }} />

            {/* Outer ring */}
            <motion.div
                animate={{
                    scale: isHovering ? 1.6 : 1,
                    opacity: isHovering ? 0.6 : 0.3,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    position: 'fixed',
                    left: cursorXSpring,
                    top: cursorYSpring,
                    width: '32px',
                    height: '32px',
                    border: '1.5px solid #149eca',
                    borderRadius: '50%',
                    x: '-50%',
                    y: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
