"use client"

import React, { useEffect, useState } from "react"
import AnimatedSection from "./AnimatedSection";
import { CopyIcon, DataIcon, DollarIcon, LayersIcon, PlusCircleIcon, RocketIcon, SettingsIcon, StarIcon, UserIcon, VirtualAssistantIcon } from "./Icons";

const marqueeBenefits = [
  { label: 'Faster Innovation', icon: RocketIcon },
  { label: 'Virtual Assistance', icon: VirtualAssistantIcon },
  { label: 'Scalable Solutions', icon: LayersIcon },
  { label: 'Personalized Experiences', icon: UserIcon },
  { label: 'Cost Effective', icon: DollarIcon },
  { label: 'Real-Time Insights', icon: PlusCircleIcon },
  { label: 'Automation', icon: SettingsIcon },
  { label: 'Data-Driven Decisions', icon: DataIcon },
];

const Benefits = () => {
  const [animationState, setAnimationState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatedSection id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in from-right">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <StarIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">BENEFITS</span>
          </div>
          <h2 className="text-7xl font-sans font-black tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Why Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Partner with an AI agency delivering smart solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-Time Analytics Card */}
          <div className="flex flex-col p-6 rounded-3xl border bg-white shadow-lg w-full max-w-md mx-auto animate-in from-left" style={{ transitionDelay: '100ms' }}>
            <div className="w-full min-h-[230px] relative flex items-center justify-center">
              <div className="size-[176px] rounded-full shadow-inner bg-gray-50 relative flex items-start justify-center">
                {/* The rotating hand, corrected to rotate from center */}
                <div
                  className="h-[70px] w-4 mt-[18px] origin-bottom bg-white rounded-t-full shadow-md transition-transform duration-700 ease-in-out"
                  style={{ transform: `rotate(${animationState * 90}deg)` }}
                ></div>
                {/* Center black dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 rounded-full bg-gray-800 border-4 border-white shadow-sm"></div>
                {/* Peripheral dots (now gray for visibility) */}
                 <div className="absolute top-[18px] size-5 bg-gray-200 rounded-full shadow-sm"></div>
                 <div className="absolute left-[18px] top-1/2 -translate-y-1/2 size-5 bg-gray-200 rounded-full shadow-sm"></div>
                 <div className="absolute right-[18px] top-1/2 -translate-y-1/2 size-5 bg-gray-200 rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="text-left w-full mt-auto">
              <h3 className="text-xl font-bold font-jakarta">Real-Time Analytics</h3>
              <p className="mt-1 text-gray-500">Stay ahead with accurate, real-time performance tracking</p>
            </div>
          </div>

          {/* AI-Driven Growth Card */}
           <div className="flex flex-col p-6 rounded-3xl border bg-white shadow-lg w-full max-w-md mx-auto animate-in from-right" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-end justify-center w-full min-h-[230px] relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-white shadow-md h-8 w-20 -rotate-90 flex items-center justify-center border border-neutral-200/30 rounded-lg text-xs font-medium text-gray-700 overflow-hidden">
                      <div
                          className="flex gap-8 transition-transform duration-700 ease-in-out"
                          style={{ transform: `translateX(${animationState % 2 === 0 ? "-25%" : "25%"})` }}
                      >
                          <span className="h-8 flex items-center justify-center font-semibold">BEFORE</span>
                          <span className="h-8 flex items-center justify-center font-semibold">AFTER</span>
                      </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 flex-1 items-end ml-20 h-full">
                      <div className={`relative bg-white w-full max-w-12 rounded-lg border border-neutral-200/80 shadow-lg transition-all duration-700 ease-in-out ${animationState % 2 === 0 ? 'h-[60%]' : 'h-[40%]'}`}></div>
                      <div className={`relative bg-white w-full max-w-12 rounded-lg border border-neutral-200/80 shadow-lg transition-all duration-700 ease-in-out ${animationState % 2 === 0 ? 'h-[55%]' : 'h-[80%]'}`}>
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg bg-white border border-neutral-200 rounded-full px-3 py-0.5 text-xs font-medium text-gray-700 whitespace-nowrap">20% Automation</span>
                      </div>
                      <div className={`relative bg-white w-full max-w-12 rounded-lg border border-neutral-200/80 shadow-lg transition-all duration-700 ease-in-out ${animationState % 2 === 0 ? 'h-[70%]' : 'h-[90%]'}`}></div>
                      <div className={`relative bg-white w-full max-w-12 rounded-lg border border-neutral-200/80 shadow-lg transition-all duration-700 ease-in-out ${animationState % 2 === 0 ? 'h-[50%]' : 'h-[30%]'}`}>
                           <span className="absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg bg-white border border-neutral-200 rounded-full px-3 py-0.5 text-xs font-medium text-gray-700 whitespace-nowrap">60% Cost</span>
                      </div>
                  </div>
              </div>
              <div className="text-left w-full mt-8">
                  <h3 className="text-xl font-bold font-jakarta">AI-Driven Growth</h3>
                  <p className="mt-1 text-gray-500">Make smarter moves with accurate, real-time business insights.</p>
              </div>
          </div>


          {/* Sync in real time Card */}
          <div className="flex flex-col p-6 rounded-3xl border bg-white shadow-lg w-full max-w-md mx-auto animate-in from-left" style={{ transitionDelay: '300ms' }}>
            <div className="w-full min-h-[230px] relative flex items-center justify-center">
              <div
                className="pulse-ring-1 absolute top-1/2 left-1/2 w-44 h-44 border-2 border-gray-100 rounded-full shadow-inner"
              ></div>
              <div
                className="pulse-ring-2 absolute top-1/2 left-1/2 w-56 h-56 border-2 border-gray-100 rounded-full shadow-inner"
              ></div>
              
              <svg viewBox="0 0 448 230" className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
                  <line x1="224" y1="115" x2="278" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" className="transition-opacity duration-500" style={{ opacity: animationState % 3 === 0 ? 0.8 : 0 }} />
                  <line x1="224" y1="115" x2="50" y2="160" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" className="transition-opacity duration-500" style={{ opacity: animationState % 4 === 1 ? 0.8 : 0 }} />
                  <line x1="224" y1="115" x2="423" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" className="transition-opacity duration-500" style={{ opacity: animationState % 2 === 0 ? 0.8 : 0 }} />
              </svg>

              <div className="relative z-10 size-28 rounded-full border border-neutral-200/50 bg-white p-1 flex items-center justify-center shadow-lg">
                <div className="size-24 z-20 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <CopyIcon className="text-neutral-950 size-12" />
                </div>
              </div>

              {[
                { right: "150px", bottom: "10px", opacity: animationState % 3 === 0 ? 1 : 0 },
                { left: "30px", bottom: "50px", opacity: animationState % 4 === 1 ? 1 : 0 },
                { right: "5px", bottom: "10px", opacity: animationState % 2 === 0 ? 1 : 0 },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white border border-neutral-200/90 transition-opacity duration-500 shadow-lg p-2 z-10"
                  style={style as React.CSSProperties}
                >
                  <UserIcon className="text-neutral-950 size-6" />
                </div>
              ))}
            </div>
            <div className="text-left w-full mt-auto">
              <h3 className="text-xl font-bold font-jakarta">Sync in real time</h3>
              <p className="mt-1 text-gray-500">connect with your team instantly to track progress and updates</p>
            </div>
          </div>
        </div>

        {/* Marquee Scroller */}
        <div 
          className="mt-20 w-full overflow-hidden animate-in" 
          style={{ 
            transitionDelay: '400ms',
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap gap-6 px-3">
            {[...marqueeBenefits, ...marqueeBenefits].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-[#f5f5f5] rounded-full px-6 py-3"
                style={{
                  boxShadow: "inset 0 3px 1px 0 rgb(255,255,255),0 30px 30px -4px rgba(0,0,0,0.02),0 13.65px 13.65px -3.33px rgba(0,0,0,0.05),0 6.87px 6.87px -2.67px rgba(0,0,0,0.07),0 3.62px 3.62px -2px rgba(0,0,0,0.07),0 1.81px 1.81px -1.33px rgba(0,0,0,0.08),0 0.71px 0.71px -0.67px rgba(0,0,0,0.08)"
                }}
              >
                <benefit.icon className="w-5 h-5 text-black" />
                <span className="font-normal text-black text-base">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Benefits;
