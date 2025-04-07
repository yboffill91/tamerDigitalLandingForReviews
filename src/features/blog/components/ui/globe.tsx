'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    // Convert #1389FD to RGB (0-1)
    // 19/255, 137/255, 253/255
    const baseColorBlue: [number, number, number] = [0.075, 0.537, 0.992];

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: baseColorBlue,
      markerColor: [1, 1, 1], // Color blanco para los marcadores
      glowColor: baseColorBlue, // Same blue color for glow
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '1',
        maxWidth: '600px',
        margin: '0 auto',
        display: 'block',
      }}
      className={className}
    />
  );
};
