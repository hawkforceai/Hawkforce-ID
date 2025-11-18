
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { ArrowUpIcon } from './components/Icons';
import Services from './components/Services';
import Contact from './components/Contact';
import AccessSolution from './components/AccessSolution';
import BusinessCardSolution from './components/BusinessCardSolution';
import ValueProposition from './components/LogoGenerator';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [page, setPage] = React.useState('home');

  const navigateTo = (target: string) => {
    const [pageName, hash] = target.split('#');

    if (hash) {
      setPage('home');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      setPage(pageName || 'home');
      window.scrollTo(0, 0);
    }
  };


  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      
      // For scroll to top button
      if (!showScrollTop && offset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && offset <= 400) {
        setShowScrollTop(false);
      }

      // For header shrink
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderPage = () => {
    switch(page) {
      case 'access-solution':
        return <AccessSolution />;
      case 'business-card-solution':
        return <BusinessCardSolution />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services navigateTo={navigateTo} />
            <ValueProposition />
            <Faq />
            <Contact />
          </>
        )
    }
  }

  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      <Header isScrolled={isScrolled} navigateTo={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-16 right-5 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 animate-float hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;