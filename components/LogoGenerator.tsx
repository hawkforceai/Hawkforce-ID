import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PlugIcon, ShieldCheckIcon, RocketIcon, LeafIcon } from './Icons';

const ValueCard: React.FC<{
    icon: React.ReactElement;
    title: string;
    description: string;
    className?: string;
    style?: React.CSSProperties;
}> = ({ icon, title, description, className, style }) => (
  <div style={style} className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col card-tilt ${className}`}>
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-inner flex-shrink-0">
      {icon}
    </div>
    <div>
        <h3 className="text-xl font-bold font-jakarta mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: <PlugIcon className="w-6 h-6 text-gray-800" />,
      title: 'Seamless Integration',
      description: 'Effortlessly sync with your existing access control, HR, and CRM systems. Our open API ensures a smooth transition and automated workflows.',
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-gray-800" />,
      title: 'Unmatched Security',
      description: 'Built on a foundation of enterprise-grade security, featuring end-to-end encryption, SOC 2 compliance, and remote credential management.',
    },
    {
      icon: <LeafIcon className="w-6 h-6 text-gray-800" />,
      title: 'Eco-Friendly by Design',
      description: 'Eliminate plastic waste and reduce your carbon footprint. Our digital solutions are a sustainable choice for the modern, conscious organization.',
    },
    {
      icon: <RocketIcon className="w-6 h-6 text-gray-800" />,
      title: 'A Modern Experience',
      description: 'Impress employees and contacts with a frictionless, tech-forward experience. Tap-and-go access and instant sharing redefine convenience.',
    },
  ];

  return (
    <AnimatedSection id="value-proposition" className="py-20 sm:py-28 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-4 animate-in">
            OUR PROMISE
          </div>
          <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4 animate-in" style={{ transitionDelay: '100ms' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              More Than Just a Card
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg animate-in" style={{ transitionDelay: '200ms' }}>
            We provide a secure, sustainable, and seamless identity platform that empowers your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              className="animate-in"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ValueProposition;
