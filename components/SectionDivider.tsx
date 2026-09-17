"use client";
import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-[3px] mb-10 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r from-lilac via-link to-lilac origin-left transition-transform duration-[1100ms] ease-out ${
          visible ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}
