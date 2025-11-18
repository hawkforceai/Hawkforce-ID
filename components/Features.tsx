
import React from 'react';
import AnimatedSection from "./AnimatedSection";
// FIX: Replaced missing FeatureIcon imports with existing suitable icons.
import { LayersIcon, RocketIcon, SettingsIcon, DataIcon, VirtualAssistantIcon, ArrowRightIcon } from "./Icons";

const Features: React.FC = () => {
    return (
        <AnimatedSection id="features" className="py-20 sm:py-28 px-4 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-11">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 max-w-[700px] text-center animate-in">
                    <div className="inline-flex items-center gap-2 bg-[#f5f5f5] rounded-full px-3 py-1.5 shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-3.25px_rgba(0,0,0,0.05),0_13.65px_13.65px_-2.71px_rgba(0,0,0,0.08),0_6.87px_6.87px_-2.17px_rgba(0,0,0,0.09),0_3.62px_3.62px_-1.62px_rgba(0,0,0,0.09),0_1.81px_1.81px_-1.08px_rgba(0,0,0,0.09),0_0.71px_0.71px_-0.54px_rgba(0,0,0,0.1)]">
                        {/* FIX: Replaced missing FeatureIcon1 with LayersIcon */}
                        <LayersIcon className="w-4 h-5 text-black/40" />
                        <p className="font-medium text-xs">FEATURES</p>
                    </div>
                    <h2 className="text-6xl font-sans font-bold tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-black from-35% to-gray-700">
                            All features in 1 tool
                        </span>
                    </h2>
                    <p className="text-base text-black/80 max-w-[500px]">
                        Discover features that simplify workflows & grow your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#f5f5f5] rounded-2xl p-5 shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-4px_rgba(0,0,0,0.02),0_13.65px_13.65px_-3.33px_rgba(0,0,0,0.05),0_6.87px_6.87px_-2.67px_rgba(0,0,0,0.07),0_3.62px_3.62px_-2px_rgba(0,0,0,0.07),0_1.81px_1.81px_-1.33px_rgba(0,0,0,0.08),0_0.71px_0.71px_-0.67px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-6 animate-in from-left">
                        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[228px]">
                            <img src="https://framerusercontent.com/images/jt6hxbLaCBNrS66LsJbeYLxd4no.png" alt="Cutting-Edge AI graphic" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg">
                                {/* FIX: Replaced missing FeatureIcon2 with RocketIcon */}
                                <RocketIcon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-black">Cutting-Edge AI</h3>
                                <p className="text-base text-black/80">Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#f5f5f5] rounded-2xl p-5 shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-4px_rgba(0,0,0,0.02),0_13.65px_13.65px_-3.33px_rgba(0,0,0,0.05),0_6.87px_6.87px_-2.67px_rgba(0,0,0,0.07),0_3.62px_3.62px_-2px_rgba(0,0,0,0.07),0_1.81px_1.81px_-1.33px_rgba(0,0,0,0.08),0_0.71px_0.71px_-0.67px_rgba(0,0,0,0.08)] flex flex-col justify-center gap-6 animate-in from-right" style={{transitionDelay: '100ms'}}>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg">
                           {/* FIX: Replaced missing FeatureIcon3 with SettingsIcon */}
                           <SettingsIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-black">Automated Workflows</h3>
                            <p className="text-base text-black/80">Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#f5f5f5] rounded-2xl p-5 shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-4px_rgba(0,0,0,0.02),0_13.65px_13.65px_-3.33px_rgba(0,0,0,0.05),0_6.87px_6.87px_-2.67px_rgba(0,0,0,0.07),0_3.62px_3.62px_-2px_rgba(0,0,0,0.07),0_1.81px_1.81px_-1.33px_rgba(0,0,0,0.08),0_0.71px_0.71px_-0.67px_rgba(0,0,0,0.08)] flex flex-col justify-center gap-6 animate-in from-left" style={{transitionDelay: '200ms'}}>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg">
                           {/* FIX: Replaced missing FeatureIcon4 with DataIcon */}
                           <DataIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-black">Insightful Analytics</h3>
                            <p className="text-base text-black/80">Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#f5f5f5] rounded-2xl p-5 shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-4px_rgba(0,0,0,0.02),0_13.65px_13.65px_-3.33px_rgba(0,0,0,0.05),0_6.87px_6.87px_-2.67px_rgba(0,0,0,0.07),0_3.62px_3.62px_-2px_rgba(0,0,0,0.07),0_1.81px_1.81px_-1.33px_rgba(0,0,0,0.08),0_0.71px_0.71px_-0.67px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-6 animate-in from-right" style={{transitionDelay: '300ms'}}>
                        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[228px]">
                            <img src="https://framerusercontent.com/images/NUbGSZcPrAH7CFfBazSJOsGIP4.png" alt="AI-Powered Support graphic" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg">
                                {/* FIX: Replaced missing FeatureIcon5 with VirtualAssistantIcon */}
                                <VirtualAssistantIcon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-black">AI-Powered Support</h3>
                                <p className="text-base text-black/80">Enhance customer experience with AI-driven virtual assistants available for support and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-in" style={{transitionDelay: '400ms'}}>
                    <a href="#contact" className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md flex items-center gap-2">
                        Get Started <ArrowRightIcon className="w-5 h-5" />
                    </a>
                    <a href="#services" className="bg-[#f5f5f5] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all shadow-[inset_0_3px_1px_0_rgb(255,255,255),0_30px_30px_-3.5px_rgba(158,158,158,0.3),0_13.65px_13.65px_-2.92px_rgba(158,158,158,0.52),0_6.87px_6.87px_-2.33px_rgba(158,158,158,0.61),0_3.62px_3.62px_-1.75px_rgba(158,158,158,0.65),0_1.81px_1.81px_-1.17px_rgba(158,158,158,0.68),0_0.71px_0.71px_-0.58px_rgba(158,158,158,0.69)]">
                        See Our Solutions
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Features;