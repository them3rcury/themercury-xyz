'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const textsToType = ["Mercury"];

const Header = () => {
    const [displayedText, setDisplayedText] = useState('');
    
    const [textIndex] = useState(0);

    const [charIndex, setCharIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const typingSpeed = 150;
    const pauseDuration = 1500;

    useEffect(() => {
        const handleTyping = () => {
            const currentText = textsToType[textIndex];
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                    timeoutRef.current = setTimeout(handleTyping, typingSpeed);
                } else {
                    timeoutRef.current = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
        };

        timeoutRef.current = setTimeout(handleTyping, typingSpeed);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [charIndex, isDeleting, textIndex]);

    return (
        <header className={styles.header}>
            <h1 
                  className={styles.mainTitle}
              >
                {displayedText}
                <span className={styles.cursor}>|</span>
            </h1>
            <p className={styles.subtitle} data-text='System.out.println("Hello, World!");'>System.out.println(&quot;Hello, World!&quot;);</p>
        </header>
    );
};

export default Header;