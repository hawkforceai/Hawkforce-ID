
import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.pageYOffset;
        videoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    let frameId: number | null = null;
    const onScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        ref={videoRef}
        src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.6] grayscale invert"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-10"></div>
      
      <AnimatedSection className="relative z-20 flex flex-col items-center justify-center px-4">
        <div className="bg-gray-100/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-6 animate-in">
          DIGITAL ID SOLUTIONS
        </div>
        <h1 className="text-7xl font-bold tracking-tighter font-sans mb-4 animate-in" style={{ transitionDelay: '100ms' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Hawkforce ID
          </span>
        </h1>
        <p className="max-w-md text-gray-600 text-base sm:text-lg md:text-xl mb-8 animate-in" style={{ transitionDelay: '200ms' }}>
          Modern identity solutions, built for the innovators of tomorrow
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in" style={{ transitionDelay: '300ms' }}>
          <a href="#contact" className="bg-black text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg">
            Get Started
          </a>
          <a href="#services" className="bg-white text-black px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg border border-gray-200/80">
            See Our Solutions
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Hero;