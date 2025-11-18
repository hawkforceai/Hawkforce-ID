
import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedinIcon } from './Icons';

const SocialLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 hover:bg-white/50 transition-colors">
    {children}
  </a>
);

const Footer: React.FC<{ navigateTo: (target: string) => void; }> = ({ navigateTo }) => {
  const bubbleCount = 25;

  const handleNav = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    navigateTo(target);
  }

  return (
    <footer id="footer" className="relative text-center overflow-hidden bg-gray-50 pt-32 pb-12">
       <div className="absolute inset-0 z-0">
          <video
            src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
            autoPlay loop muted playsInline
            className="w-full h-full object-cover filter brightness-[0.6] grayscale invert"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {Array.from({ length: bubbleCount }).map((_, i) => {
              const size = Math.floor(Math.random() * 20) + 10;
              const style = {
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              };
              return <div key={i} className="bubble" style={style}></div>
            })}
          </div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-8">
            <SocialLink href="https://twitter.com"><TwitterIcon className="w-5 h-5 text-black" /></SocialLink>
            <SocialLink href="https://instagram.com"><InstagramIcon className="w-5 h-5 text-black" /></SocialLink>
            <SocialLink href="https://linkedin.com"><LinkedinIcon className="w-5 h-5 text-black" /></SocialLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 mb-6">
           <img src="https://cdn.yellowmessenger.com/9NSCwAxFsrMD1762552569706.png" alt="Hawkforce ID Logo" className="h-12 w-auto" />
               <h1 className="text-7xl font-sans font-bold tracking-tighter font-sans">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Hawkforce ID
                </span>
            </h1>
        </div>
        <p className="max-w-lg text-gray-600 text-lg mb-8">
            Next-gen digital identity systems, built for tomorrow’s innovators
        </p>

        <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="bg-black text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg mb-16">
            Get Started
        </a>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-gray-600 font-medium">
            <a href="#services" onClick={(e) => handleNav(e, '#services')} className="hover:text-black transition-colors">Solutions</a>
            <a href="#faqs" onClick={(e) => handleNav(e, '#faqs')} className="hover:text-black transition-colors">FAQ</a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="hover:text-black transition-colors">Contact</a>
        </div>
        
        <p className="text-gray-500 text-sm">
            Hawkforce ID © 2025. Designed by <a href="https://x.com/framebase_" target="_blank" rel="noopener" className="hover:text-black transition-colors">FrameBase</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;