import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Swirl = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = props.baseTTL || 500;
  const rangeTTL = props.rangeTTL || 500;
  const baseSpeed = props.baseSpeed || 0.1;
  const rangeSpeed = props.rangeSpeed || 1;
  const baseSize = props.baseSize || 2;
  const rangeSize = props.rangeSize || 10;
  const baseHue = props.baseHue || 10;
  const rangeHue = props.rangeHue || 100;
  const backgroundColor = props.backgroundColor || "HSL(0%,0%,0%)";
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const HALF_PI = 0.5 * Math.PI;
  const rand = (n) => n * Math.random();
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
  const angle = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1);

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, theta, vx, vy, life, ttl, speed, size, hue;

    x = rand(canvas.width);
    y = rand(canvas.height);
    theta = angle(x, y, center[0], center[1]);
    vx = Math.cos(theta) * 6;
    vy = Math.sin(theta) * 6;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    size = baseSize + rand(rangeSize);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
  };

  const draw = (canvas, ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    render(canvas, ctx);

    window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    let x, y, theta, vx, vy, life, ttl, speed, x2, y2, size, hue;

    x = particleProps[i];
    y = particleProps[i2];
    theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
    vx = lerp(particleProps[i3], 2 * Math.cos(theta), 0.05);
    vy = lerp(particleProps[i4], 2 * Math.sin(theta), 0.05);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    size = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, theta, life, ttl, size, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    life > ttl && initParticle(i);
  };

  const drawParticle = (x, y, theta, life, ttl, size, hue, ctx) => {
    const xRel = x - 0.5 * size;
    const yRel = y - 0.5 * size;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = 1;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.translate(xRel, yRel);
    ctx.rotate(theta);
    ctx.translate(-xRel, -yRel);
    ctx.strokeRect(xRel, yRel, size, size);
    ctx.closePath();
    ctx.restore();
  };

  const resize = (canvas, ctx) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (canvas, ctx) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const render = (canvas, ctx) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setup, resize]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className={cn("absolute inset-0", props.className)}
      >
        <canvas ref={canvasRef} />
        {props.children}
      </motion.div>
    </div>
  );
};

export default Swirl;
