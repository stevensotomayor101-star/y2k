
import React, { useEffect, useState } from 'react';

const SparkleEffect: React.FC = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const createSparkle = (e: MouseEvent) => {
      const id = Date.now();
      const newSparkle = {
        id,
        x: e.pageX,
        y: e.pageY,
        size: Math.random() * 20 + 10,
      };
      setSparkles(prev => [...prev.slice(-20), newSparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== id));
      }, 1000);
    };

    window.addEventListener('mousemove', createSparkle);
    return () => window.removeEventListener('mousemove', createSparkle);
  }, []);

  return (
    <>
      {sparkles.map(s => (
        <div
          key={s.id}
          className="sparkle pointer-events-none text-pink-400"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            zIndex: 9999,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
          </svg>
        </div>
      ))}
    </>
  );
};

export default SparkleEffect;
