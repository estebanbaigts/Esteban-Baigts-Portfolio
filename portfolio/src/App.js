import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './index.css';

function App() {
  const canvasRef = useRef(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const particlesArray = [];
    const numberOfParticles = 100;
    const colors = ['#00ff00'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.velocityX = -this.velocityX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.velocityY = -this.velocityY;
        }
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const velocityX = (Math.random() - 0.5) * 2;
      const velocityY = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particlesArray.push(new Particle(x, y, size, color, velocityX, velocityY));
    }

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('bg-black', theme === 'light');
    document.body.classList.toggle('bg-white', theme === 'dark');
    document.body.classList.toggle('text-dark', theme === 'dark');
    document.body.classList.toggle('text-light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative h-screen w-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <div className="relative z-10 text-center">
        <Header toggleTheme={toggleTheme} theme={theme} />
      </div>
    </div>
  );
}

export default App;
