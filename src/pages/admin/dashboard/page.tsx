import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PartnersManager from './components/PartnersManager';
import TestimonialsManager from './components/TestimonialsManager';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'partners' | 'testimonials'>('partners');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-[#ffffff10] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://static.readdy.ai/image/a4107b7db040259406fd2e033d7aabd4/8af8b2301052d56f5c25752b388ff326.png"
                alt="Logo"
                className="h-8"
              />
              <h1 className="text-xl font-bold text-white">Painel Administrativo</h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
              >
                Ver Site
              </a>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm whitespace-nowrap"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white/5 backdrop-blur-sm border border-[#ffffff10] rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'partners'
                ? 'bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="ri-team-line mr-2"></i>
            Parceiros
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'testimonials'
                ? 'bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="ri-chat-quote-line mr-2"></i>
            Depoimentos
          </button>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-8">
          {activeTab === 'partners' && <PartnersManager />}
          {activeTab === 'testimonials' && <TestimonialsManager />}
        </div>
      </div>
    </div>
  );
}
