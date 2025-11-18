
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { QuotationMarkIcon, StarIcon } from './Icons';

const Testimonials = () => {
  return (
    <AnimatedSection id="testimonials" className="py-20 sm:py-28 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-medium text-gray-700">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance font-jakarta">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Join customers who trust AI to transform their business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col">
                <QuotationMarkIcon className="w-10 h-10 text-gray-300 mb-4" />
                <h4 className="text-2xl font-medium text-gray-700 flex-grow text-balance">
                    Their <span className="text-gray-400">AI-driven</span> approach helped us reach the right audience and <span className="text-gray-400">grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className="text-gray-400">delivering results</span> we couldn’t achieve before.
                </h4>
                <div className="mt-8 w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://framerusercontent.com/images/LQKuaHoocBNNOUwcuUIayGZ8z8.png" alt="Testimonial author" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>

            <div className="space-y-8">
                <TestimonialCard
                    quote="We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us."
                    name="Brendan"
                    role="Marketing Director at StratIQ"
                    avatar="https://framerusercontent.com/images/cZ9VBNOcSpg8RiRzIkAXdz6ScF4.png"
                />
                 <TestimonialCard
                    quote="Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We’re already seeing results."
                    name="Lena M"
                    role="Manager at NovaTech"
                    avatar="https://framerusercontent.com/images/PG5vQAQIzOrDyrT8NDWpDNTPoY.png"
                />
                 <TestimonialCard
                    quote="From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction."
                    name="Eli R"
                    role="COO at GridFrame"
                    avatar="https://framerusercontent.com/images/gcvmIxm2XRx6NG3kYAPz3zZXc6E.jpg"
                />
            </div>
        </div>

      </div>
    </AnimatedSection>
  );
};

const TestimonialCard = ({ quote, name, role, avatar }: { quote: string, name: string, role: string, avatar: string }) => (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex mb-3">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-black" />)}
        </div>
        <p className="text-gray-600 mb-4 text-balance">{quote}</p>
        <div className="flex items-center gap-4">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
            <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
)

export default Testimonials;