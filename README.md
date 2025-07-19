# CRM Imobiliário - Sistema de Gestão de Leads com IA

Um sistema CRM completo e moderno para imobiliárias, desenvolvido em React com funcionalidades de inteligência artificial para otimização de vendas e gestão de leads.

## 🚀 Funcionalidades

### Dashboard Inteligente
- Métricas em tempo real de leads e conversões
- Insights de IA com sugestões automáticas
- Previsões de vendas baseadas em dados
- Leads prioritários com scoring automático

### Gestão de Leads
- Cadastro e edição completa de leads
- Sistema de scoring automático
- Filtros avançados por status, origem e interesse
- Modal detalhado com histórico de interações
- Templates de mensagem personalizados

### Assistente de IA
- Análise automática de leads
- Sugestões de ações prioritárias
- Templates de mensagem inteligentes
- Previsão de probabilidade de conversão
- Chat interativo para consultas

### Automação de Marketing 🚀
- **Campanhas Multi-Canal**: Email e WhatsApp
- **Automações Inteligentes**: Triggers baseados em comportamento
- **Funis de Vendas**: Visualização completa do pipeline
- **Analytics Avançados**: Métricas de performance em tempo real
- **Segmentação Automática**: Leads organizados por perfil
- **Templates Personalizados**: Mensagens adaptadas por contexto

### Comunicação em Massa 📢
- **Disparo WhatsApp**: Mensagens em massa com alta taxa de entrega
- **SMS Marketing**: Campanhas via SMS com templates personalizados
- **Notificações Web Push**: Alertas em tempo real no navegador
- **Agendamento Inteligente**: Disparos programados por data/hora
- **Templates Variáveis**: Personalização automática com dados do lead
- **Filtros Avançados**: Segmentação por score, interesse e comportamento
- **Monitoramento em Tempo Real**: Métricas de entrega, leitura e resposta

### Gestão de Imóveis
- Catálogo de imóveis disponíveis
- Informações detalhadas (área, dormitórios, valor)
- Status de disponibilidade
- Interface visual atrativa

### Interface Responsiva
- Design moderno e profissional
- Sidebar colapsível para mobile
- Componentes reutilizáveis
- Experiência otimizada para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **JavaScript ES6+** - Linguagem de programação

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone [url-do-repositorio]
   cd crm-imobiliario
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa verificação de código

## 📱 Estrutura do Projeto

```
src/
├── App.jsx              # Componente principal
├── main.jsx            # Ponto de entrada
├── index.css           # Estilos globais
└── components/         # Componentes reutilizáveis (futuro)
```

## 🤖 Funcionalidades de IA

### Sistema de Scoring
- Análise automática baseada em múltiplos fatores
- Score de 0-100 para priorização
- Atualização em tempo real

### Sugestões Inteligentes
- Ações prioritárias baseadas no comportamento
- Templates personalizados por contexto
- Follow-ups automáticos

### Previsões
- Probabilidade de conversão por lead
- Estimativas de vendas mensais
- Melhor momento para contato

## 📧 Marketing Automation

### Campanhas Inteligentes
- **Email Marketing**: Sequências automatizadas com alta taxa de conversão
- **WhatsApp Business**: Automação de mensagens com templates aprovados
- **Segmentação Dinâmica**: Leads organizados automaticamente por perfil
- **A/B Testing**: Otimização contínua de performance

### Automações Comportamentais
- **Triggers Inteligentes**: Ações automáticas baseadas em score, tempo e comportamento
- **Follow-up Automático**: Nunca perca um lead por falta de contato
- **Retargeting**: Re-engajamento de leads inativos
- **Lead Nurturing**: Educação progressiva até a decisão de compra

### Analytics e Performance
- **Dashboard em Tempo Real**: Métricas de todas as campanhas
- **ROI Tracking**: Retorno sobre investimento detalhado
- **Conversion Funnels**: Visualização completa da jornada do cliente
- **Relatórios Avançados**: Insights acionáveis para otimização

## 📱 Comunicação Multi-Canal

### Disparo em Massa
- **Interface Intuitiva**: Modal completo para criação de disparos
- **3 Canais Integrados**: WhatsApp, SMS e Push Notifications
- **Seleção Inteligente**: Filtros rápidos por score e comportamento
- **Estimativa de Custo**: Cálculo automático por canal

### Templates Dinâmicos
- **Variáveis Personalizadas**: {{nome}}, {{telefone}}, {{orcamento}}
- **Aprovação de Templates**: Sistema de validação integrado
- **Categorização**: Boas-vindas, Follow-up, Promocional, Urgente
- **Preview em Tempo Real**: Visualização antes do envio

### Agendamento e Monitoramento
- **Agendamento Flexível**: Data e hora específicas
- **Status em Tempo Real**: Enviado, Entregue, Lido, Respondido
- **Histórico Completo**: Todas as comunicações registradas
- **Analytics Detalhado**: Performance por canal e campanha

## 📊 Dados Demo

O sistema vem com dados de demonstração incluindo:
- 3 leads com diferentes perfis e scores
- 2 imóveis de exemplo
- 3 campanhas de marketing ativas
- 3 automações configuradas
- 2 funis de vendas completos
- **3 disparos em massa** (WhatsApp, SMS, Push)
- **4 templates de mensagem** personalizáveis
- **2 disparos agendados** para os próximos dias
- Métricas simuladas de performance
- Histórico de interações fictício

## 🔧 Personalização

### Cores do Tema
As cores podem ser ajustadas no arquivo `tailwind.config.js`:
```javascript
colors: {
  'crm-primary': '#2563eb',
  'crm-secondary': '#1e40af', 
  'crm-accent': '#3b82f6',
}
```

### Dados Iniciais
Os dados de exemplo estão no `useEffect` do componente principal e podem ser substituídos por integrações com APIs reais.

## 🌟 Próximos Passos

- [ ] Integração com APIs de CRM
- [ ] Sistema de autenticação
- [ ] Notificações em tempo real
- [ ] Relatórios avançados
- [ ] Integração com WhatsApp Business
- [ ] Sistema de agendamento
- [ ] Upload de imagens para imóveis
- [ ] Exportação de dados

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💡 Suporte

Para suporte e dúvidas:
- Abra uma issue no GitHub
- Entre em contato via email
- Consulte a documentação

---

**Desenvolvido com ❤️ para revolucionar a gestão imobiliária**
