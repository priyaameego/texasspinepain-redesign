import React, { useRef, useState, useEffect } from 'react';
import type { ReactNode, MouseEvent } from 'react';

interface TiltWrapperProps {
  children: ReactNode;
  className?: string;
}

export function TiltWrapper({ children, className = '' }: TiltWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    
    // Use requestAnimationFrame to throttle calculations
    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      
      // Update DOM node directly instead of React state to prevent re-renders
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      cardRef.current.style.transition = 'transform 0.1s ease';
      cardRef.current.style.willChange = 'transform';
    });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice || !cardRef.current) return;
    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      cardRef.current.style.transition = 'transform 0.5s ease-out';
      cardRef.current.style.willChange = 'auto';
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
