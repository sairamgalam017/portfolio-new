import React from 'react';
import { motion } from 'framer-motion';

/**
 * CircularGauge — animated SVG arc gauge
 * Props:
 *   pct   {number}  0-100 percentage value
 *   color {string}  stroke colour (hex / CSS)
 *   size  {number}  outer diameter in px (default 60)
 */
const CircularGauge = ({ pct = 0, color = '#39ff14', size = 60 }) => {
    const strokeWidth = size * 0.1;
    const radius = (size - strokeWidth) / 2;
    const cx = size / 2;
    const cy = size / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = (pct / 100) * circumference;
    const gap = circumference - dash;

    return (
        <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
            {/* Background track */}
            <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
                <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={strokeWidth}
                />
                {/* Animated progress arc */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference}`}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: gap }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    style={{
                        filter: `drop-shadow(0 0 4px ${color}88)`,
                    }}
                />
            </svg>

            {/* Centre label */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: size * 0.22,
                    fontWeight: 700,
                    color: color,
                    lineHeight: 1,
                    textShadow: `0 0 8px ${color}66`,
                }}>
                    {pct}
                </span>
            </div>
        </div>
    );
};

export default CircularGauge;
