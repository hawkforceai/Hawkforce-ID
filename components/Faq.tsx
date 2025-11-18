import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronDownIcon } from './Icons';

const faqs = [
  {
    question: "What are Digital Wallet Cards?",
    answer: "They are digital versions of physical cards, like access cards or business cards, that you can securely store in your smartphone's native wallet app (Apple Wallet or Google Wallet).",
  },
  {
    question: "How do I share or use my digital card?",
    answer: "Our cards use NFC (tap-to-share) and QR codes. For access, simply hold your phone near a reader. for business cards, the other person can tap your phone or scan the QR code to instantly get your contact details.",
  },
  {
    question: "Is this secure?",
    answer: "Yes. Digital wallet solutions offer enhanced security over physical cards. They are encrypted and protected by your phone's biometric security (Face ID, fingerprint). Plus, you can remotely deactivate a lost card.",
  },
  {
    question: "What devices are compatible?",
    answer: "Our digital cards are compatible with all modern smartphones that have NFC capabilities and support either Apple Wallet (iOS) or Google Wallet (Android).",
  },
  {
    question: "How long does it take to set up?",
    answer: "Setup is incredibly fast. For individual business cards, it takes just a few minutes. For enterprise-level access solutions, we work with you to ensure a smooth and efficient deployment based on your organization's needs.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
  style?: React.CSSProperties;
}

// FIX: Added React.FC to correctly type the component and allow for the `key` prop.
const FaqItem: React.FC<FaqItemProps> = ({ question, answer, className, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={style} className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${className}`}>
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <div className="w-8 h-8 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
            <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 pr-10">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <AnimatedSection id="faqs" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in from-left">
          <div className="inline-block bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-4">
            FAQS
          </div>
          <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Questions? Answers!
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-lg">
            Find some quick answers to the most common questions.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question}
              answer={faq.answer}
              className="animate-in from-left"
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-700 animate-in from-left" style={{ transitionDelay: `${100 + faqs.length * 100}ms` }}>
            <p>Feel free to mail us for any enquiries: <a href="mailto:support@hawkforce.id" className="font-semibold text-black hover:underline">support@hawkforce.id</a></p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Faq;