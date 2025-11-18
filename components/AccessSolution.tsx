

import React from 'react';
import AnimatedSection from './AnimatedSection';
import Comparison from './Comparison';
import { CheckIcon, ChevronDownIcon, NfcWaveIcon, PlugIcon, CloudSyncIcon, ShieldCheckIcon, KeyIcon, WifiOffIcon, FileTextIcon, BriefcaseIcon, IconProps } from './Icons';

const TrustLogos = () => (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8 animate-in">
                Trusted by enterprises, campuses and government facilities
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 animate-in" style={{ transitionDelay: '100ms' }}>
                <img className="h-8" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                <img className="h-8" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                <img className="h-8" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                <img className="h-8" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                <img className="h-8" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
            </div>
        </div>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ReactElement<IconProps>; title: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ icon, title, children, className, style }) => (
    <div style={style} className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${className}`}>
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 shadow-inner">
            {React.cloneElement(icon, { className: "w-6 h-6 text-gray-800"})}
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{children}</p>
    </div>
);

const FaqItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

// A simple component for feature list items
const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
      <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center mr-3 mt-1">
        <CheckIcon className="w-4 h-4" />
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
  
// A reusable section component
const ContentSection: React.FC<{
    subtitle?: string;
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    image: React.ReactNode;
    imagePosition: 'left' | 'right';
    className?: string;
}> = ({ subtitle, title, description, features, ctaText, image, imagePosition, className }) => {
    const isImageLeft = imagePosition === 'left';
    return (
      <AnimatedSection className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
            <div className={`animate-in ${isImageLeft ? 'from-left' : 'from-right'} ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              {image}
            </div>
            <div className={`animate-in ${isImageLeft ? 'from-right' : 'from-left'} ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`} style={{ transitionDelay: '100ms' }}>
              {subtitle && <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{subtitle}</h3>}
              <h2 className="text-4xl font-bold font-jakarta tracking-tight text-gray-900 mb-4">{title}</h2>
              <p className="text-lg text-gray-600 mb-6">{description}</p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <FeatureListItem key={index}>{feature}</FeatureListItem>
                ))}
              </ul>
              <a href="#contact" className="inline-block bg-black text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg">
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
};


const AccessSolution: React.FC = () => {
    const faqItems = [
        {
            question: "Will this work with my existing access control system?",
            answer: "Most likely — we support Wiegand, OSDP and common PACS integrations. We’ll verify compatibility during discovery."
        },
        {
            question: "What happens if a phone is lost?",
            answer: "Admins can remote-revoke credentials instantly. Temporary visitor passes can be time-limited."
        },
        {
            question: "Do you support iPhone/Apple Wallet?",
            answer: "Yes — Apple Wallet employee badges supported, plus Google Wallet and NFC/QR fallbacks."
        },
        {
            question: "Is multi-factor authentication supported?",
            answer: "Yes — integrate SSO & MFA (Face ID, biometrics) for high-security doors."
        },
        {
            question: "How long does deployment take?",
            answer: "Pilot deployments can run in days; full site rollout depends on scope. We'll provide a specific timeline after discovery."
        },
        {
            question: "Can we issue temporary contractor/visitor passes?",
            answer: "Yes — create time-bound and scope-limited passes via the admin portal or API."
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <AnimatedSection className="pt-40 pb-24 sm:pt-48 sm:pb-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white z-0">
                  <img src="https://framerusercontent.com/images/kQk8L2nTrB6bFC6a4eaO3Hzc7A.jpg" alt="Modern office entrance with sleek access reader" className="w-full h-full object-cover opacity-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
                </div>
                 <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-6xl lg:text-7xl font-sans font-bold tracking-tighter mb-4 animate-in">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                          Unlock the future — phone-based access for offices & premises.
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8 animate-in" style={{ transitionDelay: '100ms' }}>
                       Deploy digital badges in minutes. Integrates with your existing access control systems. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in" style={{ transitionDelay: '200ms' }}>
                      <a href="#contact" className="bg-black text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg">
                        Request a demo
                      </a>
                      <a href="#contact" className="bg-white text-black px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg border border-gray-200/80">
                        Talk to sales
                      </a>
                    </div>
                </div>
            </AnimatedSection>
            
            <TrustLogos />

            {/* Core Benefits */}
            <AnimatedSection className="py-20 sm:py-28 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <BenefitCard icon={<NfcWaveIcon />} title="Contactless Access" className="animate-in from-left">
                    Faster, safer entry from phone & watch.
                  </BenefitCard>
                  <BenefitCard icon={<PlugIcon />} title="Works with Existing PACS" className="animate-in from-left" style={{ transitionDelay: '100ms' }}>
                    No rip & replace. Supports Wiegand / OSDP.
                  </BenefitCard>
                  <BenefitCard icon={<CloudSyncIcon />} title="Centralized Lifecycle" className="animate-in from-right" style={{ transitionDelay: '200ms' }}>
                    Issue, suspend, revoke in seconds.
                  </BenefitCard>
                  <BenefitCard icon={<ShieldCheckIcon />} title="Enterprise-Grade Encryption" className="animate-in from-right" style={{ transitionDelay: '300ms' }}>
                    Device-level security with Secure Enclave & ECC.
                  </BenefitCard>
                </div>
              </div>
            </AnimatedSection>

            {/* Apple Wallet Section */}
            <ContentSection
                subtitle="Employee Badge in Apple Wallet"
                title="Unlock Your Office with iPhone and Apple Watch"
                description="Transform the way your workforce accesses your facilities. Your team can open doors, access elevators, use printers, and authenticate securely — all using their iPhone or Apple Watch. It’s simple, secure, and built for modern workplaces."
                features={[
                    "Works with your existing access control systems",
                    "Easy to distribute and manage",
                    "Uses the built-in security of iPhone and Apple Watch",
                    "Enables contactless access across all environments",
                    "Supports remote credential revocation and updates"
                ]}
                ctaText="Unlock your office"
                imagePosition="right"
                 image={<img src="https://cdn.yellowmessenger.com/n62obwOPBerI1762727378269.png" alt="Employee using iPhone to unlock an office door" className="w-full h-auto rounded-2xl shadow-xl object-cover" />}
                 className="bg-white"
            />
            
            {/* Integrations Section */}
            <AnimatedSection className="py-20 sm:py-28 px-4">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2 animate-in from-right">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Integrations</h3>
                  <h2 className="text-4xl font-bold font-jakarta text-gray-900 mb-4">Connect your entire stack.</h2>
                  <p className="text-lg text-gray-600 mb-6">Our platform seamlessly integrates with your existing directory services and HR systems. Automate onboarding, manage permissions, and sync user data effortlessly.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-black" /><span>Integrates with SSO/MFA (Azure AD, Okta)</span></li>
                    <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-black" /><span>SDKs & APIs for HRIS, PMS & building systems</span></li>
                  </ul>
                </div>
                <div className="lg:order-1 animate-in from-left">
                  <img src="https://framerusercontent.com/images/I11kmPYZO5IptYaE3LYgilI1Xk.jpeg" alt="Integration workflow diagram" className="rounded-2xl shadow-xl w-full" />
                </div>
              </div>
            </AnimatedSection>

            {/* Security Section */}
            <AnimatedSection className="py-20 sm:py-28 bg-white px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-gray-100 p-4 rounded-2xl mb-6 shadow-inner animate-in">
                  <ShieldCheckIcon className="w-10 h-10 text-gray-800" />
                </div>
                <h2 className="text-4xl font-bold font-jakarta text-gray-900 mb-4 animate-in" style={{ transitionDelay: '100ms' }}>Enterprise-Grade Security & Compliance</h2>
                <p className="text-lg text-gray-600 mb-6 animate-in" style={{ transitionDelay: '200ms' }}>
                  Built with a security-first mindset, our platform meets the strictest enterprise standards. From device-level encryption to end-to-end encrypted communication, your access data is always protected.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 animate-in" style={{ transitionDelay: '300ms' }}>
                  <span>SOC2-Ready Logs</span>
                  <span className="text-gray-300">&bull;</span>
                  <span>ISO-Aligned Practices</span>
                   <span className="text-gray-300">&bull;</span>
                  <span>GDPR Data Controls</span>
                </div>
              </div>
            </AnimatedSection>
            
            {/* FAQ Section */}
            <AnimatedSection className="py-20 sm:py-28 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 animate-in from-left">
                        <h2 className="text-5xl font-sans font-bold tracking-tighter mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-2 animate-in from-right" style={{transitionDelay: '100ms'}}>
                        {faqItems.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <Comparison />
        </div>
    );
};

export default AccessSolution;
