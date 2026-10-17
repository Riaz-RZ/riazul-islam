
"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  twinkle: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
  wait: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let isVisible = true;
    let isPageVisible = !document.hidden;

    const pointer = { x: 0, y: 0 };
    const smoothPointer = { x: 0, y: 0 };

    const STAR_DEPTH = 1000;

    const starCount = () => {
      if (reducedMotion.matches) return 35;
      if (mobileQuery.matches) return 55;
      return 140;
    };

    const createStar = (randomDepth = true): Star => {
      const z = randomDepth
        ? Math.random() * STAR_DEPTH + 1
        : STAR_DEPTH;

      return {
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z,
        radius: Math.random() * 1.5 + 0.5,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
      };
    };

    const createShootingStar = (): ShootingStar => ({
      x: 0,
      y: 0,
      length: Math.random() * 80 + 70,
      speed: Math.random() * 4 + 5,
      opacity: Math.random() * 0.4 + 0.6,
      angle: Math.PI / 4,
      active: false,
      wait: Math.random() * 240 + 120,
    });

    const initializeShootingStars = () => {
      // Keep the meteor effect lightweight on mobile.
      const count = 1;

      shootingStars = Array.from(
        { length: count },
        () => createShootingStar()
      );
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      // Limit pixel ratio to maintain good performance.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = Array.from({ length: starCount() }, () =>
        createStar()
      );

      initializeShootingStars();
      drawFrame(false);
    };

    const drawShootingStars = (animate: boolean) => {
      if (!animate || reducedMotion.matches) return;

      for (const meteor of shootingStars) {
        if (!meteor.active) {
          meteor.wait--;

          if (meteor.wait <= 0) {
            meteor.active = true;

            // Start near the top or upper-right area.
            meteor.x = Math.random() * width * 0.85;
            meteor.y = Math.random() * height * 0.3;

            // Vary the direction slightly for a natural effect.
            meteor.angle =
              Math.PI / 4 + (Math.random() - 0.5) * 0.2;
          }

          continue;
        }

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;

        const tailX =
          meteor.x -
          Math.cos(meteor.angle) * meteor.length;

        const tailY =
          meteor.y -
          Math.sin(meteor.angle) * meteor.length;

        const gradient = context.createLinearGradient(
          meteor.x,
          meteor.y,
          tailX,
          tailY
        );

        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${meteor.opacity})`
        );
        gradient.addColorStop(
          0.25,
          `rgba(167, 243, 208, ${meteor.opacity * 0.7})`
        );
        gradient.addColorStop(1, "rgba(167, 243, 208, 0)");

        context.save();

        // Glowing trail.
        context.beginPath();
        context.moveTo(meteor.x, meteor.y);
        context.lineTo(tailX, tailY);

        context.strokeStyle = gradient;
        context.lineWidth = 2;
        context.lineCap = "round";
        context.shadowBlur = 10;
        context.shadowColor = "rgba(110, 231, 183, 0.8)";
        context.stroke();

        // Bright meteor head.
        context.beginPath();
        context.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
        context.fillStyle = "#ffffff";
        context.shadowBlur = 8;
        context.shadowColor = "#ffffff";
        context.fill();

        context.restore();

        // Reset after the meteor leaves the visible area.
        if (
          meteor.x > width + meteor.length ||
          meteor.y > height + meteor.length
        ) {
          meteor.active = false;
          meteor.wait = Math.random() * 240 + 120;
        }
      }
    };

    const drawFrame = (animate: boolean) => {
      context.clearRect(0, 0, width, height);

      // Smooth mouse movement for subtle parallax.
      smoothPointer.x +=
        (pointer.x - smoothPointer.x) * 0.025;
      smoothPointer.y +=
        (pointer.y - smoothPointer.y) * 0.025;

      const centerX = width / 2;
      const centerY = height / 2;

      for (const star of stars) {
        if (animate) {
          star.twinkle += star.twinkleSpeed;

          // Move stars slowly toward the viewer.
          const speed = mobileQuery.matches ? 0.12 : 0.3;
          star.z -= reducedMotion.matches ? 0 : speed;

          if (star.z <= 1) {
            Object.assign(star, createStar(false));
            star.z = STAR_DEPTH;
          }
        }

        // Perspective projection creates the 3D effect.
        const perspective = 300 / star.z;

        const parallaxX =
          smoothPointer.x * perspective * 22;
        const parallaxY =
          smoothPointer.y * perspective * 22;

        const screenX =
          centerX + star.x * perspective + parallaxX;
        const screenY =
          centerY + star.y * perspective + parallaxY;

        if (
          screenX < -15 ||
          screenX > width + 15 ||
          screenY < -15 ||
          screenY > height + 15
        ) {
          continue;
        }

        const depth = 1 - star.z / STAR_DEPTH;

        const opacity = Math.min(
          0.9,
          Math.max(0.25, depth * 0.9)
        );

        const twinkleAmount = reducedMotion.matches
          ? 1
          : 0.75 + Math.sin(star.twinkle) * 0.25;

        const radius = Math.min(
          2.8,
          Math.max(0.6, star.radius * perspective)
        );

        // Occasional emerald stars complement the dark theme.
        const emerald = star.twinkle % 7 < 1;

        context.beginPath();
        context.arc(
          screenX,
          screenY,
          radius,
          0,
          Math.PI * 2
        );

        context.shadowBlur = emerald ? 8 : 4;
        context.shadowColor = emerald
          ? "rgba(110, 231, 183, 0.9)"
          : "rgba(210, 225, 235, 0.7)";

        context.fillStyle = emerald
          ? `rgba(110, 231, 183, ${
              opacity * twinkleAmount
            })`
          : `rgba(210, 225, 235, ${
              opacity * twinkleAmount
            })`;

        context.fill();

        // Reset shadow so it does not affect later drawing.
        context.shadowBlur = 0;
      }

      // Draw meteors above the existing 3D starfield.
      drawShootingStars(animate);
    };

    const animate = () => {
      if (!isVisible || !isPageVisible) {
        animationFrame = 0;
        return;
      }

      drawFrame(true);

      if (!reducedMotion.matches) {
        animationFrame =
          window.requestAnimationFrame(animate);
      } else {
        animationFrame = 0;
      }
    };

    const startAnimation = () => {
      if (
        !isVisible ||
        !isPageVisible ||
        animationFrame !== 0 ||
        reducedMotion.matches
      ) {
        return;
      }

      animationFrame =
        window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (width === 0 || height === 0) return;

      pointer.x = (event.clientX / width - 0.5) * 2;
      pointer.y = (event.clientY / height - 0.5) * 2;
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;

      if (isPageVisible) {
        if (reducedMotion.matches) {
          drawFrame(false);
        } else {
          startAnimation();
        }
      } else {
        stopAnimation();
      }
    };

    const handleMotionChange = () => {
      stopAnimation();
      resizeCanvas();

      if (!reducedMotion.matches) {
        startAnimation();
      }
    };

    const handleDeviceChange = () => {
      stopAnimation();
      resizeCanvas();
      startAnimation();
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        if (reducedMotion.matches) {
          drawFrame(false);
        } else {
          startAnimation();
        }
      } else {
        stopAnimation();
      }
    });

    observer.observe(canvas);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    reducedMotion.addEventListener("change", handleMotionChange);
    mobileQuery.addEventListener("change", handleDeviceChange);

    resizeCanvas();

    if (!reducedMotion.matches) {
      startAnimation();
    }

    return () => {
      stopAnimation();
      observer.disconnect();

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      reducedMotion.removeEventListener(
        "change",
        handleMotionChange
      );

      mobileQuery.removeEventListener(
        "change",
        handleDeviceChange
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.8 }}
    />
  );
}
