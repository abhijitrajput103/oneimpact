"use client";

import { useEffect, useState, useRef } from "react";

interface MouseState {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
  normalizedX: number;
  normalizedY: number;
  speedX: number;
  speedY: number;
}

export function useMouse(): MouseState {
  const [mouseState, setMouseState] = useState<MouseState>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
    normalizedX: 0,
    normalizedY: 0,
    speedX: 0,
    speedY: 0,
  });

  const lastPos = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    lastPos.current.time = Date.now();
    let frameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY, clientX, clientY } = event;
      const now = Date.now();
      const dt = now - lastPos.current.time;

      let speedX = 0;
      let speedY = 0;

      if (dt > 0) {
        speedX = (clientX - lastPos.current.x) / dt;
        speedY = (clientY - lastPos.current.y) / dt;
      }

      // Calculate normalized coordinates (-1 to 1)
      const normalizedX = (clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(clientY / window.innerHeight) * 2 + 1;

      // Update state in animation frame to avoid choking thread
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setMouseState({
          x: pageX,
          y: pageY,
          clientX,
          clientY,
          normalizedX,
          normalizedY,
          speedX,
          speedY,
        });
      });

      lastPos.current = { x: clientX, y: clientY, time: now };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return mouseState;
}

export default useMouse;
