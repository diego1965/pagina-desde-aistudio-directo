

import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Benefits from './components/Benefits.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import ChefIAI from './components/ChefIAI.tsx';
import Testimonials from './components/Testimonials.tsx';
import Blog from './components/Blog.tsx';
import Cta from './components/Cta.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';

const App: React.FC = () => {

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        
        if (href === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          return;
        }

        const targetId = href?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerOffset = 80; // h-20 header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);


  return (
    <div className="bg-slate-900 text-gray-300 font-sans leading-relaxed">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-cyan-500/[0.05] -z-1"></div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <ChefIAI />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;