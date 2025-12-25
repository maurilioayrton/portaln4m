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

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
    avatar: ''
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const saved = localStorage.getItem('testimonials_data');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Dados iniciais
      const initialTestimonials: Testimonial[] = [
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
      setTestimonials(initialTestimonials);
      localStorage.setItem('testimonials_data', JSON.stringify(initialTestimonials));
    }
  };

  const saveTestimonials = (newTestimonials: Testimonial[]) => {
    localStorage.setItem('testimonials_data', JSON.stringify(newTestimonials));
    setTestimonials(newTestimonials);
  };

  const handleOpenModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        content: testimonial.content,
        rating: testimonial.rating,
        avatar: testimonial.avatar
      });
    } else {
      setEditingTestimonial(null);
      setFormData({
        name: '',
        role: '',
        company: '',
        content: '',
        rating: 5,
        avatar: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
    setFormData({
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 5,
      avatar: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingTestimonial) {
      // Editar
      const updated = testimonials.map(t => 
        t.id === editingTestimonial.id 
          ? { ...t, ...formData }
          : t
      );
      saveTestimonials(updated);
    } else {
      // Adicionar
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        ...formData
      };
      saveTestimonials([...testimonials, newTestimonial]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este depoimento?')) {
      const filtered = testimonials.filter(t => t.id !== id);
      saveTestimonials(filtered);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Gerenciar Depoimentos</h2>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Adicionar Depoimento
        </button>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/5 border border-[#ffffff10] rounded-lg p-6 hover:border-[#00d9ff]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenModal(testimonial)}
                      className="px-3 py-1 bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] rounded-lg hover:bg-[#00d9ff]/20 transition-colors text-sm whitespace-nowrap"
                    >
                      <i className="ri-edit-line"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm whitespace-nowrap"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-${i < testimonial.rating ? 'fill' : 'line'} text-yellow-400`}
                    ></i>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-y-auto">
          <div className="bg-[#1a1a1a] border border-[#ffffff10] rounded-2xl p-8 max-w-2xl w-full my-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {editingTestimonial ? 'Editar Depoimento' : 'Adicionar Depoimento'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                    placeholder="Ex: Carlos Mendes"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                    placeholder="Ex: CTO"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                  placeholder="Ex: TechFlow Solutions"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Depoimento
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors resize-none"
                  placeholder="Digite o depoimento..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Avaliação: {formData.rating} estrelas
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-${i < formData.rating ? 'fill' : 'line'} text-yellow-400 text-xl`}
                    ></i>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL do Avatar
                </label>
                <input
                  type="url"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                  placeholder="https://exemplo.com/avatar.jpg"
                  required
                />
              </div>

              {formData.avatar && (
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={formData.avatar}
                      alt="Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
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
                  {editingTestimonial ? 'Salvar' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
