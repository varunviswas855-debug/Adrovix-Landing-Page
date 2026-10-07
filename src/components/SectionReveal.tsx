import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If not running in a browser with IntersectionObserver support, reveal immediately
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    try {
      const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)')?.matches;

      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries && entries[0] && entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.01,
          rootMargin: '0px 0px 120px 0px',
        }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    } catch {
      // In case of any browser runtime error, guarantee visibility
      setIsVisible(true);
    }
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'
      } ${className}`}
    >
      {children}
    </div>
  );
};
