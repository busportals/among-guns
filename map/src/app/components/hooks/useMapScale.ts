import { useState, useEffect } from 'react';

interface MapScaleOptions {
  minScale?: number;
  maxScale?: number;
}

/**
 * Hook for responsive map scaling
 * Calculates appropriate scale based on viewport size
 */
export function useMapScale(options: MapScaleOptions = {}) {
  const { minScale = 0.5, maxScale = 1.5 } = options;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Design constants (sync with CSS design tokens)
      const SIDEBAR_WIDTH = 368;
      const MAP_PADDING = 80;
      const MAP_NATURAL_WIDTH = 1200;
      const MAP_NATURAL_HEIGHT = 700;

      // Calculate available space
      const availableWidth = viewportWidth - SIDEBAR_WIDTH - MAP_PADDING;
      const availableHeight = viewportHeight - MAP_PADDING;

      // Calculate scale for each dimension
      const scaleX = availableWidth / MAP_NATURAL_WIDTH;
      const scaleY = availableHeight / MAP_NATURAL_HEIGHT;

      // Use the smaller scale to ensure it fits in both dimensions
      let calculatedScale = Math.min(scaleX, scaleY);

      // Clamp between min and max
      calculatedScale = Math.max(minScale, Math.min(maxScale, calculatedScale));

      setScale(calculatedScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [minScale, maxScale]);

  return scale;
}
