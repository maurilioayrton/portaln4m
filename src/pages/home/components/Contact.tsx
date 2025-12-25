export default function Contact() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004d5c] via-[#003d4d] to-[#4a1a5c]"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
        }}></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#00d9ff] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#a855f7] rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center animate-pulse">
            <i className="ri-customer-service-2-line text-white text-4xl"></i>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Solicite um Contato Agora
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Fale com nossos especialistas e descubra como podemos transformar seu negócio com tecnologia de ponta
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5561992149630"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20bd5a] px-10 py-5 rounded-full text-lg font-semibold text-white shadow-2xl hover:shadow-[#25d366]/50 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-whatsapp-line text-3xl"></i>
          </div>
          Falar no WhatsApp
        </a>

        {/* Contact Info */}
        <div className="mt-8 text-gray-300">
          <p className="text-sm">ou ligue diretamente para</p>
          <p className="text-lg font-semibold mt-2">+55 61 99214-9630</p>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#00d9ff]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-[#00d9ff] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white mb-2">Resposta Rápida</h3>
            <p className="text-sm text-gray-300">Retornamos em até 24 horas</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#00d9ff]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-[#00d9ff] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white mb-2">Consultoria Gratuita</h3>
            <p className="text-sm text-gray-300">Primeira análise sem custo</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#00d9ff]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-[#00d9ff] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white mb-2">Qualidade Garantida</h3>
            <p className="text-sm text-gray-300">Satisfação do cliente em 1º lugar</p>
          </div>
        </div>
      </div>
    </section>
  );
}