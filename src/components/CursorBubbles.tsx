"use client";

import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  life: number;
  maxLife: number;
};

export default function CursorBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const bubbles: Bubble[] = [];
    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let lastX = 0;
    let lastY = 0;
    let hasMoved = false;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createBubbles = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;
        const life = 35 + Math.random() * 30;

        bubbles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          radius: Math.random() * 3 + 1.5,
          alpha: 0.8,
          life,
          maxLife: life,
        });
      }

      // Keep the particle count under control.
      if (bubbles.length > 180) {
        bubbles.splice(0, bubbles.length - 180);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const x = event.clientX;
      const y = event.clientY;

      if (hasMoved) {
        const distance = Math.hypot(x - lastX, y - lastY);

        if (distance > 3) {
          createBubbles(x, y);
        }
      } else {
        hasMoved = true;
      }

      lastX = x;
      lastY = y;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];

        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.vy -= 0.008;
        bubble.vx *= 0.99;
        bubble.life -= 1;
        bubble.alpha = Math.max(0, bubble.life / bubble.maxLife);

        if (bubble.life <= 0) {
          bubbles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(
          bubble.x,
          bubble.y,
          bubble.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(140, 245, 207, ${bubble.alpha * 0.65})`;
        ctx.shadowColor = "rgba(140, 245, 207, 0.7)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
