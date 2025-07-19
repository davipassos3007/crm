import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, LogIn, Building, Mail, Lock, User, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Usuários de demonstração
  const demoUsers = [
    {
      email: 'admin@crm.com',
      senha: 'admin123',
      nome: 'Admin Sistema',
      role: 'Administrador',
      icon: Shield,
      color: 'bg-purple-500'
    },
    {
      email: 'joao@crm.com',
      senha: 'vendedor123',
      nome: 'João Vendedor',
      role: 'Vendedor',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      email: 'maria@crm.com',
      senha: 'marketing123',
      nome: 'Maria Marketing',
      role: 'Marketing',
      icon: Mail,
      color: 'bg-green-500'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const result = await login(formData.email, formData.senha);
    if (!result.success) {
      setError(result.error);
    }
  };

  const handleDemoLogin = (user) => {
    setFormData({
      email: user.email,
      senha: user.senha
    });
    setSelectedUser(user);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-2xl">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CRM Imobiliário
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sistema completo de gestão com Inteligência Artificial
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="font-semibold text-gray-900 mb-2">📊 Dashboard Inteligente</div>
                <p className="text-sm text-gray-600">Métricas em tempo real com insights de IA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="font-semibold text-gray-900 mb-2">🤖 Automação IA</div>
                <p className="text-sm text-gray-600">Marketing e vendas automatizados</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="font-semibold text-gray-900 mb-2">📱 Multi-Canal</div>
                <p className="text-sm text-gray-600">WhatsApp, SMS e Push integrados</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="font-semibold text-gray-900 mb-2">🔄 Pipeline Visual</div>
                <p className="text-sm text-gray-600">Kanban interativo para vendas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 lg:hidden">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Building className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Bem-vindo de volta</h2>
              <p className="text-gray-600 mt-2">Entre na sua conta para continuar</p>
            </div>

            {/* Demo Users */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Acesso Rápido (Demo)
              </label>
              <div className="grid grid-cols-1 gap-2">
                {demoUsers.map((user, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDemoLogin(user)}
                    className={`flex items-center p-3 rounded-lg border transition-all ${
                      selectedUser?.email === user.email 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`${user.color} p-2 rounded-lg mr-3`}>
                      <user.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">{user.nome}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Entrando...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <LogIn className="w-5 h-5 mr-2" />
                    Entrar
                  </div>
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Sistema protegido por autenticação segura
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;