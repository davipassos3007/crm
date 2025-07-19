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
  X
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border">
            <h3 className="font-medium text-gray-900 mb-2">Ações Prioritárias</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3 leads precisam de follow-up urgente</li>
              <li>• João Silva tem 95% chance de conversão</li>
              <li>• 2 propostas vencem em 24h</li>
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

  // Menu lateral
  const Sidebar = () => {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'leads', label: 'Leads', icon: Users },
      { id: 'imoveis', label: 'Imóveis', icon: Building },
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

      {/* Modal */}
      {selectedLead && (
        <LeadModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
      )}
    </div>
  );
};

export default CRMImobiliario;