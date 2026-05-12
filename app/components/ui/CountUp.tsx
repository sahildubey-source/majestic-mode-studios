'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export function CountUp({ end, suffix = '', prefix = '', duration = 2, decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const count = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          const controls = animate(count, end, {
            duration,
            ease: 'easeOut',
            onUpdate: (v) => {
              if (ref.current) {
                ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
              }
            },
          });
          observer.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, end, duration, suffix, prefix, decimals, hasStarted]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
