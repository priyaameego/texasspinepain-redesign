import { ReactNode, useRef, useState, MouseEvent, useEffect } from 'react';

interface TiltWrapperProps {
  children: ReactNode;
  className?: string;
}

export function TiltWrapper({ children, className = '' }: TiltWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Very subtle 2-4 degrees max
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: 'transform 0.1s ease'
    });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
