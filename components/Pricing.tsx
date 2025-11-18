import React, { useState } from 'react';
import { CheckIcon } from './Icons';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Individual',
      priceMonthly: 5,
      description: 'Perfect for freelancers, students, and professionals to network smarter.',
      features: ['1 Digital Business Card', 'Real-time content updates', 'NFC & QR Code Sharing', 'Apple & Google Wallet', 'Basic Analytics'],
      popular: false,
    },
    {
      name: 'Business',
      priceMonthly: 49,
      description: 'For teams and small businesses looking to unify their brand and manage contacts.',
      features: ['Up to 10 Users', 'Centralized Admin Dashboard', 'Team Branding Customization', 'Contact Management', 'Advanced Analytics'],
      popular: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 0,
      description: 'Scalable solutions for large organizations, including advanced access control and integrations.',
      features: ['Unlimited Users', 'Digital Access Card Solution', 'Custom Integrations (HRIS, etc)', 'API Access', 'Dedicated Support & Onboarding'],
      popular: false,
      custom: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-4">
            PRICING
          </div>
          <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Simple Price For All
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-lg">
            Flexible pricing plans that fit your budget & scale with needs.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center bg-gray-100 p-1 rounded-full shadow-inner border border-gray-200/50">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 text-sm font-semibold z-10 transition-colors duration-300 ${!isYearly ? 'text-black' : 'text-gray-500'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 pl-6 pr-2 py-1.5 text-sm font-semibold z-10 transition-colors duration-300 ${isYearly ? 'text-black' : 'text-gray-500'}`}
            >
              <span>Yearly</span>
              <span className="bg-white text-black text-xs font-bold py-1.5 px-4 rounded-full shadow-sm border border-gray-200/50">
                30% off
              </span>
            </button>
            {/* The moving underline */}
            <div
              className={`absolute bottom-2 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out
              ${isYearly ? 'left-[122px] w-[120px]' : 'left-[22px] w-[80px]'}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-black scale-105' : 'border-gray-100'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold font-jakarta">{plan.name}</h3>
                {plan.popular && <div className="bg-black text-white text-xs font-bold py-1 px-3 rounded-full">POPULAR</div>}
              </div>
              <div className="flex items-baseline mb-4 h-12">
                {plan.custom ? (
                  <span className="text-4xl font-extrabold tracking-tight font-jakarta">Contact Us</span>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold tracking-tight font-jakarta">${isYearly ? Math.round(plan.priceMonthly * 12 * 0.7) : plan.priceMonthly}</span>
                    <span className="ml-1 text-xl font-semibold text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                  </>
                )}
              </div>
              <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
              <a href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors duration-300 ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                {plan.custom ? 'Contact Sales' : 'Get Started'}
              </a>
              <hr className="my-6 border-gray-200" />
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;