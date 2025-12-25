export default function Services() {
  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Desenvolvimento de Sistemas',
      description: 'Sistemas sob medida e escaláveis com arquitetura moderna e segura, preparados para o crescimento do seu negócio.',
      tags: ['React', 'Node.js', 'TypeScript', 'Microservices'],
      gradient: 'from-[#00d9ff] to-[#0099cc]',
    },
    {
      icon: 'ri-git-branch-line',
      title: 'DevOps – Esteira Completa',
      description: 'CI/CD, automação de deploy e infraestrutura como código para entregas rápidas e confiáveis.',
      tags: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      gradient: 'from-[#a855f7] to-[#7c3aed]',
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Business Intelligence',
      description: 'Dashboards com Power BI para visualização e análise de dados estratégicos que impulsionam decisões.',
      tags: ['Power BI', 'SQL', 'Data Analytics', 'ETL'],
      gradient: 'from-[#00d9ff] to-[#a855f7]',
    },
    {
      icon: 'ri-eye-line',
      title: 'Observabilidade e Monitoramento',
      description: 'Grafana e Sentry para monitoramento de performance, detecção de erros e análise de comportamento.',
      tags: ['Grafana', 'Sentry', 'Prometheus', 'Logs'],
      gradient: 'from-[#0099cc] to-[#00d9ff]',
    },
    {
      icon: 'ri-tools-line',
      title: 'Sustentação de Sistemas',
      description: 'Manutenção e evolução de sistemas legados em Java, PHP, Node.js, Angular e SQL Server.',
      tags: ['Java', 'PHP', 'Angular', 'SQL Server'],
      gradient: 'from-[#7c3aed] to-[#a855f7]',
    },
  ];

  return (
    <section id="servicos" className="relative py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções tecnológicas completas para transformar e escalar seu negócio com qualidade e inovação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] border border-[#ffffff15] rounded-2xl p-8 hover:border-[#00d9ff] hover:shadow-2xl hover:shadow-[#00d9ff]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00d9ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#2a2a2a] text-[#00d9ff] text-xs rounded-full border border-[#00d9ff]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d9ff] to-[#0099cc] px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-[#00d9ff]/40 transition-all whitespace-nowrap cursor-pointer"
          >
            Solicite um orçamento
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d9ff] rounded-full blur-[200px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a855f7] rounded-full blur-[200px] opacity-10"></div>
    </section>
  );
}