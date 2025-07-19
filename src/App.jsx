import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CRMProvider } from './contexts/CRMContext';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import CRMDashboard from './components/CRMDashboard';

// Componente interno para verificar autenticação
const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
          <span className="text-gray-600">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <CRMProvider>
      <CRMDashboard />
    </CRMProvider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <AppContent />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#333',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </AuthProvider>
  );
};

export default App;