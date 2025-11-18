
import React from 'react';
import AnimatedSection from './AnimatedSection';
// FIX: Replaced missing icon imports with existing suitable icons.
import { FileTextIcon, RocketIcon, VirtualAssistantIcon } from './Icons';

const ProcessCard = ({ icon, number, title, description, image, className }: { icon: React.ReactElement, number: string, title: string, description: string, image: string, className?: string }) => (
    <div className={`flex flex-col text-left ${className}`}>
        <div className="bg-white p-6 rounded-t-3xl shadow-lg border-x border-t border-gray-100 flex-grow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 font-jakarta">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="bg-white p-4 rounded-b-3xl shadow-lg border-x border-b border-gray-100">
            <div className="flex justify-between items-center">
                <span className="text-5xl font-extrabold text-gray-200 font-jakarta">{number}</span>
                 <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-full"/>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"/>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"/>
                </div>
            </div>
        </div>
        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64">
           <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
    </div>
);

const Process = () => {
    return (
        <AnimatedSection id="process" className="py-20 sm:py-28 px-4 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                        <span className="text-sm font-medium text-gray-700">PROCESS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance font-jakarta">Simple & Scalable</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
                        A transparent process of collaboration and feedback
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative">
                    <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-px border-t-2 border-dashed border-gray-300 -translate-y-1/2"></div>
                    <ProcessCard
                        icon={<FileTextIcon className="w-8 h-8 text-black" />}
                        number="01"
                        title="Workflow Assessment"
                        description="We begin by examining your existing workflows to identify where AI can deliver the greatest impact."
                        image="https://framerusercontent.com/images/I11kmPYZO5IptYaE3LYgilI1Xk.jpeg"
                    />
                    <ProcessCard
                        icon={<RocketIcon className="w-8 h-8 text-black" />}
                        number="02"
                        title="Deploy with Confidence"
                        description="Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment."
                        image="https://framerusercontent.com/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM.jpeg"
                    />
                    <ProcessCard
                        icon={<VirtualAssistantIcon className="w-8 h-8 text-black" />}
                        number="03"
                        title="Ongoing Support & Optimization"
                        description="After deployment, we provide support and refine your AI systems to keep them performing at their best."
                        image="https://framerusercontent.com/images/rL2mn1WNvlJqhxa5RfsgWqkaxg.png"
                    />
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Process;