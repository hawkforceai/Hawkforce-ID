
import React from 'react';
import AnimatedSection from "./AnimatedSection";
import { LayersIcon } from "./Icons";

const ServiceCard: React.FC<{
    navigateTo: () => void;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ navigateTo, title, description, children, className, style }) => (
    <div 
      style={style} 
      className={`bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col ${className}`}
    >
      <div className="h-96 relative flex items-center justify-center bg-gray-50/50 p-8 overflow-hidden">
        {children}
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold font-jakarta mb-2">{title}</h3>
        <p className="text-gray-500 mb-6">{description}</p>
        <button 
          onClick={navigateTo} 
          className="bg-gray-100 text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all"
        >
          Learn More
        </button>
      </div>
    </div>
);

const Services: React.FC<{ navigateTo: (page: string) => void }> = ({ navigateTo }) => {
    return (
        <AnimatedSection id="services" className="pb-20 sm:pb-28 px-4 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-in from-left">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                        <LayersIcon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">SOLUTIONS</span>
                    </div>
                    <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            Digital Wallet Solutions
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
                        Seamless, secure, and smart digital cards for your access and networking needs, right in your Apple or Google Wallet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Digital Access Card Solution */}
                    <ServiceCard
                        navigateTo={() => navigateTo('access-solution')}
                        title="Digital Access Card Solution"
                        description="Unlock doors, access events, and streamline entry with secure, NFC-enabled digital passes."
                        className="animate-in from-left card-tilt"
                    >
                      <div className="w-48 h-96 bg-gray-800 rounded-3xl border-4 border-black p-2 shadow-2xl">
                          <div className="w-full h-full bg-black rounded-2xl overflow-hidden p-4 flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-gray-800 via-black to-gray-800 border border-gray-700 h-2/3 rounded-2xl p-4 flex flex-col justify-between shadow-2xl">
                              <div className="flex justify-between items-center">
                                <span className="text-white font-bold text-sm tracking-wider">ACCESS</span>
                                <svg className="w-6 h-6 text-white opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4.5 12.5c.5-2.5 2.5-4.5 5-5" /><path d="M6.5 8.5c1-2 2.5-3.5 4.5-4" /><path d="M8.5 4.5c1.5-1.5 3.5-2.5 5.5-2.5" />
                                </svg>
                              </div>
                              <div className="text-white">
                                <img src="https://cdn.yellowmessenger.com/9NSCwAxFsrMD1762552569706.png" alt="Hawkforce ID Logo" className="h-8 w-auto" />
                              </div>
                            </div>
                          </div>
                        </div>
                    </ServiceCard>

                    {/* Digital Business Card Solution */}
                    <ServiceCard
                        navigateTo={() => navigateTo('business-card-solution')}
                        title="Digital Business Card Solution"
                        description="Share your contact info with a simple tap. Our dynamic digital business cards are eco-friendly and always up-to-date."
                        className="animate-in from-right card-tilt"
                        style={{ transitionDelay: '100ms' }}
                    >
                      <div className="w-full h-full flex items-center justify-center -space-x-16">
                         <div className="relative w-48 h-96 bg-gray-100 rounded-3xl border-8 border-gray-800 p-2 shadow-2xl -rotate-6 transform hover:rotate-0 hover:scale-105 transition-transform duration-300">
                              <div className="w-full h-full bg-white rounded-2xl overflow-hidden p-2">
                                <video
                                    src="https://cdn.prod.website-files.com/617ac0d059899a9a3c8216e9%2F68119c652d9a6285f4bb784b_01%20New%20Create%20a%20card%20%282%29-transcode.mp4"
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover rounded-xl"
                                ></video>
                              </div>
                          </div>
                           <div className="relative w-48 h-96 bg-gray-100 rounded-3xl border-8 border-gray-800 p-2 shadow-2xl rotate-6 transform hover:rotate-0 hover:scale-105 transition-transform duration-300">
                              <div className="w-full h-full bg-white rounded-2xl overflow-hidden p-4 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="font-bold">Contact Saved</h4>
                                <p className="text-sm text-gray-600">Ian Dawkins' contact has been added.</p>
                              </div>
                          </div>
                      </div>
                    </ServiceCard>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Services;
