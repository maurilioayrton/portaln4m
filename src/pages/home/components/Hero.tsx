import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00d9ff';
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00d9ff] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#a855f7] rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Transformamos{' '}
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">
              tecnologia
            </span>
            {' '}em resultados reais
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Soluções tecnológicas escaláveis e inovadoras para impulsionar o crescimento do seu negócio com qualidade e performance de alto nível.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contato"
              className="group bg-gradient-to-r from-[#00d9ff] to-[#0099cc] px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-[#00d9ff]/40 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              Fale com um especialista
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#servicos"
              className="px-8 py-4 rounded-full text-base font-semibold border border-[#ffffff20] hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all whitespace-nowrap cursor-pointer"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[500px]">
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          
          {/* Floating Cards */}
          <div className="absolute top-10 right-10 w-64 h-40 bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#00d9ff]/20 rounded-lg flex items-center justify-center">
                <i className="ri-code-s-slash-line text-[#00d9ff] text-xl"></i>
              </div>
              <div className="text-sm text-gray-400">Development</div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-[#00d9ff]/30 rounded-full w-full"></div>
              <div className="h-2 bg-[#00d9ff]/20 rounded-full w-3/4"></div>
              <div className="h-2 bg-[#00d9ff]/10 rounded-full w-1/2"></div>
            </div>
          </div>

          <div className="absolute bottom-20 left-10 w-56 h-36 bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#a855f7]/20 rounded-lg flex items-center justify-center">
                <i className="ri-dashboard-line text-[#a855f7] text-xl"></i>
              </div>
              <div className="text-sm text-gray-400">Analytics</div>
            </div>
            <div className="flex items-end gap-2 h-16">
              <div className="w-8 h-8 bg-[#a855f7]/30 rounded"></div>
              <div className="w-8 h-12 bg-[#a855f7]/40 rounded"></div>
              <div className="w-8 h-16 bg-[#a855f7]/50 rounded"></div>
              <div className="w-8 h-10 bg-[#a855f7]/30 rounded"></div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#00d9ff]/20 to-[#a855f7]/20 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-gray-600"></i>
      </div>
    </section>
  );
}