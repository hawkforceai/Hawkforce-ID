import React from 'react';
import AnimatedSection from './AnimatedSection';

const FounderNote: React.FC = () => {
  return (
    <AnimatedSection className="bg-white/30 backdrop-blur-sm shadow-inner py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        <h3 className="text-2xl md:text-4xl font-medium text-gray-600 text-center leading-snug font-jakarta animate-in from-left">
          "We harness <strong className="font-semibold text-gray-900">your brand</strong>, understand your needs, and use <strong className="font-semibold text-gray-900">modern tech</strong> to help your organization rise above the noise. The best part? <strong className="font-semibold text-gray-900">We execute</strong>, too."
        </h3>
        <div className="flex items-center gap-4 animate-in from-left" style={{ transitionDelay: '100ms' }}>
          <div className="p-0.5 bg-gradient-to-br from-black to-white rounded-full shadow-lg">
            <img 
              className="h-12 w-12 rounded-full" 
              src="https://framerusercontent.com/images/W7xYkGKzPzvnPv8ZBNzxS3JZI.jpg" 
              alt="Founder"
              loading="lazy"
            />
          </div>
          <div className="text-sm font-medium text-gray-800">
            Founder of Hawkforce ID
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FounderNote;