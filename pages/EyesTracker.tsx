// EyesTracker.tsx
import React, { useEffect, useRef } from 'react';
import styles from './EyesTracker.module.css';

export default function EyesTracker() {
    const leftPupilRef = useRef<HTMLDivElement>(null);
    const rightPupilRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const movePupil = (e: MouseEvent) => {
            const eyes = [
                { eye: document.querySelector(`.${styles.eye}.${styles.left}`)!, pupil: leftPupilRef.current! },
                { eye: document.querySelector(`.${styles.eye}.${styles.right}`)!, pupil: rightPupilRef.current! },
            ];

            eyes.forEach(({ eye, pupil }) => {
                const rect = eye.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                const angle = Math.atan2(deltaY, deltaX);
                const maxDistance = Math.min(rect.width, rect.height) / 3.5;
                const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY));
                const moveX = Math.cos(angle) * distance;
                const moveY = Math.sin(angle) * distance;

                pupil.animate(
                    [
                        { transform: pupil.style.transform },
                        { transform: `translate(${moveX}px, ${moveY}px)` }
                    ],
                    {
                        duration: 100,
                        fill: 'forwards',
                        easing: 'ease-out'
                    }
                );
            });
        };

        window.addEventListener('mousemove', movePupil);
        return () => window.removeEventListener('mousemove', movePupil);
    }, []);

    return (
        <div className={styles.eyesWrapper}>
            {/* Left Eye */}
            <div className={`${styles.eye} ${styles.left}`}>
                <div className={styles.pupil} ref={leftPupilRef}>
                    <div className={styles.iris}></div>
                    <div className={styles.highlight}></div>
                </div>
            </div>

            {/* Right Eye */}
            <div className={`${styles.eye} ${styles.right}`}>
                <div className={styles.pupil} ref={rightPupilRef}>
                    <div className={styles.iris}></div>
                    <div className={styles.highlight}></div>
                </div>
            </div>
        </div>
    );
}
