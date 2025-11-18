
'use client';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const projects = [
    {
        id: 'project1',
        tabName: 'PROJECT 1',
        title: 'MedixCare — AI Triage Assistant for Healthcare',
        image: 'https://framerusercontent.com/images/N22bVoJydO38s0kOIVYogSPk7IE.png',
        stats: [
            { value: '40%', label: 'Reduced average wait' },
            { value: '35%', label: 'Rise in patient satisfaction' }
        ]
    },
    {
        id: 'project2',
        tabName: 'PROJECT 2',
        title: 'Fintech — AI-Powered Fraud Detection System',
        image: 'https://framerusercontent.com/images/LQKuaHoocBNNOUwcuUIayGZ8z8.png',
        stats: [
            { value: '50%', label: 'Reduction in fraud cases' },
            { value: '25%', label: 'Improved transaction speed' }
        ]
    },
    {
        id: 'project3',
        tabName: 'PROJECT 3',
        title: 'Workwise — Automated HR Workflow Bot',
        image: 'https://framerusercontent.com/images/gcvmIxm2XRx6NG3kYAPz3zZXc6E.jpg',
        stats: [
            { value: '60%', label: 'Saved admin time' },
            { value: '35%', label: 'Improved team output' }
        ]
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState(projects[0].id);

    const activeProject = projects.find(p => p.id === activeTab);

    return (
        <AnimatedSection id="projects" className="py-20 sm:py-28 px-4 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                        <span className="text-sm font-medium text-gray-700">PROJECTS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance font-jakarta">Proven Impact & Results</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
                        Explore Projects that reflect our AI expertise & real world impact
                    </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex justify-center border-b border-gray-200">
                        {projects.map(project => (
                            <button
                                key={project.id}
                                onClick={() => setActiveTab(project.id)}
                                className={`px-4 sm:px-8 py-4 text-sm font-semibold transition-colors relative ${activeTab === project.id ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                {project.tabName}
                                {activeTab === project.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></span>}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                           {activeProject && <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" loading="lazy"/> }
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-semibold text-gray-500 mb-2">0{projects.findIndex(p => p.id === activeTab) + 1}</p>
                            <h3 className="text-2xl font-bold font-jakarta mb-4">{activeProject?.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {activeProject?.stats.map((stat, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200/80 shadow-sm">
                                        <p className="text-3xl font-bold font-jakarta">{stat.value}</p>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AnimatedSection>
    );
};

export default Projects;