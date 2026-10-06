export interface CardConfig {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  imageIndex: number;
  lifetime: number;
  speed: number;
}

/**
 * Generates a randomized layout setting for a spawned trailing card.
 * Adds random slight rotation, scale adjustments, and velocity.
 */
export function createCardConfig(
  x: number,
  y: number,
  id: number,
  imageIndex: number
): CardConfig {
  const rotation = (Math.random() - 0.5) * 18; // -9deg to 9deg rotation
  const scale = 0.95 + Math.random() * 0.15;   // slight scale variance
  const lifetime = 1.6 + Math.random() * 0.6;  // 1.6s to 2.2s lifetime
  const speed = 0.08 + Math.random() * 0.04;   // Lerp speed delay (inertia)

  return {
    id,
    x,
    y,
    rotation,
    scale,
    imageIndex,
    lifetime,
    speed,
  };
}

/**
 * Calculates distance between two coordinates to check thresholds.
 */
export function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.hypot(x2 - x1, y2 - y1);
}
