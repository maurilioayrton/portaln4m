
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/a4107b7db040259406fd2e033d7aabd4/8af8b2301052d56f5c25752b388ff326.png" 
              alt="Logo" 
              className="h-10"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors whitespace-nowrap cursor-pointer">Sobre</a>
            <a href="#servicos" className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors whitespace-nowrap cursor-pointer">Serviços</a>
            <a href="#parceiros" className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors whitespace-nowrap cursor-pointer">Parceiros</a>
            <a href="#depoimentos" className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors whitespace-nowrap cursor-pointer">Depoimentos</a>
            <a href="#contato" className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors whitespace-nowrap cursor-pointer">Contato</a>
          </div>
          <a 
            href="https://wa.me/5561992149630" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#00d9ff] to-[#0099cc] px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/30 transition-all whitespace-nowrap cursor-pointer"
          >
            Fale Conosco
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Services />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}