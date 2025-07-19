import React, { useState, useEffect } from 'react';
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
  Megaphone
} from 'lucide-react';

const CRMImobiliario = () => {
  // Estados principais
  const [activeTab, setActiveTab] = useState('dashboard');
  const [leads, setLeads] = useState([]);
  const [imoveis, setImoveis] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddLead, setShowAddLead] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // IA Assistant
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [aiAnalytics, setAiAnalytics] = useState({});

  // Marketing Automation
  const [campanhas, setCampanhas] = useState([]);
  const [automacoes, setAutomacoes] = useState([]);
  const [funis, setFunis] = useState([]);
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Comunicação em Massa
  const [dispensadores, setDispensadores] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [showBulkMessage, setShowBulkMessage] = useState(false);
  const [selectedLeadsForBulk, setSelectedLeadsForBulk] = useState([]);
  const [bulkMessageType, setBulkMessageType] = useState('whatsapp');
  const [bulkMessage, setBulkMessage] = useState('');
  const [scheduledMessages, setScheduledMessages] = useState([]);

  // Dados mockados iniciais
  useEffect(() => {
    setLeads([
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        telefone: '(11) 99999-9999',
        status: 'novo',
        score: 85,
        origem: 'whatsapp',
        interesse: 'compra',
        orcamento: 500000,
        localizacao: 'São Paulo - SP',
        ultimaInteracao: '2025-01-18',
        tags: ['urgente', 'qualificado']
      },
      {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria@email.com',
        telefone: '(11) 88888-8888',
        status: 'interessado',
        score: 92,
        origem: 'formulario',
        interesse: 'aluguel',
        orcamento: 3000,
        localizacao: 'Santos - SP',
        ultimaInteracao: '2025-01-17',
        tags: ['hot']
      },
      {
        id: 3,
        nome: 'Carlos Oliveira',
        email: 'carlos@email.com',
        telefone: '(11) 77777-7777',
        status: 'proposta',
        score: 95,
        origem: 'indicacao',
        interesse: 'compra',
        orcamento: 800000,
        localizacao: 'Guarulhos - SP',
        ultimaInteracao: '2025-01-18',
        tags: ['vip']
      }
    ]);

    setImoveis([
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
      },
      {
        id: 2,
        titulo: 'Casa 4 dorm - Alphaville',
        tipo: 'casa',
        valor: 1200000,
        area: 250,
        dormitorios: 4,
        banheiros: 3,
        vagas: 2,
        endereco: 'Alphaville, Barueri - SP',
        status: 'disponivel'
      }
    ]);

    // IA Analytics inicial
    setAiAnalytics({
      conversionRate: 23.5,
      avgResponseTime: '2.3 min',
      hotLeads: 12,
      predictedSales: 8
    });

    // Dados de automação de marketing
    setCampanhas([
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
      },
      {
        id: 3,
        nome: 'Nurturing Compradores VIP',
        tipo: 'email',
        status: 'pausada',
        enviados: 156,
        abertos: 98,
        cliques: 34,
        conversoes: 8,
        dataInicio: '2025-01-01',
        segmento: 'vip'
      }
    ]);

    setAutomacoes([
      {
        id: 1,
        nome: 'Lead Score Alto',
        trigger: 'score >= 90',
        acao: 'Enviar WhatsApp urgente',
        status: 'ativa',
        execucoes: 23
      },
      {
        id: 2,
        nome: 'Sem interação 3 dias',
        trigger: 'ultima_interacao > 3 dias',
        acao: 'Email follow-up',
        status: 'ativa',
        execucoes: 156
      },
      {
        id: 3,
        nome: 'Orçamento > 800k',
        trigger: 'orcamento > 800000',
        acao: 'Agendar ligação',
        status: 'ativa',
        execucoes: 12
      }
    ]);

    setFunis([
      {
        id: 1,
        nome: 'Funil Compra Residencial',
        etapas: [
          { nome: 'Lead Novo', quantidade: 120, conversao: 100 },
          { nome: 'Qualificado', quantidade: 89, conversao: 74.2 },
          { nome: 'Apresentação', quantidade: 45, conversao: 50.6 },
          { nome: 'Proposta', quantidade: 23, conversao: 51.1 },
          { nome: 'Fechamento', quantidade: 12, conversao: 52.2 }
        ]
      },
      {
        id: 2,
        nome: 'Funil Locação',
        etapas: [
          { nome: 'Interessado', quantidade: 85, conversao: 100 },
          { nome: 'Visita Agendada', quantidade: 67, conversao: 78.8 },
          { nome: 'Documentação', quantidade: 34, conversao: 50.7 },
          { nome: 'Contrato', quantidade: 28, conversao: 82.4 }
        ]
      }
    ]);

    // Dados de comunicação em massa
    setDispensadores([
      {
        id: 1,
        nome: 'Boas-vindas Novos Leads',
        tipo: 'whatsapp',
        status: 'enviado',
        destinatarios: 45,
        enviados: 45,
        entregues: 43,
        lidos: 38,
        respondidos: 12,
        dataEnvio: '2025-01-18T09:00:00',
        agendado: false
      },
      {
        id: 2,
        nome: 'Lançamento Vila Nova',
        tipo: 'sms',
        status: 'agendado',
        destinatarios: 156,
        enviados: 0,
        entregues: 0,
        lidos: 0,
        respondidos: 0,
        dataEnvio: '2025-01-19T10:00:00',
        agendado: true
      },
      {
        id: 3,
        nome: 'Convite Evento VIP',
        tipo: 'push',
        status: 'enviando',
        destinatarios: 89,
        enviados: 67,
        entregues: 64,
        lidos: 45,
        respondidos: 8,
        dataEnvio: '2025-01-18T14:30:00',
        agendado: false
      }
    ]);

    setTemplates([
      {
        id: 1,
        nome: 'Boas-vindas Lead',
        tipo: 'whatsapp',
        categoria: 'boas-vindas',
        conteudo: 'Olá {{nome}}! 👋 Bem-vindo(a) à nossa imobiliária! Estamos aqui para te ajudar a encontrar o imóvel dos seus sonhos. Como posso te ajudar hoje?',
        variaveis: ['nome'],
        aprovado: true
      },
      {
        id: 2,
        nome: 'Follow-up Interessado',
        tipo: 'whatsapp',
        categoria: 'follow-up',
        conteudo: 'Oi {{nome}}! Vi que você demonstrou interesse em imóveis para {{tipo_interesse}}. Encontrei algumas opções incríveis na sua faixa de R$ {{orcamento}}. Gostaria de ver?',
        variaveis: ['nome', 'tipo_interesse', 'orcamento'],
        aprovado: true
      },
      {
        id: 3,
        nome: 'Lançamento SMS',
        tipo: 'sms',
        categoria: 'promocional',
        conteudo: '🏠 NOVO LANÇAMENTO! {{nome}}, apartamentos a partir de R$ {{valor}} na {{regiao}}. Visite nosso estande! Link: {{link}}',
        variaveis: ['nome', 'valor', 'regiao', 'link'],
        aprovado: true
      },
      {
        id: 4,
        nome: 'Notificação Web',
        tipo: 'push',
        categoria: 'urgente',
        conteudo: '🔥 {{nome}}, imóvel no seu orçamento disponível! Apenas R$ {{valor}} na {{regiao}}. Clique para ver!',
        variaveis: ['nome', 'valor', 'regiao'],
        aprovado: true
      }
    ]);

    setScheduledMessages([
      {
        id: 1,
        nome: 'Follow-up Semanal',
        tipo: 'whatsapp',
        agendamento: '2025-01-25T09:00:00',
        destinatarios: 23,
        template: 'Follow-up Interessado',
        status: 'agendado'
      },
      {
        id: 2,
        nome: 'Promoção Fim de Mês',
        tipo: 'sms',
        agendamento: '2025-01-31T16:00:00',
        destinatarios: 342,
        template: 'Lançamento SMS',
        status: 'agendado'
      }
    ]);
  }, []);

  // Simulador de IA
  const aiAssistant = {
    analyzeLead: (lead) => {
      const suggestions = [];
      
      if (lead.score > 90) {
        suggestions.push({
          type: 'urgente',
          message: `${lead.nome} tem score muito alto (${lead.score})! Priorize o contato imediato.`,
          action: 'Ligar agora'
        });
      }
      
      if (lead.ultimaInteracao < '2025-01-17') {
        suggestions.push({
          type: 'follow-up',
          message: `${lead.nome} não interage há mais de 1 dia. Envie um follow-up automático.`,
          action: 'Enviar WhatsApp'
        });
      }

      if (lead.interesse === 'compra' && lead.orcamento > 600000) {
        suggestions.push({
          type: 'imovel',
          message: `Encontrei 3 imóveis perfeitos para ${lead.nome} na faixa de R$ ${lead.orcamento.toLocaleString()}`,
          action: 'Ver sugestões'
        });
      }

      return suggestions;
    },

    generateMessage: (lead, tipo) => {
      const templates = {
        'boas-vindas': `Olá ${lead.nome}! 👋 Obrigado pelo interesse em nossos imóveis. Como posso te ajudar a encontrar o imóvel ideal?`,
        'follow-up': `Oi ${lead.nome}! Vi que você demonstrou interesse em imóveis para ${lead.interesse}. Tem alguma dúvida que posso esclarecer?`,
        'proposta': `${lead.nome}, encontrei algumas opções incríveis na sua faixa de orçamento. Que tal agendar uma visita?`,
        'urgencia': `${lead.nome}, temos uma oportunidade única que pode interessar você. Tem 5 minutos para conversar?`
      };
      return templates[tipo] || templates['follow-up'];
    },

    predictConversion: (lead) => {
      let probability = 0;
      probability += lead.score * 0.4;
      probability += lead.status === 'proposta' ? 30 : 0;
      probability += lead.origem === 'indicacao' ? 20 : 0;
      probability += lead.tags.includes('hot') ? 15 : 0;
      return Math.min(probability, 95);
    }
  };

  // Componente de sugestões da IA
  const AISuggestions = ({ lead }) => {
    const suggestions = aiAssistant.analyzeLead(lead);
    
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center mb-2">
          <Bot className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-blue-900">Sugestões da IA</h3>
        </div>
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-3 rounded border">
              <div className="flex-1">
                <p className="text-sm text-gray-700">{suggestion.message}</p>
              </div>
              <button className="ml-3 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                {suggestion.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">IA Ativa</span>
        </div>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Taxa Conversão</p>
              <p className="text-2xl font-bold text-gray-900">{aiAnalytics.conversionRate}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tempo Resposta</p>
              <p className="text-2xl font-bold text-gray-900">{aiAnalytics.avgResponseTime}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Star className="w-8 h-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Leads Quentes</p>
              <p className="text-2xl font-bold text-gray-900">{aiAnalytics.hotLeads}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sugestões da IA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Bot className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-blue-900">Insights da IA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border">
            <h3 className="font-medium text-gray-900 mb-2">Ações Prioritárias</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3 leads precisam de follow-up urgente</li>
              <li>• João Silva tem 95% chance de conversão</li>
              <li>• 2 propostas vencem em 24h</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border">
            <h3 className="font-medium text-gray-900 mb-2">Comunicação</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 112 mensagens enviadas hoje</li>
              <li>• 2 disparos agendados</li>
              <li>• 85% taxa entrega WhatsApp</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border">
            <h3 className="font-medium text-gray-900 mb-2">Previsões</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 8 vendas previstas este mês</li>
              <li>• R$ 4.2M em pipeline</li>
              <li>• Melhor dia: Terça-feira</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de leads prioritários */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Leads Prioritários</h2>
        </div>
        <div className="p-6">
          {leads.filter(lead => lead.score > 85).map(lead => (
            <div key={lead.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{lead.nome}</p>
                  <p className="text-sm text-gray-600">Score: {lead.score} | {lead.interesse}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  lead.score > 90 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {lead.score > 90 ? 'Urgente' : 'Importante'}
                </span>
                <button 
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  onClick={() => setSelectedLead(lead)}
                >
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Componente de Leads
  const LeadsComponent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Leads</h1>
        <button 
          onClick={() => setShowAddLead(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Lead
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar leads..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <select className="px-4 py-2 border rounded-lg">
            <option>Todos os status</option>
            <option>Novo</option>
            <option>Interessado</option>
            <option>Proposta</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Todas as origens</option>
            <option>WhatsApp</option>
            <option>Formulário</option>
            <option>Indicação</option>
          </select>
        </div>
      </div>

      {/* Lista de leads */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contato</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Interesse</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads
                .filter(lead => lead.nome.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(lead => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{lead.nome}</div>
                        <div className="text-sm text-gray-500">{lead.localizacao}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.telefone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'novo' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'interessado' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            lead.score > 90 ? 'bg-red-500' :
                            lead.score > 70 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${lead.score}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 capitalize">{lead.interesse}</div>
                    <div className="text-sm text-gray-500">
                      R$ {lead.orcamento.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedLead(lead)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Modal de detalhes do lead
  const LeadModal = ({ lead, onClose }) => {
    if (!lead) return null;

    const conversionProbability = aiAssistant.predictConversion(lead);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Detalhes do Lead</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Informações básicas */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Informações Pessoais</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Nome:</strong> {lead.nome}</div>
                    <div><strong>Email:</strong> {lead.email}</div>
                    <div><strong>Telefone:</strong> {lead.telefone}</div>
                    <div><strong>Localização:</strong> {lead.localizacao}</div>
                    <div><strong>Origem:</strong> {lead.origem}</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Interesse</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Tipo:</strong> {lead.interesse}</div>
                    <div><strong>Orçamento:</strong> R$ {lead.orcamento.toLocaleString()}</div>
                    <div><strong>Status:</strong> {lead.status}</div>
                    <div><strong>Score:</strong> {lead.score}/100</div>
                  </div>
                </div>

                {/* IA Prediction */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Bot className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-900">Análise da IA</h3>
                  </div>
                  <div className="text-sm text-blue-800">
                    <div className="mb-2">
                      <strong>Probabilidade de Conversão:</strong> {conversionProbability.toFixed(1)}%
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${conversionProbability}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sugestões da IA */}
              <div className="space-y-4">
                <AISuggestions lead={lead} />

                {/* Templates de mensagem */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Templates Sugeridos</h3>
                  <div className="space-y-2">
                    {['boas-vindas', 'follow-up', 'proposta'].map(tipo => (
                      <div key={tipo} className="border rounded p-3 bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-sm capitalize">{tipo.replace('-', ' ')}</strong>
                          <button className="text-blue-600 text-xs hover:text-blue-800">
                            Usar Template
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">
                          {aiAssistant.generateMessage(lead, tipo)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Histórico de interações */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Últimas Interações</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-600">WhatsApp enviado - Hoje 14:30</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-600">Email aberto - Ontem 16:45</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-gray-600">Ligação realizada - 2 dias atrás</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Componente de Chat com IA
  const ChatIA = () => (
    <div className="bg-white rounded-lg shadow border h-96 flex flex-col">
      <div className="p-4 border-b flex items-center">
        <Bot className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="font-semibold text-gray-900">Assistente IA</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        <div className="flex items-start">
          <Bot className="w-8 h-8 text-blue-600 mr-3 mt-1" />
          <div className="bg-blue-50 p-3 rounded-lg max-w-xs">
            <p className="text-sm">Olá! Como posso ajudar você hoje? Posso analisar leads, sugerir ações ou gerar relatórios.</p>
          </div>
        </div>
        
        {chatMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start'}`}>
            {msg.sender === 'ai' && <Bot className="w-8 h-8 text-blue-600 mr-3 mt-1" />}
            <div className={`p-3 rounded-lg max-w-xs ${
              msg.sender === 'user' ? 'bg-gray-100' : 'bg-blue-50'
            }`}>
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua pergunta..."
            className="flex-1 px-3 py-2 border rounded-lg text-sm"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // Simular resposta da IA
                setChatMessages([
                  ...chatMessages,
                  { sender: 'user', message: newMessage },
                  { sender: 'ai', message: 'Analisando seus dados... Encontrei 3 leads que precisam de atenção urgente!' }
                ]);
                setNewMessage('');
              }
            }}
          />
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => {
              if (newMessage.trim()) {
                setChatMessages([
                  ...chatMessages,
                  { sender: 'user', message: newMessage },
                  { sender: 'ai', message: 'Analisando seus dados... Encontrei 3 leads que precisam de atenção urgente!' }
                ]);
                setNewMessage('');
              }
            }}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  // Componente de Imóveis
  const ImoveisComponent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gestão de Imóveis</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Novo Imóvel
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {imoveis.map(imovel => (
          <div key={imovel.id} className="bg-white rounded-lg shadow border overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Building className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{imovel.titulo}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">
                R$ {imovel.valor.toLocaleString()}
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
                <div>{imovel.area}m²</div>
                <div>{imovel.dormitorios} dorm</div>
                <div>{imovel.vagas} vaga</div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{imovel.endereco}</p>
              <div className="flex justify-between items-center">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                  Disponível
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Componente de Marketing Automation
  const MarketingAutomation = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Automação de Marketing</h1>
        <button 
          onClick={() => setShowCreateCampaign(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Campanha
        </button>
      </div>

      {/* Métricas de Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Mail className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Emails Enviados</p>
              <p className="text-2xl font-bold text-gray-900">1,406</p>
              <p className="text-sm text-green-600">+12% vs mês anterior</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Target className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Taxa Abertura</p>
              <p className="text-2xl font-bold text-gray-900">28.4%</p>
              <p className="text-sm text-green-600">+3.2% vs mês anterior</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Automações Ativas</p>
              <p className="text-2xl font-bold text-gray-900">{automacoes.filter(a => a.status === 'ativa').length}</p>
              <p className="text-sm text-gray-600">327 execuções hoje</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversões</p>
              <p className="text-2xl font-bold text-gray-900">43</p>
              <p className="text-sm text-green-600">+18% vs mês anterior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Navegação */}
      <div className="bg-white rounded-lg shadow border">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {['campanhas', 'automacoes', 'funis'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab.includes(tab) || (tab === 'campanhas' && activeTab === 'marketing')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(`marketing-${tab}`)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Campanhas */}
          {(activeTab === 'marketing' || activeTab === 'marketing-campanhas') && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Campanhas Ativas</h2>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border rounded-lg text-sm">
                    <option>Todos os tipos</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                    <option>SMS</option>
                  </select>
                  <select className="px-3 py-2 border rounded-lg text-sm">
                    <option>Todos os status</option>
                    <option>Ativa</option>
                    <option>Pausada</option>
                    <option>Finalizada</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campanha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversões</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campanhas.map(campanha => (
                      <tr key={campanha.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{campanha.nome}</div>
                            <div className="text-sm text-gray-500">Início: {new Date(campanha.dataInicio).toLocaleDateString()}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {campanha.tipo === 'email' ? (
                              <Mail className="w-4 h-4 text-blue-600 mr-2" />
                            ) : (
                              <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                            )}
                            <span className="capitalize">{campanha.tipo}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            campanha.status === 'ativa' ? 'bg-green-100 text-green-800' :
                            campanha.status === 'pausada' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {campanha.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div>Enviados: {campanha.enviados.toLocaleString()}</div>
                            <div>Taxa Abertura: {((campanha.abertos / campanha.enviados) * 100).toFixed(1)}%</div>
                            <div>Taxa Clique: {((campanha.cliques / campanha.abertos) * 100).toFixed(1)}%</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">{campanha.conversoes}</div>
                            <div className="text-sm text-gray-500">
                              {((campanha.conversoes / campanha.enviados) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => setSelectedCampaign(campanha)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-yellow-600 hover:text-yellow-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className={`${
                              campanha.status === 'ativa' ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'
                            }`}>
                              {campanha.status === 'ativa' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Automações */}
          {activeTab === 'marketing-automacoes' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Automações Configuradas</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Automação
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automacoes.map(automacao => (
                  <div key={automacao.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Workflow className="w-8 h-8 text-purple-600 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{automacao.nome}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            automacao.status === 'ativa' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {automacao.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm font-medium text-gray-700 mb-1">Trigger:</div>
                        <div className="text-sm text-gray-600">{automacao.trigger}</div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="text-sm font-medium text-blue-700 mb-1">Ação:</div>
                        <div className="text-sm text-blue-600">{automacao.acao}</div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Execuções:</span>
                        <span className="font-semibold text-gray-900">{automacao.execucoes}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <button className="text-blue-600 hover:text-blue-900 text-sm">
                        Editar
                      </button>
                      <button className={`text-sm ${
                        automacao.status === 'ativa' ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'
                      }`}>
                        {automacao.status === 'ativa' ? 'Pausar' : 'Ativar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Funis de Vendas */}
          {activeTab === 'marketing-funis' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Funis de Vendas</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Funil
                </button>
              </div>

              {funis.map(funil => (
                <div key={funil.id} className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">{funil.nome}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {funil.etapas.map((etapa, index) => (
                      <div key={index} className="relative">
                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-4 text-center">
                          <div className="text-sm font-medium text-blue-700 mb-2">{etapa.nome}</div>
                          <div className="text-2xl font-bold text-blue-900 mb-1">{etapa.quantidade}</div>
                          <div className="text-xs text-blue-600">{etapa.conversao.toFixed(1)}%</div>
                        </div>
                        
                        {index < funil.etapas.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                            <ChevronDown className="w-4 h-4 text-gray-400 rotate-90" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Taxa de conversão geral: <span className="font-semibold text-gray-900">
                        {(funil.etapas[funil.etapas.length - 1].quantidade / funil.etapas[0].quantidade * 100).toFixed(1)}%
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-900 text-sm">
                      Ver relatório detalhado
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Componente de Comunicação em Massa
  const ComunicacaoMassa = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Comunicação em Massa</h1>
        <button 
          onClick={() => setShowBulkMessage(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Megaphone className="w-4 h-4 mr-2" />
          Novo Disparo
        </button>
      </div>

      {/* Métricas de Comunicação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <MessageCircle className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">WhatsApp Enviados</p>
              <p className="text-2xl font-bold text-gray-900">
                {dispensadores.filter(d => d.tipo === 'whatsapp').reduce((acc, d) => acc + d.enviados, 0)}
              </p>
              <p className="text-sm text-green-600">85% taxa entrega</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">SMS Enviados</p>
              <p className="text-2xl font-bold text-gray-900">
                {dispensadores.filter(d => d.tipo === 'sms').reduce((acc, d) => acc + d.enviados, 0)}
              </p>
              <p className="text-sm text-blue-600">98% taxa entrega</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Push Enviados</p>
              <p className="text-2xl font-bold text-gray-900">
                {dispensadores.filter(d => d.tipo === 'push').reduce((acc, d) => acc + d.enviados, 0)}
              </p>
              <p className="text-sm text-purple-600">72% taxa entrega</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Agendados</p>
              <p className="text-2xl font-bold text-gray-900">{scheduledMessages.length}</p>
              <p className="text-sm text-orange-600">Próximos 7 dias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Navegação */}
      <div className="bg-white rounded-lg shadow border">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {['dispensadores', 'templates', 'agendados'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab.includes(tab) || (tab === 'dispensadores' && activeTab === 'comunicacao')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(`comunicacao-${tab}`)}
              >
                {tab === 'dispensadores' ? 'Histórico' : tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Histórico de Dispensadores */}
          {(activeTab === 'comunicacao' || activeTab === 'comunicacao-dispensadores') && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Histórico de Disparos</h2>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border rounded-lg text-sm">
                    <option>Todos os tipos</option>
                    <option>WhatsApp</option>
                    <option>SMS</option>
                    <option>Push</option>
                  </select>
                  <select className="px-3 py-2 border rounded-lg text-sm">
                    <option>Todos os status</option>
                    <option>Enviado</option>
                    <option>Agendado</option>
                    <option>Enviando</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Disparo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data/Hora</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dispensadores.map(disparo => (
                      <tr key={disparo.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{disparo.nome}</div>
                            <div className="text-sm text-gray-500">{disparo.destinatarios} destinatários</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {disparo.tipo === 'whatsapp' && <MessageCircle className="w-4 h-4 text-green-600 mr-2" />}
                            {disparo.tipo === 'sms' && <Smartphone className="w-4 h-4 text-blue-600 mr-2" />}
                            {disparo.tipo === 'push' && <Globe className="w-4 h-4 text-purple-600 mr-2" />}
                            <span className="capitalize">{disparo.tipo}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            disparo.status === 'enviado' ? 'bg-green-100 text-green-800' :
                            disparo.status === 'agendado' ? 'bg-yellow-100 text-yellow-800' :
                            disparo.status === 'enviando' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {disparo.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div>Enviados: {disparo.enviados}/{disparo.destinatarios}</div>
                            <div>Entregues: {disparo.entregues} ({disparo.enviados > 0 ? ((disparo.entregues / disparo.enviados) * 100).toFixed(1) : 0}%)</div>
                            <div>Lidos: {disparo.lidos} ({disparo.entregues > 0 ? ((disparo.lidos / disparo.entregues) * 100).toFixed(1) : 0}%)</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div>{new Date(disparo.dataEnvio).toLocaleDateString('pt-BR')}</div>
                            <div className="text-gray-500">{new Date(disparo.dataEnvio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <Download className="w-4 h-4" />
                            </button>
                            {disparo.status === 'agendado' && (
                              <button className="text-red-600 hover:text-red-900">
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Templates */}
          {activeTab === 'comunicacao-templates' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Templates de Mensagem</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Template
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map(template => (
                  <div key={template.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {template.tipo === 'whatsapp' && <MessageCircle className="w-6 h-6 text-green-600 mr-2" />}
                        {template.tipo === 'sms' && <Smartphone className="w-6 h-6 text-blue-600 mr-2" />}
                        {template.tipo === 'push' && <Globe className="w-6 h-6 text-purple-600 mr-2" />}
                        <div>
                          <h3 className="font-semibold text-gray-900">{template.nome}</h3>
                          <span className="text-xs text-gray-500 capitalize">{template.categoria}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        template.aprovado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {template.aprovado ? 'Aprovado' : 'Pendente'}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        {template.conteudo}
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {template.variaveis.map((variavel, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                            {variavel}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <button className="text-blue-600 hover:text-blue-900 text-sm">
                        Editar
                      </button>
                      <button className="text-green-600 hover:text-green-900 text-sm">
                        Usar Template
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mensagens Agendadas */}
          {activeTab === 'comunicacao-agendados' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Disparos Agendados</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Agendar Novo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scheduledMessages.map(scheduled => (
                  <div key={scheduled.id} className="bg-white border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {scheduled.tipo === 'whatsapp' && <MessageCircle className="w-6 h-6 text-green-600 mr-2" />}
                        {scheduled.tipo === 'sms' && <Smartphone className="w-6 h-6 text-blue-600 mr-2" />}
                        {scheduled.tipo === 'push' && <Globe className="w-6 h-6 text-purple-600 mr-2" />}
                        <div>
                          <h3 className="font-semibold text-gray-900">{scheduled.nome}</h3>
                          <span className="text-sm text-gray-500">{scheduled.destinatarios} destinatários</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                        Agendado
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="text-sm font-medium text-blue-700 mb-1">Template:</div>
                        <div className="text-sm text-blue-600">{scheduled.template}</div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm font-medium text-gray-700 mb-1">Agendamento:</div>
                        <div className="text-sm text-gray-600">
                          {new Date(scheduled.agendamento).toLocaleDateString('pt-BR')} às {' '}
                          {new Date(scheduled.agendamento).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <button className="text-blue-600 hover:text-blue-900 text-sm">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-900 text-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Menu lateral
  const Sidebar = () => {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'leads', label: 'Leads', icon: Users },
      { id: 'imoveis', label: 'Imóveis', icon: Building },
      { id: 'marketing', label: 'Marketing', icon: Zap },
      { id: 'comunicacao', label: 'Comunicação', icon: Megaphone },
      { id: 'calendar', label: 'Agenda', icon: Calendar },
      { id: 'reports', label: 'Relatórios', icon: BarChart3 },
      { id: 'settings', label: 'Configurações', icon: Settings },
    ];

    return (
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-blue-600">
          <h1 className="text-xl font-bold text-white">CRM Imobiliário</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <LeadsComponent />;
      case 'imoveis':
        return <ImoveisComponent />;
      case 'marketing':
      case 'marketing-campanhas':
      case 'marketing-automacoes':
      case 'marketing-funis':
        return <MarketingAutomation />;
      case 'comunicacao':
      case 'comunicacao-dispensadores':
      case 'comunicacao-templates':
      case 'comunicacao-agendados':
        return <ComunicacaoMassa />;
      case 'calendar':
        return (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Agenda</h2>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        );
      case 'reports':
        return (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Relatórios</h2>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Configurações</h2>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              <div className="xl:col-span-3">
                {renderContent()}
              </div>
              <div className="xl:col-span-1">
                <ChatIA />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {selectedLead && (
        <LeadModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
      )}
      
      {selectedCampaign && (
        <CampaignModal campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />
      )}

      {showBulkMessage && (
        <BulkMessageModal onClose={() => setShowBulkMessage(false)} />
      )}
    </div>
  );
};

// Modal de detalhes da campanha
const CampaignModal = ({ campaign, onClose }) => {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Detalhes da Campanha</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Informações básicas */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Informações da Campanha</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Nome:</strong> {campaign.nome}</div>
                  <div><strong>Tipo:</strong> <span className="capitalize">{campaign.tipo}</span></div>
                  <div><strong>Status:</strong> <span className="capitalize">{campaign.status}</span></div>
                  <div><strong>Segmento:</strong> <span className="capitalize">{campaign.segmento}</span></div>
                  <div><strong>Data de Início:</strong> {new Date(campaign.dataInicio).toLocaleDateString('pt-BR')}</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Performance Geral</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Enviados:</strong> {campaign.enviados.toLocaleString()}</div>
                  <div><strong>Abertos:</strong> {campaign.abertos.toLocaleString()} ({((campaign.abertos / campaign.enviados) * 100).toFixed(1)}%)</div>
                  <div><strong>Cliques:</strong> {campaign.cliques.toLocaleString()} ({((campaign.cliques / campaign.abertos) * 100).toFixed(1)}%)</div>
                  <div><strong>Conversões:</strong> {campaign.conversoes} ({((campaign.conversoes / campaign.enviados) * 100).toFixed(1)}%)</div>
                </div>
              </div>

              {/* Gráfico de Performance (placeholder) */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <BarChart className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-blue-900">Performance por Período</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Semana 1:</span>
                    <span className="font-semibold">{Math.floor(campaign.enviados * 0.3).toLocaleString()} envios</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Semana 2:</span>
                    <span className="font-semibold">{Math.floor(campaign.enviados * 0.4).toLocaleString()} envios</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Semana 3:</span>
                    <span className="font-semibold">{Math.floor(campaign.enviados * 0.3).toLocaleString()} envios</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Análises e Insights */}
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-900">Pontos Positivos</h3>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Taxa de abertura acima da média do setor (25%)</li>
                  <li>• Boa segmentação de audience</li>
                  <li>• {campaign.conversoes} conversões diretas</li>
                  <li>• ROI estimado em 240%</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-semibold text-yellow-900">Oportunidades</h3>
                </div>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Melhorar taxa de clique (atualmente {((campaign.cliques / campaign.abertos) * 100).toFixed(1)}%)</li>
                  <li>• Otimizar horário de envio</li>
                  <li>• Teste A/B no assunto</li>
                  <li>• Adicionar mais CTAs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Próximas Ações</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Follow-up para não abridores</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-orange-600 mr-2" />
                    <span>Retargeting para clicadores</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Target className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Segmentação refinada</span>
                  </div>
                </div>
              </div>

              {/* Últimas Atividades */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Atividade Recente</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Activity className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-600">3 conversões registradas - Hoje 15:30</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">Lote enviado (234 emails) - Hoje 09:00</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Eye className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-600">45 aberturas registradas - Ontem 18:20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
              <Edit className="w-4 h-4 mr-2" />
              Editar Campanha
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Exportar Relatório
            </button>
            <button className={`px-4 py-2 rounded flex items-center ${
              campaign.status === 'ativa' 
                ? 'bg-orange-600 text-white hover:bg-orange-700' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}>
              {campaign.status === 'ativa' ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {campaign.status === 'ativa' ? 'Pausar' : 'Reativar'}
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Duplicar Campanha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal de Disparo em Massa
const BulkMessageModal = ({ onClose }) => {
  const [selectedType, setSelectedType] = React.useState('whatsapp');
  const [selectedTemplate, setSelectedTemplate] = React.useState('');
  const [selectedLeads, setSelectedLeads] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [isScheduled, setIsScheduled] = React.useState(false);
  const [scheduleDate, setScheduleDate] = React.useState('');
  const [scheduleTime, setScheduleTime] = React.useState('');

  const mockLeads = [
    { id: 1, nome: 'João Silva', telefone: '(11) 99999-9999', email: 'joao@email.com', score: 85 },
    { id: 2, nome: 'Maria Santos', telefone: '(11) 88888-8888', email: 'maria@email.com', score: 92 },
    { id: 3, nome: 'Carlos Oliveira', telefone: '(11) 77777-7777', email: 'carlos@email.com', score: 95 }
  ];

  const mockTemplates = {
    whatsapp: [
      { id: 1, nome: 'Boas-vindas Lead', conteudo: 'Olá {{nome}}! 👋 Bem-vindo(a) à nossa imobiliária!' },
      { id: 2, nome: 'Follow-up Interessado', conteudo: 'Oi {{nome}}! Vi que você demonstrou interesse...' }
    ],
    sms: [
      { id: 3, nome: 'Lançamento SMS', conteudo: '🏠 NOVO LANÇAMENTO! {{nome}}, apartamentos a partir de R$ {{valor}}' }
    ],
    push: [
      { id: 4, nome: 'Notificação Web', conteudo: '🔥 {{nome}}, imóvel no seu orçamento disponível!' }
    ]
  };

  const handleSendMessage = () => {
    // Simular envio
    alert(`Disparo ${isScheduled ? 'agendado' : 'enviado'} para ${selectedLeads.length} lead(s) via ${selectedType.toUpperCase()}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Novo Disparo em Massa</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Configuração do Disparo */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Comunicação</label>
                <div className="grid grid-cols-3 gap-3">
                  {['whatsapp', 'sms', 'push'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 border rounded-lg text-center ${
                        selectedType === type 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type === 'whatsapp' && <MessageCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />}
                      {type === 'sms' && <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-600" />}
                      {type === 'push' && <Globe className="w-6 h-6 mx-auto mb-2 text-purple-600" />}
                      <div className="text-sm font-medium capitalize">{type}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                >
                  <option value="">Selecione um template ou digite uma mensagem</option>
                  {mockTemplates[selectedType]?.map(template => (
                    <option key={template.id} value={template.id}>{template.nome}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder={`Digite sua mensagem para ${selectedType}...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="text-xs text-gray-500 mt-1">
                  Use variáveis como {{nome}}, {{telefone}}, {{email}} para personalizar
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="schedule"
                    checked={isScheduled}
                    onChange={(e) => setIsScheduled(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="schedule" className="ml-2 text-sm font-medium text-gray-700">
                    Agendar disparo
                  </label>
                </div>
                
                {isScheduled && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Data</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Horário</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        value={scheduleTime}
                        onChange={(e) => setScheduleTime(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Seleção de Destinatários */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Destinatários</h3>
                <div className="text-sm text-gray-500">
                  {selectedLeads.length} selecionado(s)
                </div>
              </div>

              <div className="border rounded-lg max-h-64 overflow-y-auto">
                <div className="p-3 border-b bg-gray-50">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLeads(mockLeads.map(lead => lead.id));
                        } else {
                          setSelectedLeads([]);
                        }
                      }}
                      checked={selectedLeads.length === mockLeads.length}
                      className="rounded border-gray-300"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Selecionar todos
                    </label>
                  </div>
                </div>
                
                {mockLeads.map(lead => (
                  <div key={lead.id} className="p-3 border-b last:border-b-0">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLeads([...selectedLeads, lead.id]);
                          } else {
                            setSelectedLeads(selectedLeads.filter(id => id !== lead.id));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <div className="ml-3 flex-1">
                        <div className="text-sm font-medium text-gray-900">{lead.nome}</div>
                        <div className="text-xs text-gray-500">
                          {lead.telefone} • Score: {lead.score}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Filtros Rápidos</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm bg-white border rounded hover:bg-gray-50">
                    🔥 Leads com score > 90 (2 leads)
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-white border rounded hover:bg-gray-50">
                    📞 Leads sem contato há 3+ dias
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-white border rounded hover:bg-gray-50">
                    💰 Leads interessados em compra
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div className="text-sm text-yellow-700">
                    <div className="font-medium mb-1">Estimativa de Custo</div>
                    <div>
                      {selectedType === 'whatsapp' && `${selectedLeads.length} × R$ 0,15 = R$ ${(selectedLeads.length * 0.15).toFixed(2)}`}
                      {selectedType === 'sms' && `${selectedLeads.length} × R$ 0,08 = R$ ${(selectedLeads.length * 0.08).toFixed(2)}`}
                      {selectedType === 'push' && `${selectedLeads.length} × R$ 0,02 = R$ ${(selectedLeads.length * 0.02).toFixed(2)}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="mt-6 flex justify-between">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50">
                Salvar como Rascunho
              </button>
              <button 
                onClick={handleSendMessage}
                disabled={selectedLeads.length === 0 || !message}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center"
              >
                {selectedType === 'whatsapp' && <MessageCircle className="w-4 h-4 mr-2" />}
                {selectedType === 'sms' && <Smartphone className="w-4 h-4 mr-2" />}
                {selectedType === 'push' && <Globe className="w-4 h-4 mr-2" />}
                {isScheduled ? 'Agendar Disparo' : 'Enviar Agora'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMImobiliario;