'use client';

import { useRef, ReactNode, RefObject } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface FadeInSectionProps {
    children: ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(ref as RefObject<Element>, { threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-out ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)' }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;