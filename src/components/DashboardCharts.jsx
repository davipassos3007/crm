import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useCRM } from '../contexts/CRMContext';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Calendar,
  Target,
  ArrowUp,
  ArrowDown,
  Filter
} from 'lucide-react';

const DashboardCharts = () => {
  const { leads, analytics, pipelineStages, getLeadsByStage } = useCRM();
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  // Dados para gráficos
  const salesData = [
    { name: 'Jan', vendas: 12, meta: 15, leads: 45 },
    { name: 'Fev', vendas: 8, meta: 15, leads: 38 },
    { name: 'Mar', vendas: 15, meta: 15, leads: 52 },
    { name: 'Abr', vendas: 18, meta: 15, leads: 61 },
    { name: 'Mai', vendas: 22, meta: 20, leads: 72 },
    { name: 'Jun', vendas: 25, meta: 20, leads: 83 },
    { name: 'Jul', vendas: 28, meta: 20, leads: 94 }
  ];

  const pipelineData = pipelineStages.map(stage => {
    const stageLeads = getLeadsByStage(stage.id);
    const totalValue = stageLeads.reduce((sum, lead) => sum + (lead.valorNegociacao || 0), 0);
    
    return {
      name: stage.name,
      leads: stageLeads.length,
      value: totalValue,
      color: stage.color
    };
  });

  const conversionData = [
    { name: 'Lead Novo', value: 120, conversion: 100 },
    { name: 'Qualificado', value: 89, conversion: 74.2 },
    { name: 'Apresentação', value: 45, conversion: 50.6 },
    { name: 'Proposta', value: 23, conversion: 51.1 },
    { name: 'Fechamento', value: 12, conversion: 52.2 }
  ];

  const originData = [
    { name: 'WhatsApp', value: 35, color: '#25D366' },
    { name: 'Site', value: 25, color: '#3B82F6' },
    { name: 'Indicação', value: 20, color: '#10B981' },
    { name: 'Facebook', value: 12, color: '#1877F2' },
    { name: 'Google', value: 8, color: '#EA4335' }
  ];

  const performanceData = [
    { name: 'Seg', calls: 8, emails: 15, whatsapp: 23, conversions: 2 },
    { name: 'Ter', calls: 12, emails: 18, whatsapp: 28, conversions: 4 },
    { name: 'Qua', calls: 10, emails: 22, whatsapp: 31, conversions: 3 },
    { name: 'Qui', calls: 15, emails: 25, whatsapp: 35, conversions: 6 },
    { name: 'Sex', calls: 18, emails: 20, whatsapp: 40, conversions: 7 },
    { name: 'Sab', calls: 5, emails: 8, whatsapp: 15, conversions: 1 },
    { name: 'Dom', calls: 3, emails: 5, whatsapp: 12, conversions: 1 }
  ];

  const MetricCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow border"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {changeType === 'positive' ? (
                <ArrowUp className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDown className="w-4 h-4 mr-1" />
              )}
              {change}
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((item, index) => (
            <p key={index} style={{ color: item.color }}>
              {item.name}: {item.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Insights detalhados de performance</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="1y">Último ano</option>
          </select>
          
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Leads Totais"
          value={leads.length}
          change="+12.5%"
          changeType="positive"
          icon={Users}
          color="bg-blue-500"
        />
        <MetricCard
          title="Pipeline Total"
          value={`R$ ${(analytics.totalPipeline || 0).toLocaleString()}`}
          change="+18.2%"
          changeType="positive"
          icon={DollarSign}
          color="bg-green-500"
        />
        <MetricCard
          title="Taxa Conversão"
          value={`${analytics.conversionRate}%`}
          change="+3.1%"
          changeType="positive"
          icon={Target}
          color="bg-purple-500"
        />
        <MetricCard
          title="Ticket Médio"
          value={`R$ ${(analytics.avgDealSize || 0).toLocaleString()}`}
          change="-2.4%"
          changeType="negative"
          icon={TrendingUp}
          color="bg-orange-500"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Vendas vs Meta */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Vendas vs Meta</h3>
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Vendas</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>Meta</span>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="vendas" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="meta" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pipeline por Estágio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow border"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Pipeline por Estágio</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pipelineData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'leads' ? `${value} leads` : `R$ ${value.toLocaleString()}`,
                  name === 'leads' ? 'Quantidade' : 'Valor'
                ]}
              />
              <Bar dataKey="leads" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Funil de Conversão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow border"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Funil de Conversão</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Origem dos Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow border"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Origem dos Leads</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={originData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {originData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Performance Semanal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow border lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Semanal</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Ligações</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Emails</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span>Conversões</span>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="calls" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="emails" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="whatsapp" 
                stroke="#F59E0B" 
                strokeWidth={2}
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Insights da IA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4">🤖 Insights da IA</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-2">📈 Tendência Positiva</h4>
            <p className="text-sm text-gray-600">
              Suas conversões aumentaram 18% na última semana. Continue focando em leads com score > 80.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-2">⚠️ Atenção Necessária</h4>
            <p className="text-sm text-gray-600">
              3 leads no estágio "Proposta" há mais de 5 dias. Considere um follow-up urgente.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-2">🎯 Recomendação</h4>
            <p className="text-sm text-gray-600">
              Terça-feira é seu melhor dia de conversão. Agende calls importantes neste dia.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardCharts;