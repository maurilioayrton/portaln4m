export default function About() {
  const stats = [
    { number: '150+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '24/7', label: 'Suporte Técnico' },
  ];

  const values = [
    { icon: 'ri-lightbulb-flash-line', title: 'Inovação', description: 'Tecnologias de ponta e soluções criativas' },
    { icon: 'ri-shield-check-line', title: 'Qualidade Técnica', description: 'Código limpo, seguro e escalável' },
    { icon: 'ri-rocket-line', title: 'Escalabilidade', description: 'Arquitetura preparada para crescimento' },
    { icon: 'ri-git-merge-line', title: 'Cultura DevOps', description: 'Automação e entrega contínua' },
  ];

  return (
    <section id="sobre" className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-8 rounded-2xl border-t-2 border-[#00d9ff] hover:shadow-xl hover:shadow-[#00d9ff]/20 transition-all group"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0099cc] bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Sobre a <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">Empresa</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Somos uma startup de tecnologia focada em entregar soluções inovadoras e escaláveis que transformam negócios. Nossa equipe combina expertise técnica com visão estratégica para criar sistemas robustos e de alta performance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Com uma abordagem moderna e ágil, utilizamos as melhores práticas de desenvolvimento, arquitetura de software e cultura DevOps para garantir qualidade, segurança e resultados mensuráveis em cada projeto.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#00d9ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d9ff]/20 transition-colors">
                      <i className={`${value.icon} text-[#00d9ff] text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 group-hover:text-[#00d9ff] transition-colors">{value.title}</h3>
                      <p className="text-sm text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00d9ff]/40 to-transparent hidden md:block"></div>
      </div>
    </section>
  );
}