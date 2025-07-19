import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Simulando usuários do sistema
  const mockUsers = [
    {
      id: 1,
      nome: 'Admin Sistema',
      email: 'admin@crm.com',
      senha: 'admin123',
      role: 'admin',
      avatar: '/avatars/admin.png',
      permissions: ['all'],
      empresa: 'CRM Imobiliário',
      telefone: '(11) 99999-9999'
    },
    {
      id: 2,
      nome: 'João Vendedor',
      email: 'joao@crm.com',
      senha: 'vendedor123',
      role: 'vendedor',
      avatar: '/avatars/vendedor.png',
      permissions: ['leads', 'imoveis', 'comunicacao'],
      empresa: 'CRM Imobiliário',
      telefone: '(11) 88888-8888'
    },
    {
      id: 3,
      nome: 'Maria Marketing',
      email: 'maria@crm.com',
      senha: 'marketing123',
      role: 'marketing',
      avatar: '/avatars/marketing.png',
      permissions: ['marketing', 'comunicacao', 'leads'],
      empresa: 'CRM Imobiliário',
      telefone: '(11) 77777-7777'
    }
  ];

  useEffect(() => {
    // Verificar se existe usuário logado no localStorage
    const savedUser = localStorage.getItem('crmUser');
    const savedTheme = localStorage.getItem('crmTheme');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email, senha) => {
    setIsLoading(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email && u.senha === senha);
    
    if (foundUser) {
      const { senha: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('crmUser', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'Credenciais inválidas' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crmUser');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('crmTheme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    return user.permissions.includes('all') || user.permissions.includes(permission);
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('crmUser', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isLoading,
    theme,
    login,
    logout,
    toggleTheme,
    hasPermission,
    updateProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};