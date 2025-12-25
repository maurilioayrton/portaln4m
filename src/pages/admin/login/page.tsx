import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Credenciais hardcoded
    if (formData.username === 'maurilio.alves' && formData.password === '2331') {
      localStorage.setItem('admin_authenticated', 'true');
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 500);
    } else {
      setError('Usuário ou senha incorretos');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center px-6">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00d9ff] rounded-full blur-[200px] opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a855f7] rounded-full blur-[200px] opacity-10"></div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="https://static.readdy.ai/image/a4107b7db040259406fd2e033d7aabd4/8af8b2301052d56f5c25752b388ff326.png"
            alt="Logo"
            className="h-12 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Área Administrativa</h1>
          <p className="text-gray-400">Faça login para acessar o painel</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Usuário
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                placeholder="Digite seu usuário"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-[#ffffff10] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] transition-colors"
                placeholder="Digite sua senha"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
          >
            ← Voltar para o site
          </a>
        </div>
      </div>
    </div>
  );
}
