import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 300;
    
    // Initialize static stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.4 + 0.1,
        currentAlpha: 0,
        targetAlpha: 0
      });
    }

    let shootingStars = [];
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId;
    let timeoutId;

    const createShootingStar = () => {
      // Start from edges
      const isHorizontal = Math.random() > 0.5;
      const x = isHorizontal ? (Math.random() > 0.5 ? -50 : width + 50) : Math.random() * width;
      const y = isHorizontal ? Math.random() * height : (Math.random() > 0.5 ? -50 : height + 50);
      
      // Aim somewhat towards the center
      const targetX = width / 2 + (Math.random() - 0.5) * width * 0.5;
      const targetY = height / 2 + (Math.random() - 0.5) * height * 0.5;
      const angle = Math.atan2(targetY - y, targetX - x);
      
      const speed = Math.random() * 15 + 15;
      
      shootingStars.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        length: Math.random() * 100 + 50
      });

      timeoutId = setTimeout(createShootingStar, Math.random() * 5000 + 3000); // Every 3-8 seconds
    };

    timeoutId = setTimeout(createShootingStar, 2000);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw static stars and handle twinkle
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        
        // Distance to mouse
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Twinkle logic: if close to mouse, light up
        if (dist < 150) {
          s.targetAlpha = 1;
        } else {
          // Occasionally randomly twinkle slightly even without mouse
          if (Math.random() < 0.001) {
            s.targetAlpha = s.baseAlpha + 0.4;
          } else if (s.targetAlpha !== s.baseAlpha) {
            s.targetAlpha = s.baseAlpha;
          }
        }
        
        s.currentAlpha += (s.targetAlpha - s.currentAlpha) * 0.05;
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.currentAlpha})`;
        
        if (s.currentAlpha > s.baseAlpha + 0.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'white';
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }
      
      // Draw shooting stars
      ctx.shadowBlur = 0;
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * (ss.length / 10), ss.y - ss.vy * (ss.length / 10)); // Draw tail behind it
        
        const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.vx * (ss.length / 10), ss.y - ss.vy * (ss.length / 10));
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= 0.02; // Fade out gradually
        
        if (ss.life <= 0 || ss.x < -200 || ss.x > width + 200 || ss.y < -200 || ss.y > height + 200) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -2
      }}
    />
  );
};

export default StarBackground;
