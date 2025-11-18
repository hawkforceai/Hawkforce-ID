import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CheckIcon, XCircleIcon } from './Icons';

const hawkforceFeatures = [
    "Dynamic digital wallet cards",
    "NFC & QR code enabled",
    "Real-time updates",
    "Secure and encrypted",
    "Apple & Google Wallet native",
    "Eco-friendly solution",
    "Seamless integrations"
];

const othersFeatures = [
    "Static physical cards",
    "Manual sharing",
    "Costly reprints for updates",
    "Easily lost or damaged",
    "Requires separate app",
    "Environmental waste",
    "Limited to no integration"
];

const ComparisonCard = ({ title, features, isHawkforce, className, style }: { title: string, features: string[], isHawkforce: boolean, className?: string, style?: React.CSSProperties }) => (
    <div style={style} className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 w-full card-tilt ${className}`}>
        <h3 className="text-3xl font-bold text-center mb-6 font-jakarta">{title}</h3>
        <hr className="border-gray-200 mb-6" />
        <ul className="space-y-4">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    {isHawkforce ? <CheckIcon className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" /> : <XCircleIcon className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />}
                    <span className="text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
        {isHawkforce && (
            <a href="#contact" className="mt-8 block w-full text-center bg-black text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md">
                Get Started
            </a>
        )}
    </div>
);

const Comparison: React.FC = () => {
    return (
        <AnimatedSection id="comparison" className="py-20 sm:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-in from-left">
                    <div className="inline-block bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-4">
                        COMPARISON
                    </div>
                    <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            Digital vs Traditional
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-600 text-lg">
                        See how our digital wallet solutions outperform physical cards.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
                    <ComparisonCard title="Hawkforce ID" features={hawkforceFeatures} isHawkforce={true} className="animate-in from-left" style={{ transitionDelay: '100ms' }} />
                    <ComparisonCard title="Others" features={othersFeatures} isHawkforce={false} className="animate-in from-right" style={{ transitionDelay: '200ms' }} />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Comparison;