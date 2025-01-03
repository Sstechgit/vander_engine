import React, { useEffect, useState } from 'react';
import './creature.css';

const FloatingCreature = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="floating-creature"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            🐉 {/* Replace this emoji with your creature */}
        </div>
    );
};

export default FloatingCreature;
