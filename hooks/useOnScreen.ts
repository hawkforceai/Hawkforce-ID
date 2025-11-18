import React, { useState, useEffect } from 'react';

interface UseOnScreenOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, options: UseOnScreenOptions = { threshold: 0.1, triggerOnce: true }): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};
