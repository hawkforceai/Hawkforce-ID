import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} animated-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;