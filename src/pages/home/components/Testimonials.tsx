import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const saved = localStorage.getItem('testimonials_data');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Dados padrão
      const defaultTestimonials: Testimonial[] = [
        {
          id: '1',
          name: 'Carlos Mendes',
          role: 'CTO',
          company: 'TechFlow Solutions',
          content: 'A equipe entregou um sistema robusto e escalável que transformou nossa operação. A expertise técnica e o suporte contínuo fazem toda a diferença.',
          rating: 5,
          avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20executive%20portrait%20headshot%2C%20confident%20male%20technology%20leader%20in%20modern%20office%2C%20corporate%20professional%20photography%2C%20clean%20white%20background&width=100&height=100&seq=avatar1&orientation=squarish'
        },
        {
          id: '2',
          name: 'Ana Paula Silva',
          role: 'Diretora de TI',
          company: 'InnovaCorp',
          content: 'Implementação de DevOps impecável! Reduzimos o tempo de deploy em 70% e aumentamos significativamente a confiabilidade dos nossos sistemas.',
          rating: 5,
          avatar: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20portrait%20headshot%2C%20confident%20female%20technology%20director%20in%20modern%20office%2C%20corporate%20professional%20photography%2C%20clean%20white%20background&width=100&height=100&seq=avatar2&orientation=squarish'
        },
        {
          id: '3',
          name: 'Roberto Almeida',
          role: 'CEO',
          company: 'DataVision',
          content: 'Os dashboards de BI desenvolvidos nos deram insights valiosos para tomada de decisão. Visualização clara e dados precisos que impactam diretamente nossos resultados.',
          rating: 5,
          avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20CEO%20portrait%20headshot%2C%20confident%20male%20executive%20in%20suit%2C%20corporate%20professional%20photography%2C%20clean%20white%20background&width=100&height=100&seq=avatar3&orientation=squarish'
        }
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem('testimonials_data', JSON.stringify(defaultTestimonials));
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            O que dizem nossos <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram seus negócios com nossa tecnologia
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm border border-[#ffffff10] rounded-3xl p-12">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-[#a855f7]/5 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] rounded-2xl flex items-center justify-center mb-8 w-16 h-16">
                <i className="ri-double-quotes-l text-3xl text-white"></i>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`ri-star-${i < currentTestimonial.rating ? 'fill' : 'line'} text-2xl text-yellow-400`}
                  ></i>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                {currentTestimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{currentTestimonial.name}</h4>
                  <p className="text-gray-400">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/5 border border-[#ffffff10] rounded-full hover:bg-white/10 hover:border-[#00d9ff]/30 transition-all flex items-center justify-center cursor-pointer w-12 h-12"
            >
              <i className="ri-arrow-left-s-line text-2xl text-white"></i>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#00d9ff] to-[#a855f7]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/5 border border-[#ffffff10] rounded-full hover:bg-white/10 hover:border-[#00d9ff]/30 transition-all flex items-center justify-center cursor-pointer w-12 h-12"
            >
              <i className="ri-arrow-right-s-line text-2xl text-white"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00d9ff] rounded-full blur-[200px] opacity-5"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#a855f7] rounded-full blur-[200px] opacity-5"></div>
    </section>
  );
}
