import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CheckIcon } from './Icons';

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
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  image: React.ReactNode;
  imagePosition: 'left' | 'right';
  className?: string;
}> = ({ title, description, features, ctaText, image, imagePosition, className }) => {
  const isImageLeft = imagePosition === 'left';
  return (
    <AnimatedSection className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
          <div className={`animate-in ${isImageLeft ? 'from-left' : 'from-right'} ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            {image}
          </div>
          <div className={`animate-in ${isImageLeft ? 'from-right' : 'from-left'} ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`} style={{ transitionDelay: '100ms' }}>
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


const BusinessCardSolution: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section with Video */}
            <AnimatedSection className="pt-36 pb-24 sm:pt-48 sm:pb-32 px-4 text-center">
                 <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl lg:text-7xl font-sans font-bold tracking-tighter mb-4 animate-in">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                           The smarter way to connect and grow your network
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8 animate-in" style={{ transitionDelay: '100ms' }}>
                        Hawkforce ID gives you the power to build a customizable virtual business card that turns first meetings into lasting connections.
                    </p>
                    <div className="max-w-3xl mx-auto rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden animate-in" style={{ transitionDelay: '200ms' }}>
                        <video
                            src="https://cdn.prod.website-files.com/617ac0d059899a9a3c8216e9%2F68119c652d9a6285f4bb784b_01%20New%20Create%20a%20card%20%282%29-transcode.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                </div>
            </AnimatedSection>

            {/* Customization Section */}
            <ContentSection
                title="Your Card, Your Brand"
                description="Hawkforce ID makes sure your digital business card is always on-brand."
                features={[
                    "Fully customize your card",
                    "Add unlimited links",
                    "Create multiple digital business cards",
                    "Make instant updates"
                ]}
                ctaText="Create my free digital business card"
                imagePosition="left"
                image={<img src="https://framerusercontent.com/images/8rQ2XhI4m1Y3s5aY2P2Z8A5A.svg" alt="Customization Graphic" className="w-full h-auto" />}
            />
            
            {/* Sharing Section */}
            <ContentSection
                title="Share with anyone, any way"
                description="Hawkforce ID ensures you're able to exchange details quickly and efficiently, opening the door to new opportunities."
                features={[
                    "Available via iOS, Android and web",
                    "Share using QR code, NFC card, widget, smart watch, text, email or personal link",
                    "Share online or offline, your card is always available",
                    "Make lead capture painless with the best-in-class sharing experience",
                    "Enrich each contact with notes and tags to make following up simple"
                ]}
                ctaText="Create my card"
                imagePosition="right"
                image={<img src="https://framerusercontent.com/images/LQKuaHoocBNNOUwcuUIayGZ8z8.png" alt="Sharing methods graphic" className="w-full h-auto rounded-2xl shadow-lg" />}
                className="bg-gray-50/70"
            />

            {/* Integrations Section */}
            <ContentSection
                title="Sync with your existing tech"
                description="Hawkforce ID integrates seamlessly with your existing tools and workflows, enabling smart business and automated solutions."
                features={[
                    "Native CRM integrations with Salesforce, HubSpot, Microsoft Dynamics, Zoho, Pipedrive and more.",
                    "Enriched contact data and event tags that flow directly into your sales funnel",
                    "Transform your digital business card into email signatures that work with Google Workspace, Outlook, Apple Mail, and other email platforms",
                    "Create professional virtual backgrounds for Zoom, Microsoft Teams, and Google Meet using your company branding"
                ]}
                ctaText="Get started"
                imagePosition="left"
                image={<img src="https://framerusercontent.com/images/jt6hxbLaCBNrS66LsJbeYLxd4no.png" alt="Integrations graphic" className="w-full h-auto" />}
            />
            
            {/* Security Section */}
            <ContentSection
                title="The most secure digital business card"
                description="Hawkforce ID is built with enterprise-grade privacy and security, keeping your data protected."
                features={[
                    "Hawkforce ID is SOC 2 Type II Certified and GDPR-ready",
                    "Single Sign-On (SSO) integration ensures secure access management across your entire team",
                    "Enforce SSO via SAML available",
                    "Annual testing and third-party audits"
                ]}
                ctaText="Create my card"
                imagePosition="right"
                image={<img src="https://framerusercontent.com/images/NUbGSZcPrAH7CFfBazSJOsGIP4.png" alt="Security graphic" className="w-full h-auto" />}
                className="bg-gray-50/70"
            />
        </div>
    );
};

export default BusinessCardSolution;