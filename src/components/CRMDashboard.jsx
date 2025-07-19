import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCRM } from '../contexts/CRMContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  TrendingUp,
  Bot,
  Home,
  DollarSign,
  MapPin,
  Star,
  Send,
  Plus,
  Filter,
  Search,
  BarChart3,
  Settings,
  Bell,
  User,
  Building,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  Menu,
  X,
  Zap,
  Target,
  ChevronDown,
  Play,
  Pause,
  BarChart,
  TrendingDown,
  Workflow,
  FileText,
  Activity,
  PieChart,
  Smartphone,
  MessageCircle,
  Volume2,
  Radio,
  Upload,
  Download,
  Globe,
  Megaphone,
  Sun,
  Moon,
  LogOut
} from 'lucide-react';

// Import all the existing components
import DashboardCharts from './DashboardCharts';
import PipelineKanban from './PipelineKanban';

const CRMDashboard = () => {
  const { user, logout, theme, toggleTheme, hasPermission } = useAuth();
  const { 
    leads, 
    analytics, 
    notifications, 
    markNotificationAsRead,
    getUpcomingActivities 
  } = useCRM();

  // Estados
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  // Dados para componentes antigos (temporário)
  const [selectedLead, setSelectedLead] = useState(null);
  const [showBulkMessage, setShowBulkMessage] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Estados de Marketing/Comunicação (reaproveitando lógica antiga)
  const [campanhas, setCampanhas] = useState([
    {
      id: 1,
      nome: 'Campanha Leads Novos',
      tipo: 'email',
      status: 'ativa',
      enviados: 1250,
      abertos: 312,
      cliques: 48,
      conversoes: 12,
      dataInicio: '2025-01-15',
      segmento: 'novos'
    },
    {
      id: 2,
      nome: 'WhatsApp Follow-up',
      tipo: 'whatsapp',
      status: 'ativa',
      enviados: 890,
      abertos: 756,
      cliques: 89,
      conversoes: 23,
      dataInicio: '2025-01-10',
      segmento: 'interessados'
    }
  ]);

  const [imoveis, setImoveis] = useState([
    {
      id: 1,
      titulo: 'Apartamento 3 dorm - Vila Madalena',
      tipo: 'apartamento',
      valor: 650000,
      area: 85,
      dormitorios: 3,
      banheiros: 2,
      vagas: 1,
      endereco: 'Vila Madalena, São Paulo - SP',
      status: 'disponivel'
    }
  ]);

  // Dashboard melhorado
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Olá, {user?.nome}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Aqui está um resumo do seu dia
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('pipeline')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Ver Pipeline
          </motion.button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border dark:border-gray-700"
        >
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{leads.length}</p>
              <p className="text-sm text-green-600">+12% vs mês anterior</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border dark:border-gray-700"
        >
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Pipeline Total</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                R$ {(analytics.totalPipeline || 0).toLocaleString()}
              </p>
              <p className="text-sm text-green-600">+18% vs mês anterior</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border dark:border-gray-700"
        >
          <div className="flex items-center">
            <Target className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Taxa Conversão</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{analytics.conversionRate}%</p>
              <p className="text-sm text-green-600">+3.2% vs mês anterior</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border dark:border-gray-700"
        >
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Atividades Hoje</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {getUpcomingActivities().length}
              </p>
              <p className="text-sm text-orange-600">3 pendentes</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Charts */}
      <DashboardCharts />
    </div>
  );

  // Sidebar melhorada
  const Sidebar = () => {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home, permission: 'all' },
      { id: 'pipeline', label: 'Pipeline', icon: BarChart3, permission: 'leads' },
      { id: 'leads', label: 'Leads', icon: Users, permission: 'leads' },
      { id: 'imoveis', label: 'Imóveis', icon: Building, permission: 'imoveis' },
      { id: 'marketing', label: 'Marketing', icon: Zap, permission: 'marketing' },
      { id: 'comunicacao', label: 'Comunicação', icon: Megaphone, permission: 'comunicacao' },
      { id: 'calendar', label: 'Agenda', icon: Calendar, permission: 'all' },
      { id: 'reports', label: 'Relatórios', icon: BarChart3, permission: 'all' },
      { id: 'settings', label: 'Configurações', icon: Settings, permission: 'all' },
    ];

    return (
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-blue-600 dark:bg-blue-700">
          <h1 className="text-xl font-bold text-white">CRM Imobiliário</h1>
        </div>
        
        <nav className="mt-8 px-4">
          {menuItems.map(item => {
            if (!hasPermission(item.permission) && item.permission !== 'all') {
              return null;
            }
            
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 mb-2 text-left rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 w-full p-4 border-t dark:border-gray-700">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.nome}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex-1 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="flex-1 p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded"
            >
              <LogOut className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Header melhorado
  const Header = () => (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        
        {/* Global Search */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar leads, imóveis, campanhas..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative"
            >
              <Bell className="w-6 h-6" />
              {notifications.filter(n => !n.lida).length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.filter(n => !n.lida).length}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
                >
                  <div className="p-4 border-b dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notificações</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          !notification.lida ? 'bg-blue-50 dark:bg-blue-900' : ''
                        }`}
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <div className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                            notification.tipo === 'urgent' ? 'bg-red-500' :
                            notification.tipo === 'success' ? 'bg-green-500' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {notification.titulo}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {notification.mensagem}
                            </p>
                            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                              {new Date(notification.data).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Avatar */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );

  // Renderização do conteúdo
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'pipeline':
        return <PipelineKanban />;
      case 'leads':
        return <div>Leads Component (em desenvolvimento)</div>;
      case 'imoveis':
        return <div>Imóveis Component (em desenvolvimento)</div>;
      case 'marketing':
        return <div>Marketing Component (em desenvolvimento)</div>;
      case 'comunicacao':
        return <div>Comunicação Component (em desenvolvimento)</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        <Header />
        
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMDashboard;