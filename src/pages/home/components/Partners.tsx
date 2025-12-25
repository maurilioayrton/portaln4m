import { useState, useEffect } from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = () => {
    const saved = localStorage.getItem('partners_data');
    if (saved) {
      setPartners(JSON.parse(saved));
    } else {
      // Dados padrão
      const defaultPartners: Partner[] = [
        {
          id: '1',
          name: 'TechCorp',
          logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20clean%20minimalist%20design%20on%20white%20background%2C%20professional%20corporate%20brand%20identity%2C%20simple%20geometric%20shapes%2C%20tech%20startup%20branding&width=200&height=100&seq=partner1&orientation=landscape'
        },
        {
          id: '2',
          name: 'InnovaSoft',
          logo: 'https://readdy.ai/api/search-image?query=innovative%20software%20company%20logo%20with%20abstract%20tech%20elements%20on%20white%20background%2C%20modern%20digital%20business%20brand%2C%20clean%20professional%20design%2C%20minimalist%20corporate%20identity&width=200&height=100&seq=partner2&orientation=landscape'
        },
        {
          id: '3',
          name: 'DataFlow',
          logo: 'https://readdy.ai/api/search-image?query=data%20analytics%20company%20logo%20with%20flowing%20lines%20on%20white%20background%2C%20business%20intelligence%20brand%20identity%2C%20professional%20tech%20design%2C%20modern%20corporate%20logo&width=200&height=100&seq=partner3&orientation=landscape'
        },
        {
          id: '4',
          name: 'CloudSystems',
          logo: 'https://readdy.ai/api/search-image?query=cloud%20computing%20company%20logo%20with%20modern%20design%20on%20white%20background%2C%20enterprise%20technology%20brand%2C%20clean%20minimalist%20corporate%20identity%2C%20professional%20business%20logo&width=200&height=100&seq=partner4&orientation=landscape'
        },
        {
          id: '5',
          name: 'DevOps Pro',
          logo: 'https://readdy.ai/api/search-image?query=devops%20technology%20company%20logo%20with%20gear%20elements%20on%20white%20background%2C%20automation%20software%20brand%20identity%2C%20modern%20tech%20corporate%20design%2C%20professional%20minimalist%20logo&width=200&height=100&seq=partner5&orientation=landscape'
        },
        {
          id: '6',
          name: 'SmartBI',
          logo: 'https://readdy.ai/api/search-image?query=business%20intelligence%20company%20logo%20with%20chart%20elements%20on%20white%20background%2C%20data%20visualization%20brand%20identity%2C%20modern%20analytics%20corporate%20design%2C%20clean%20professional%20logo&width=200&height=100&seq=partner6&orientation=landscape'
        },
        {
          id: '7',
          name: 'SecureNet',
          logo: 'https://readdy.ai/api/search-image?query=cybersecurity%20company%20logo%20with%20shield%20design%20on%20white%20background%2C%20network%20security%20brand%20identity%2C%20modern%20tech%20corporate%20logo%2C%20professional%20minimalist%20design&width=200&height=100&seq=partner7&orientation=landscape'
        },
        {
          id: '8',
          name: 'AgileHub',
          logo: 'https://readdy.ai/api/search-image?query=agile%20software%20development%20company%20logo%20on%20white%20background%2C%20modern%20tech%20startup%20brand%20identity%2C%20clean%20geometric%20corporate%20design%2C%20professional%20business%20logo&width=200&height=100&seq=partner8&orientation=landscape'
        }
      ];
      setPartners(defaultPartners);
      localStorage.setItem('partners_data', JSON.stringify(defaultPartners));
    }
  };

  return (
    <section id="parceiros" className="relative py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">Parceiros</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empresas que confiam em nossa expertise tecnológica para impulsionar seus negócios
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-8 hover:bg-white/10 hover:border-[#00d9ff]/30 transition-all duration-300 cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/0 to-[#a855f7]/0 group-hover:from-[#00d9ff]/5 group-hover:to-[#a855f7]/5 rounded-2xl transition-all duration-300"></div>
              
              {/* Logo Container */}
              <div className="relative flex items-center justify-center h-20">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-gray-400">Parceiros Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
              200+
            </div>
            <div className="text-sm text-gray-400">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-sm text-gray-400">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-400">Suporte</div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#a855f7] rounded-full blur-[200px] opacity-5"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00d9ff] rounded-full blur-[200px] opacity-5"></div>
    </section>
  );
}
