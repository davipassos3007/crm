import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useCRM } from '../contexts/CRMContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  DollarSign, 
  Calendar, 
  Phone, 
  Mail, 
  MessageSquare, 
  Eye, 
  Plus,
  TrendingUp,
  Clock,
  Target,
  Users
} from 'lucide-react';
import toast from 'react-hot-toast';

const PipelineKanban = () => {
  const { 
    leads, 
    pipelineStages, 
    moveLeadInPipeline, 
    getLeadsByStage,
    analytics 
  } = useCRM();
  
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddLead, setShowAddLead] = useState(false);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if (!destination) return;
    
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const leadId = parseInt(draggableId);
    const newStage = destination.droppableId;
    const stage = pipelineStages.find(s => s.id === newStage);
    
    moveLeadInPipeline(leadId, newStage);
    toast.success(`Lead movido para ${stage?.name}`, {
      icon: '🚀',
      duration: 2000
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStageMetrics = (stageId) => {
    const stageLeads = getLeadsByStage(stageId);
    const totalValue = stageLeads.reduce((sum, lead) => sum + (lead.valorNegociacao || 0), 0);
    return {
      count: stageLeads.length,
      value: totalValue
    };
  };

  const LeadCard = ({ lead, index }) => (
    <Draggable draggableId={lead.id.toString()} index={index}>
      {(provided, snapshot) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{ scale: 1.02 }}
          className={`bg-white rounded-lg border p-4 mb-3 cursor-pointer transition-all ${
            snapshot.isDragging 
              ? 'shadow-lg rotate-3 border-blue-300' 
              : 'shadow-sm hover:shadow-md border-gray-200'
          }`}
          onClick={() => setSelectedLead(lead)}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{lead.nome}</h4>
                <p className="text-xs text-gray-500">{lead.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className={`w-2 h-2 rounded-full ${
                lead.score > 90 ? 'bg-red-500' :
                lead.score > 70 ? 'bg-yellow-500' : 'bg-green-500'
              }`}></span>
              <span className="text-xs font-medium text-gray-600">{lead.score}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Valor Negociação</span>
              <span className="text-sm font-semibold text-gray-900">
                {formatCurrency(lead.valorNegociacao || 0)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Probabilidade</span>
              <span className="text-sm font-medium text-blue-600">{lead.probability}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all"
                style={{ width: `${lead.probability}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex space-x-1">
              {lead.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="text-green-600 hover:text-green-800 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {lead.proximaAtividade && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                Próxima: {new Date(lead.proximaAtividade).toLocaleDateString('pt-BR')}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </Draggable>
  );

  const StageColumn = ({ stage }) => {
    const stageLeads = getLeadsByStage(stage.id);
    const metrics = getStageMetrics(stage.id);

    return (
      <div className="bg-gray-50 rounded-lg p-4 min-h-screen">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: stage.color }}
              ></div>
              <h3 className="font-semibold text-gray-900">{stage.name}</h3>
            </div>
            <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
              {metrics.count}
            </span>
          </div>
          
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-medium">{formatCurrency(metrics.value)}</span>
            </div>
            <div className="flex justify-between">
              <span>Prob. Média:</span>
              <span className="font-medium">{stage.probability}%</span>
            </div>
          </div>
        </div>

        <Droppable droppableId={stage.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-32 transition-all rounded-lg ${
                snapshot.isDraggingOver 
                  ? 'bg-blue-50 border-2 border-dashed border-blue-300' 
                  : ''
              }`}
            >
              <AnimatePresence>
                {stageLeads.map((lead, index) => (
                  <LeadCard key={lead.id} lead={lead} index={index} />
                ))}
              </AnimatePresence>
              {provided.placeholder}
              
              {stageLeads.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Nenhum lead nesta etapa</p>
                </div>
              )}
            </div>
          )}
        </Droppable>

        {stage.id === 'lead-novo' && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddLead(true)}
            className="w-full mt-4 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            <Plus className="w-5 h-5 mx-auto mb-1" />
            <span className="text-sm">Adicionar Lead</span>
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pipeline de Vendas</h1>
          <p className="text-gray-600">Gerencie seus leads visualmente</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-white px-4 py-2 rounded-lg border">
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-gray-600">Pipeline Total:</span>
              <span className="font-semibold text-gray-900 ml-1">
                {formatCurrency(analytics.totalPipeline || 0)}
              </span>
            </div>
          </div>
          
          <div className="bg-white px-4 py-2 rounded-lg border">
            <div className="flex items-center text-sm">
              <Target className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-gray-600">Ticket Médio:</span>
              <span className="font-semibold text-gray-900 ml-1">
                {formatCurrency(analytics.avgDealSize || 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pipelineStages.slice(0, 4).map(stage => {
          const metrics = getStageMetrics(stage.id);
          return (
            <div key={stage.id} className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: stage.color }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{metrics.count}</span>
              </div>
              <div className="text-xs text-gray-500">
                {formatCurrency(metrics.value)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 overflow-x-auto min-h-screen">
          {pipelineStages.map(stage => (
            <StageColumn key={stage.id} stage={stage} />
          ))}
        </div>
      </DragDropContext>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedLead(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedLead.nome}</h2>
                <p className="text-gray-600">{selectedLead.email}</p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Score</label>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${selectedLead.score}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{selectedLead.score}</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Orçamento</label>
                  <p className="text-lg font-semibold text-gray-900">
                    {formatCurrency(selectedLead.orcamento)}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Origem</label>
                  <p className="text-gray-900 capitalize">{selectedLead.origem}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Valor Negociação</label>
                  <p className="text-lg font-semibold text-green-600">
                    {formatCurrency(selectedLead.valorNegociacao)}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Probabilidade</label>
                  <p className="text-lg font-semibold text-blue-600">
                    {selectedLead.probability}%
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Tags</label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedLead.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
              <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PipelineKanban;