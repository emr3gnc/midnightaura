"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 300;

const ScrollAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    
    const currentFrame = (index: number) => 
      `/scroll-animation/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;
      
    const images: HTMLImageElement[] = [];
    const animationState = {
      frame: 0
    };
    
    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i + 1);
      images.push(img);
    }
    
    const render = () => {
      if (images[animationState.frame]) {
        const img = images[animationState.frame];
        if(img.complete && img.naturalWidth !== 0) {
          // Update canvas dimensions to match the image's original dimensions
          if (canvas.width !== img.width || canvas.height !== img.height) {
            canvas.width = img.width;
            canvas.height = img.height;
          }
          
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      }
    };
    
    images[0].onload = render;
    
    gsap.to(animationState, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-animation-container",
        start: "top top",
        end: "+=3500", // Scroll length for the animation
        scrub: 1,
        pin: true,
      },
      onUpdate: render,
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="scroll-animation-container" className="h-screen w-full relative flex justify-center items-center overflow-hidden bg-cherry">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-cherry/30 pointer-events-none z-10 transition-opacity duration-500">
        <div className="absolute bottom-16 left-8 md:bottom-24 md:left-24 max-w-2xl">
          <h1 className="text-5xl md:text-8xl font-title tracking-widest drop-shadow-2xl mb-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">MIDNIGHT<br/>AURA</h1>
          <p className="mt-2 text-2xl md:text-5xl font-subtitle italic font-light text-offwhite drop-shadow-md tracking-wider">İçinizdeki Gizemi Serbest Bırakın</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
