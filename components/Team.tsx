import React from 'react';
import AnimatedSection from './AnimatedSection';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://framerusercontent.com/images/W7xYkGKzPzvnPv8ZBNzxS3JZI.jpg',
  },
  {
    name: 'Lena Martinez',
    role: 'Head of AI Research',
    image: 'https://framerusercontent.com/images/PG5vQAQIzOrDyrT8NDWpDNTPoY.png',
  },
  {
    name: 'Eli Rivera',
    role: 'Lead Product Strategist',
    image: 'https://framerusercontent.com/images/gcvmIxm2XRx6NG3kYAPz3zZXc6E.jpg',
  },
];

// FIX: Added React.FC to correctly type the component and allow for the `key` prop.
const TeamMemberCard: React.FC<{ name: string; role: string; image: string, className?: string; style?: React.CSSProperties }> = ({ name, role, image, className, style }) => (
  <div style={style} className={`text-center flex flex-col items-center group ${className}`}>
    <img className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300" src={image} alt={name} loading="lazy" />
    <h3 className="mt-6 text-xl font-bold text-gray-900 font-jakarta">{name}</h3>
    <p className="mt-1 text-gray-600">{role}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <AnimatedSection id="team" className="py-20 sm:py-28 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in from-right">
          <div className="inline-block bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-4">
            OUR TEAM
          </div>
          <h2 className="text-7xl font-sans font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              The Minds Behind the Magic
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-lg">
            Meet the innovators and experts driving our AI solutions forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              name={member.name}
              role={member.role}
              image={member.image}
              className={`animate-in ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Team;