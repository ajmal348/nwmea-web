import React, { useState, useEffect, useRef } from 'react';

/**
 * LetterCarousel Component - Creates a scroll-based animation effect for text
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content to animate
 * @param {string} props.direction - Movement direction ('ltr' or 'rtl')
 * @param {number} props.scrollOffset - Pixels to offset the animation start
 * @param {number} props.speed - Animation speed multiplier
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @returns {JSX.Element} - The carousel component
 */
const LetterCarousal = ({
    children,
    direction = 'ltr',
    scrollOffset = 150,
    speed = 30,
    className = '',
    style = {},
    ...rest
}: any) => {
    const [transform, setTransform] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;

            const element: any = elementRef.current;
            const parentElement = element.parentElement;

            if (!parentElement) return;

            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const elementOffsetTop = parentElement.getBoundingClientRect().top + scrollTop;

            // Check if element is in viewport
            if (elementOffsetTop <= scrollTop + windowHeight) {
                // Calculate scroll values similar to the original function
                const scrollDistance = scrollTop - elementOffsetTop + windowHeight;
                const scroll = scrollDistance - scrollOffset;
                const scrollSlow = scroll + scroll / 70 / 100;
                const imgScroll = (scrollSlow * speed) / 100;

                // Apply direction
                const translateX = direction === 'ltr' ? imgScroll : -imgScroll;

                setTransform(translateX);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial calculation
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [direction, scrollOffset, speed]);

    const combinedStyles = {
        ...style,
        transform: `translateX(${transform}px)`,
    };

    return (
        <div ref={elementRef} className={className} style={combinedStyles} {...rest}>
            {children}
        </div>
    );
};

export default LetterCarousal;
