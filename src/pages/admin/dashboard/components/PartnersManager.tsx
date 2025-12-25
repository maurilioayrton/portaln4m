import { useState, useEffect } from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export default function PartnersManager() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    logo: ''
  });

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = () => {
    const saved = localStorage.getItem('partners_data');
    if (saved) {
      setPartners(JSON.parse(saved));
    } else {
      // Dados iniciais
      const initialPartners: Partner[] = [
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
        }
      ];
      setPartners(initialPartners);
      localStorage.setItem('partners_data', JSON.stringify(initialPartners));
    }
  };

  const savePartners = (newPartners: Partner[]) => {
    localStorage.setItem('partners_data', JSON.stringify(newPartners));
    setPartners(newPartners);
  };

  const handleOpenModal = (partner?: Partner) => {
    if (partner) {
      setEditingPartner(partner);
      setFormData({
        name: partner.name,
        logo: partner.logo
      });
    } else {
      setEditingPartner(null);
      setFormData({ name: '', logo: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPartner(null);
    setFormData({ name: '', logo: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPartner) {
      // Editar
      const updated = partners.map(p => 
        p.id === editingPartner.id 
          ? { ...p, name: formData.name, logo: formData.logo }
          : p
      );
      savePartners(updated);
    } else {
      // Adicionar
      const newPartner: Partner = {
        id: Date.now().toString(),
        name: formData.name,
        logo: formData.logo
      };
      savePartners([...partners, newPartner]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este parceiro?')) {
      const filtered = partners.filter(p => p.id !== id);
      savePartners(filtered);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Gerenciar Parceiros</h2>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Adicionar Parceiro
        </button>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white/5 border border-[#ffffff10] rounded-lg p-6 hover:border-[#00d9ff]/30 transition-colors"
          >
            <div className="flex items-center justify-center h-24 mb-4 bg-white rounded-lg">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-white font-semibold text-center mb-4">{partner.name}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleOpenModal(partner)}
                className="flex-1 px-3 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] rounded-lg hover:bg-[#00d9ff]/20 transition-colors text-sm whitespace-nowrap"
              >
                <i className="ri-edit-line mr-1"></i>
                Editar
              </button>
              <button
                onClick={() => handleDelete(partner.id)}
                className="flex-1 px-3 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-[#1a1a1a] border border-[#ffffff10] rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-6">
              {editingPartner ? 'Editar Parceiro' : 'Adicionar Parceiro'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome do Parceiro
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                  placeholder="Ex: TechCorp"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL da Logo
                </label>
                <input
                  type="url"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                  placeholder="https://exemplo.com/logo.png"
                  required
                />
              </div>

              {formData.logo && (
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
                  <img
                    src={formData.logo}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-3 bg-white/5 border border-[#ffffff10] text-gray-300 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  {editingPartner ? 'Salvar' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
