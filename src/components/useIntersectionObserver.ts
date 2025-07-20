'use client';

import { useState, useEffect, RefObject } from 'react';

const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    { threshold = 0.1, root = null, rootMargin = '0%' }
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, root, rootMargin }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, threshold, root, rootMargin]);

    return isIntersecting;
};

export default useIntersectionObserver;