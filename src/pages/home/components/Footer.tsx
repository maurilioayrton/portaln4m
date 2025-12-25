export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Parceiros', href: '#parceiros' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const services = [
    { name: 'Desenvolvimento', href: '#servicos' },
    { name: 'DevOps', href: '#servicos' },
    { name: 'Business Intelligence', href: '#servicos' },
    { name: 'Observabilidade', href: '#servicos' },
    { name: 'Sustentação', href: '#servicos' },
  ];

  const social = [
    { icon: 'ri-linkedin-fill', href: '#', label: 'LinkedIn' },
    { icon: 'ri-github-fill', href: '#', label: 'GitHub' },
    { icon: 'ri-twitter-x-fill', href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src="https://static.readdy.ai/image/a4107b7db040259406fd2e033d7aabd4/8af8b2301052d56f5c25752b388ff326.png" 
              alt="Logo" 
              className="h-10 mb-4"
            />
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Transformando tecnologia em resultados reais com inovação e qualidade técnica de alto nível.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all cursor-pointer"
                  aria-label={item.label}
                >
                  <i className={`${item.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-phone-line text-gray-400 mt-1"></i>
                <a 
                  href="https://wa.me/5561992149630"
                  className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors cursor-pointer"
                >
                  +55 61 99214-9630
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-gray-400 mt-1"></i>
                <a 
                  href="mailto:contato@empresa.com"
                  className="text-sm text-gray-400 hover:text-[#00d9ff] transition-colors cursor-pointer"
                >
                  contato@empresa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-gray-400 mt-1"></i>
                <span className="text-sm text-gray-400">
                  Brasília, DF - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#ffffff10] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#00d9ff] transition-colors cursor-pointer">
              Privacidade
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-sm text-gray-500 hover:text-[#00d9ff] transition-colors cursor-pointer">
              Termos de Uso
            </a>
            <span className="text-gray-700">|</span>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#00d9ff] transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}