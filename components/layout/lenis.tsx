'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            anchors: {
                offset: -100,
            },
        });

        let frameId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };

        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);

    return null;
}