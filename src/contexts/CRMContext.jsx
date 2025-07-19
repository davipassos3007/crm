import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

const CRMContext = createContext();

export const useCRM = () => {
  const context = useContext(CRMContext);
  if (!context) {
    throw new Error('useCRM must be used within a CRMProvider');
  }
  return context;
};

export const CRMProvider = ({ children }) => {
  const { user } = useAuth();

  // Estados principais
  const [leads, setLeads] = useState([]);
  const [imoveis, setImoveis] = useState([]);
  const [campanhas, setCampanhas] = useState([]);
  const [automacoes, setAutomacoes] = useState([]);
  const [funis, setFunis] = useState([]);
  const [dispensadores, setDispensadores] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [scheduledMessages, setScheduledMessages] = useState([]);
  const [pipelineStages, setPipelineStages] = useState([]);
  const [activities, setActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [analytics, setAnalytics] = useState({});

  // Dados mockados iniciais
  useEffect(() => {
    initializeMockData();
  }, []);

  const initializeMockData = () => {
    // Leads com pipeline
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
        tags: ['urgente', 'qualificado'],
        pipelineStage: 'lead-novo',
        probability: 25,
        valorNegociacao: 480000,
        vendedorId: 2,
        dataUltimaAtividade: '2025-01-18T14:30:00',
        proximaAtividade: '2025-01-19T09:00:00',
        created_at: '2025-01-15T10:00:00'
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
        tags: ['hot'],
        pipelineStage: 'qualificado',
        probability: 60,
        valorNegociacao: 2800,
        vendedorId: 2,
        dataUltimaAtividade: '2025-01-17T16:45:00',
        proximaAtividade: '2025-01-20T11:00:00',
        created_at: '2025-01-10T14:20:00'
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
        tags: ['vip'],
        pipelineStage: 'proposta-enviada',
        probability: 85,
        valorNegociacao: 750000,
        vendedorId: 2,
        dataUltimaAtividade: '2025-01-18T09:15:00',
        proximaAtividade: '2025-01-19T15:00:00',
        created_at: '2025-01-05T09:30:00'
      },
      {
        id: 4,
        nome: 'Ana Costa',
        email: 'ana@email.com',
        telefone: '(11) 66666-6666',
        status: 'negociacao',
        score: 88,
        origem: 'site',
        interesse: 'compra',
        orcamento: 650000,
        localizacao: 'São Paulo - SP',
        ultimaInteracao: '2025-01-18',
        tags: ['negociacao'],
        pipelineStage: 'negociacao',
        probability: 75,
        valorNegociacao: 620000,
        vendedorId: 2,
        dataUltimaAtividade: '2025-01-18T11:20:00',
        proximaAtividade: '2025-01-19T14:00:00',
        created_at: '2025-01-12T16:10:00'
      }
    ]);

    // Pipeline Stages
    setPipelineStages([
      {
        id: 'lead-novo',
        name: 'Lead Novo',
        color: '#3B82F6',
        order: 1,
        probability: 10,
        automations: ['welcome-message', 'lead-scoring']
      },
      {
        id: 'qualificado',
        name: 'Qualificado',
        color: '#10B981',
        order: 2,
        probability: 25,
        automations: ['follow-up-qualified']
      },
      {
        id: 'apresentacao',
        name: 'Apresentação',
        color: '#F59E0B',
        order: 3,
        probability: 50,
        automations: ['schedule-visit']
      },
      {
        id: 'proposta-enviada',
        name: 'Proposta Enviada',
        color: '#8B5CF6',
        order: 4,
        probability: 70,
        automations: ['proposal-follow-up']
      },
      {
        id: 'negociacao',
        name: 'Negociação',
        color: '#F97316',
        order: 5,
        probability: 85,
        automations: ['negotiation-support']
      },
      {
        id: 'fechamento',
        name: 'Fechamento',
        color: '#22C55E',
        order: 6,
        probability: 95,
        automations: ['contract-preparation']
      },
      {
        id: 'perdido',
        name: 'Perdido',
        color: '#EF4444',
        order: 7,
        probability: 0,
        automations: ['lost-lead-campaign']
      }
    ]);

    // Atividades
    setActivities([
      {
        id: 1,
        leadId: 1,
        tipo: 'call',
        titulo: 'Ligação de qualificação',
        descricao: 'Contato inicial para entender necessidades',
        data: '2025-01-18T14:30:00',
        status: 'completed',
        userId: 2,
        resultado: 'Interessado em apartamento 2 dorm até R$ 500k'
      },
      {
        id: 2,
        leadId: 2,
        tipo: 'email',
        titulo: 'Envio de opções de imóveis',
        descricao: 'Lista personalizada com 5 opções',
        data: '2025-01-17T16:45:00',
        status: 'completed',
        userId: 2,
        resultado: 'Email aberto, clicou em 2 links'
      },
      {
        id: 3,
        leadId: 3,
        tipo: 'meeting',
        titulo: 'Reunião para proposta',
        descricao: 'Apresentação da proposta final',
        data: '2025-01-19T15:00:00',
        status: 'scheduled',
        userId: 2,
        resultado: null
      }
    ]);

    // Dados de campanhas, automações, etc. (reutilizando do código anterior)
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
      }
    ]);

    // Analytics
    setAnalytics({
      conversionRate: 23.5,
      avgResponseTime: '2.3 min',
      hotLeads: 12,
      predictedSales: 8,
      totalPipeline: 1850000,
      avgDealSize: 462500,
      monthlyGrowth: 15.8,
      customerSatisfaction: 4.7
    });

    // Notificações
    setNotifications([
      {
        id: 1,
        tipo: 'urgent',
        titulo: 'Lead com score alto precisa de atenção',
        mensagem: 'Carlos Oliveira (95 pontos) não tem atividade há 2 dias',
        data: new Date(),
        lida: false,
        leadId: 3
      },
      {
        id: 2,
        tipo: 'success',
        titulo: 'Meta mensal atingida!',
        mensagem: 'Parabéns! Você atingiu 102% da meta de janeiro',
        data: new Date(),
        lida: false
      }
    ]);
  };

  // Funções para manipular leads
  const addLead = (leadData) => {
    const newLead = {
      ...leadData,
      id: Date.now(),
      created_at: new Date().toISOString(),
      pipelineStage: 'lead-novo',
      probability: 10,
      vendedorId: user?.id
    };
    setLeads(prev => [...prev, newLead]);
    toast.success('Lead adicionado com sucesso!');
    return newLead;
  };

  const updateLead = (leadId, updates) => {
    setLeads(prev => prev.map(lead => 
      lead.id === leadId ? { ...lead, ...updates } : lead
    ));
    toast.success('Lead atualizado!');
  };

  const moveLeadInPipeline = (leadId, newStage) => {
    const stage = pipelineStages.find(s => s.id === newStage);
    updateLead(leadId, {
      pipelineStage: newStage,
      probability: stage?.probability || 0
    });

    // Adicionar atividade automática
    const lead = leads.find(l => l.id === leadId);
    if (lead) {
      addActivity({
        leadId,
        tipo: 'pipeline',
        titulo: `Lead movido para ${stage?.name}`,
        descricao: `Pipeline atualizado automaticamente`,
        status: 'completed'
      });
    }
  };

  const addActivity = (activityData) => {
    const newActivity = {
      ...activityData,
      id: Date.now(),
      data: activityData.data || new Date().toISOString(),
      userId: user?.id
    };
    setActivities(prev => [...prev, newActivity]);
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => prev.map(notif =>
      notif.id === notificationId ? { ...notif, lida: true } : notif
    ));
  };

  const getPipelineMetrics = () => {
    const stageMetrics = pipelineStages.map(stage => {
      const stageLeads = leads.filter(lead => lead.pipelineStage === stage.id);
      const totalValue = stageLeads.reduce((sum, lead) => sum + (lead.valorNegociacao || 0), 0);
      
      return {
        stage: stage.name,
        count: stageLeads.length,
        value: totalValue,
        probability: stage.probability
      };
    });

    return stageMetrics;
  };

  const getLeadsByStage = (stageId) => {
    return leads.filter(lead => lead.pipelineStage === stageId);
  };

  const searchLeads = (query) => {
    return leads.filter(lead =>
      lead.nome.toLowerCase().includes(query.toLowerCase()) ||
      lead.email.toLowerCase().includes(query.toLowerCase()) ||
      lead.telefone.includes(query)
    );
  };

  const getUpcomingActivities = () => {
    return activities
      .filter(activity => activity.status === 'scheduled')
      .sort((a, b) => new Date(a.data) - new Date(b.data))
      .slice(0, 5);
  };

  const value = {
    // Estados
    leads,
    imoveis,
    campanhas,
    automacoes,
    funis,
    dispensadores,
    templates,
    scheduledMessages,
    pipelineStages,
    activities,
    notifications,
    analytics,

    // Setters
    setLeads,
    setImoveis,
    setCampanhas,
    setAutomacoes,
    setFunis,
    setDispensadores,
    setTemplates,
    setScheduledMessages,

    // Funções
    addLead,
    updateLead,
    moveLeadInPipeline,
    addActivity,
    markNotificationAsRead,
    getPipelineMetrics,
    getLeadsByStage,
    searchLeads,
    getUpcomingActivities
  };

  return (
    <CRMContext.Provider value={value}>
      {children}
    </CRMContext.Provider>
  );
};